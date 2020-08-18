package com.movie.springboot.models;

public class Movie extends MovieBase {

	private String movieClearArtImage;
	private String moviePosterImage;
	private int watchers;
	 

	public int getWatchers() {
		return watchers;
	}

	public void setWatchers(int watchers) {
		this.watchers = watchers;
	}

	public String getMovieClearArtImage() {
		return movieClearArtImage;
	}

	public void setMovieClearArtImage(String movieClearArtImage) {
		this.movieClearArtImage = movieClearArtImage;
	}

	public String getMoviePosterImage() {
		return moviePosterImage;
	}

	public void setMoviePosterImage(String moviePosterImage) {
		this.moviePosterImage = moviePosterImage;
	}

}
