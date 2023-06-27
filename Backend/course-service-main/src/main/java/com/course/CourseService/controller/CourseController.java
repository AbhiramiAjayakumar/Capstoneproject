package com.course.CourseService.controller;

import com.course.CourseService.model.Course;
import com.course.CourseService.model.Topic;
import com.course.CourseService.service.CourseService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;


import java.util.List;


@RestController
@CrossOrigin("*")
@RequestMapping("/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @PostMapping
    public ResponseEntity<String> createCourse(@RequestParam("title") String title,
                                               @RequestParam("description") String description,
                                               @RequestParam("imageFile") MultipartFile imageFile) {

        try {
            courseService.createCourse(title, description,imageFile);
            return ResponseEntity.ok("Course added successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to add Course");
        }
    }
    @PutMapping("/{id}")
    public ResponseEntity<String> updateCourse(@PathVariable("id") Long id,
                                               @RequestParam("title") String title,
                                               @RequestParam("description") String description,
                                               @RequestParam("imageFile") MultipartFile imageFile) {
        try {
            courseService.updateCourse(id, title, description, imageFile);
            return ResponseEntity.ok("Movie updated successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update course");
        }
    }
    @GetMapping("/{courseId}/topics")
    public ResponseEntity<List<Topic>> getCourseTopics(@PathVariable Long courseId) {
        List<Topic> topics = courseService.getCourseTopics(courseId);
        return ResponseEntity.ok(topics);
    }

    @GetMapping("/viewAll")
    public List<Course> viewAllCourses() {
        return courseService.getAllCourses();
    }
    @GetMapping("/{courseId}")
    public ResponseEntity<Course> getCourseId(@PathVariable Long courseId)
    {
        Course course= courseService.getCourseId(courseId);
        return ResponseEntity.ok(course);
    }
}