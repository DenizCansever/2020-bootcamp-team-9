package com.compositepattern;

public class Course implements ICourse {
	
	private String courseName;
	private int courseCredit;

	public Course(String courseName, int courseCredit) {
		this.courseName = courseName;
		this.courseCredit = courseCredit;
	}

	@Override
	public void printDetails() {
		System.out.println(CompositeDemo.compositeBuilder + courseName + " - " + courseCredit + " credit");
	}
}
