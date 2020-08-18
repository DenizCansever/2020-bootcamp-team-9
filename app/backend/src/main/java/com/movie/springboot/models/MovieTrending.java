package com.movie.springboot.models;

public class MovieTrending {
	
	private int watchers;
	public int getWatchers() {
		return watchers;
	}
	public void setWatchers(int watchers) {
		this.watchers = watchers;
	}
	public MovieBase getMovie() {
		return movie;
	}
	public void setMovie(MovieBase movie) {
		this.movie = movie;
	}
	private MovieBase movie;

}
