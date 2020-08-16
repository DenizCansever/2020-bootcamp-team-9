package com.movie.springboot.models;

import java.io.Serializable;

public class MovieBase implements Serializable {

	private String title;
	private int year;
	private MovieId ids;

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public MovieId getIds() {
		return ids;
	}

	public void setIds(MovieId ids) {
		this.ids = ids;
	}

}
