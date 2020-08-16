package com.movie.springboot.models;

public class Movie extends MovieBase {

	private String movieClearArtImage;
	private String moviePosterImage;

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
