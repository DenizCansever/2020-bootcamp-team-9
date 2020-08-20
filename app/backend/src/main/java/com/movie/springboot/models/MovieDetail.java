package com.movie.springboot.models;

import java.io.Serializable;
import java.util.ArrayList;

public class MovieDetail implements Serializable {

	private String title;
	private int year;
	private MovieId ids;
	private String tagline;
	private String overview;
	private String released;
	private Double rating;
	private int runtime;
	private Long votes;
	private String trailer;
	private String homepage;
	private ArrayList<String> genres;
	private String movieClearArtImage;
	private String moviePosterImage;
	private PeopleList[] people;

	public String getTrailer() {
		return trailer;
	}

	public void setTrailer(String trailer) {
		this.trailer = trailer;
	}

	public String getHomepage() {
		return homepage;
	}

	public void setHomepage(String homepage) {
		this.homepage = homepage;
	}

	public int getRuntime() {
		return runtime;
	}

	public void setRuntime(int runtime) {
		this.runtime = runtime;
	}

	public PeopleList[] getPeople() {
		return people;
	}

	public void setPeople(PeopleList[] people) {
		this.people = people;
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

	public String getTagline() {
		return tagline;
	}

	public void setTagline(String tagline) {
		this.tagline = tagline;
	}

	public String getOverview() {
		return overview;
	}

	public void setOverview(String overview) {
		this.overview = overview;
	}

	public String getReleased() {
		return released;
	}

	public void setReleased(String released) {
		this.released = released;
	}

	public Double getRating() {
		return rating;
	}

	public void setRating(Double rating) {
		this.rating = rating;
	}

	public Long getVotes() {
		return votes;
	}

	public void setVotes(Long votes) {
		this.votes = votes;
	}

	public ArrayList<String> getGenres() {
		return genres;
	}

	public void setGenres(ArrayList<String> genres) {
		this.genres = genres;
	}

	public MovieId getIds() {
		return ids;
	}

	public void setIds(MovieId ids) {
		this.ids = ids;
	}

	public int getYear() {
		return year;
	}

	public void setYear(int year) {
		this.year = year;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

}
