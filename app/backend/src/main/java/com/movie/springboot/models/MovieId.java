package com.movie.springboot.models;

import java.io.Serializable;

public class MovieId implements Serializable {

	private long trakt;
	private long tmdb;

	public long getTrakt() {
		return trakt;
	}

	public void setTrakt(long trakt) {
		this.trakt = trakt;
	}

	public long getTmdb() {
		return tmdb;
	}

	public void setTmdb(long tmdb) {
		this.tmdb = tmdb;
	}
}
