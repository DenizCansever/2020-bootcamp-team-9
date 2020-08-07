package com.compositepattern;

public class CompositeDemo {
	
	public static StringBuffer compositeBuilder = new StringBuffer();
	
	public static void main(String[] args) {
		
		CourseType course = new CourseType("Courses");
		
        CourseType mandatoryCourse = new CourseType("Mandatory Courses");
        CourseType optionalCourse = new CourseType("Optional Courses");
        
        CourseType departmentElectiveCourse = new CourseType("Department Elective Courses");
        CourseType unrestrictedElectiveCourse = new CourseType("Unrestricted Elective Courses");
        
        Course datastructures = new Course("Data Structures", 5);
        Course cloudcomputing = new Course("Cloud Computing", 5);
        Course nlp = new Course("Natural Language Processing", 5);
        Course economics101 = new Course("Economics 101", 3);
        
        
        course.add(mandatoryCourse);
        course.add(optionalCourse);
        optionalCourse.add(departmentElectiveCourse);
        optionalCourse.add(unrestrictedElectiveCourse);        
        mandatoryCourse.add(datastructures);
        departmentElectiveCourse.add(cloudcomputing);
        departmentElectiveCourse.add(nlp);
        unrestrictedElectiveCourse.add(economics101);
        
        course.printDetails();
    }
}
