package com.course.CourseService.service;

import com.course.CourseService.dto.CourseDTO;
import com.course.CourseService.exception.CourseNotFoundException;
import com.course.CourseService.model.Course;
import com.course.CourseService.model.Topic;
import com.course.CourseService.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.auth.credentials.AwsBasicCredentials;
import software.amazon.awssdk.auth.credentials.AwsCredentialsProvider;
import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.regions.Region;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;


import software.amazon.awssdk.auth.credentials.DefaultCredentialsProvider;
import software.amazon.awssdk.services.s3.model.DeleteObjectRequest;


import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class CourseService {

    @Value("${s3.bucket.name}")
    private String bucketName;

    @Value("${aws.s3.folder}")
    private String folderName;

    private final CourseRepository courseRepository;

    public CourseService(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }


    public void createCourse(String title, String description, MultipartFile imageFile) {
        // Upload image file to AWS S3
        String imageFileName = generateUniqueFileName(imageFile.getOriginalFilename());
        uploadImageToS3(imageFile, imageFileName);

        // Create Movie object and save it in the database
        Course course = new Course(title,description,generateS3ImageUrl(imageFileName));
        courseRepository.save(course);
    }

    public List<Topic> getCourseTopics(Long courseId) {
        Optional<Course> courseOptional = courseRepository.findById(courseId);
        if (courseOptional.isPresent()) {
            Course course = courseOptional.get();
            return course.getTopics();
        }
        throw new CourseNotFoundException("Course not found with ID: " + courseId);
    }

    public Course getCourseId(Long courseId) {
        Optional<Course> courseOptional = courseRepository.findById(courseId);
        if (courseOptional.isPresent()) {
            Course course = courseOptional.get();
            return course;
        }
        throw new CourseNotFoundException("Course not found with ID: " + courseId);
    }

    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
    private String generateUniqueFileName(String originalFilename) {
        // Generate a unique filename for the image using a UUID
        String uniqueFilename = UUID.randomUUID().toString();

        // Extract the file extension from the original filename, if present
        String fileExtension = "";
        int extensionIndex = originalFilename.lastIndexOf('.');
        if (extensionIndex >= 0 && extensionIndex < originalFilename.length() - 1) {
            fileExtension = originalFilename.substring(extensionIndex + 1);
        }

        // Append the file extension to the unique filename, if available
        if (!fileExtension.isEmpty()) {
            uniqueFilename += "." + fileExtension;
        }

        return uniqueFilename;
    }


    private void uploadImageToS3(MultipartFile imageFile, String imageFileName) {
        try {
            S3Client s3Client = S3Client.builder()
                    .region(Region.US_EAST_1)
                    .credentialsProvider(() -> AwsBasicCredentials.create("AKIA3CFCSMHSNIXTR57B", "QR95lJnvuCO9eHNvxkIMlT9r2zhHLZtndWPXcFcV"))
                    .build();

            PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                    .bucket(bucketName)
                    .key(folderName + "/" + imageFileName)
                    .build();

            s3Client.putObject(putObjectRequest, RequestBody.fromBytes(imageFile.getBytes()));
        } catch (Exception e) {
            System.out.println("Exception occurred during S3 upload: " + e.getMessage());
        }

    }
        private String extractImageFileName(String imageUrl) {
            String[] parts = imageUrl.split("/");
            String lastPart = parts[parts.length - 1];
            return lastPart;
        }




        private void deleteImageFromS3(String imageUrl) {
            try {
                String imageFileName = extractImageFileName(imageUrl);

                S3Client s3Client = S3Client.builder()
                        .region(Region.US_EAST_1)
                        .credentialsProvider(() -> AwsBasicCredentials.create("AKIA4GO4DIU3FAXYUPC2", "jNaHA9OB4VzSHDmNinJhsY8VsqjWpVUOFmrwhWku"))
                        .build();

                DeleteObjectRequest deleteObjectRequest = DeleteObjectRequest.builder()
                        .bucket(bucketName)
                        .key(folderName + "/" + imageFileName)
                        .build();

                s3Client.deleteObject(deleteObjectRequest);
            } catch (Exception e) {
                System.out.println("Exception occurred during S3 image deletion: " + e.getMessage());
            }
        }


//    private String extractBucketFromImageUrl(String imageUrl) {
//        String[] parts = imageUrl.split("/");
//        if (parts.length >= 3) {
//            return parts[2];
//        }
//        throw new IllegalArgumentException("Invalid image URL: " + imageUrl);
//    }
//
//    private String extractKeyFromImageUrl(String imageUrl) {
//        String[] parts = imageUrl.split("/");
//        if (parts.length >= 5 && parts[3].equals("images")) {
//            return parts[3];
//        }
//        throw new IllegalArgumentException("Invalid image URL: " + imageUrl);
//    }





        private String generateS3ImageUrl(String imageFileName) {
            return "https://s3.amazonaws.com/" + bucketName + "/" + folderName + "/" + imageFileName;
        }

    public void updateCourse(Long id, String title, String description, MultipartFile imageFile) {

            Course course = courseRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Course not found with ID: " + id));

            // Delete existing image from AWS S3
            deleteImageFromS3(course.getImageurl());

            // Upload new image file to AWS S3
            String imageFileName = generateUniqueFileName(imageFile.getOriginalFilename());
            uploadImageToS3(imageFile, imageFileName);

            // Update movie details
            course.setTitle(title);
            course.setDescription(description);
            course.setImageurl(generateS3ImageUrl(imageFileName));

            courseRepository.save(course);
        }
    }



