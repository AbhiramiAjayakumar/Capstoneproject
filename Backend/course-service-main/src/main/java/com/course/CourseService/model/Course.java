package com.course.CourseService.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "courses")
public class Course {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        private String title;
        private String description;
        private String imageurl;

        public Course(String title, String description, String imageurl) {
                this.title = title;
                this.description = description;
                this.imageurl = imageurl;
        }

        @OneToMany(targetEntity=Topic.class,
                cascade=CascadeType.ALL,
                fetch=FetchType.LAZY,
                orphanRemoval=true
        )

        @JoinColumn(referencedColumnName = "id",name="course_id")

        List<Topic> topics ;
    }



