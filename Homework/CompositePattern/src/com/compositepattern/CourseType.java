package com.compositepattern;

import java.util.ArrayList;
import java.util.List;

public class CourseType implements ICourse {
	
	private String courseType;
	private ArrayList subCourses;
	
	public CourseType(String courseType) {
		super();
		this.courseType = courseType;
		subCourses = new ArrayList();
	}
	
    public void add(Object obj) {
		subCourses.add(obj);
	}
			
    
	@Override
	public void printDetails() {
		System.out.println(CompositeDemo.compositeBuilder + courseType);
        CompositeDemo.compositeBuilder.append("   ");
        for (Object subCourse : subCourses) {
            ICourse obj = (ICourse) subCourse;
            obj.printDetails();
        }
        CompositeDemo.compositeBuilder.setLength(CompositeDemo.compositeBuilder.length() - 3);
	}
}
