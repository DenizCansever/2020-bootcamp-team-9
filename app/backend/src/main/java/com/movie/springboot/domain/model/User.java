package com.movie.springboot.domain.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import com.movie.springboot.models.Movie;

@Document(collection = "users")
public class User {
	@Id
	private String id;
	private String name;

	private List<Movie> watched;
	private List<Movie> watches;

	public List<Movie> getWatches() {
		return watches;
	}

	public void setWatches(List<Movie> watches) {
		this.watches = watches;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Movie> getWatched() {
		return watched;
	}

	public void setWatched(List<Movie> watched) {
		this.watched = watched;
	}

	public void addMovie(Movie movie) {

		this.watched.add(movie);
	}

	public void addWatches(Movie movie) {
		this.watches.add(movie);
	}

	public void removeWatches(long trakt) {

		this.watches.removeIf(m -> m.getIds().getTrakt() == trakt);
	}

}
