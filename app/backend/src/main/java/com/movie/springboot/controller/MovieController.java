package com.movie.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import com.movie.springboot.externalservice.TraktService;

import com.movie.springboot.models.Movie;
import com.movie.springboot.models.MovieDetail;

@RestController
@RequestMapping("api")
public class MovieController {

	@Autowired
	private TraktService _traktservice;

	@GetMapping("/movies/popular")
	public List<Movie> getPopularMovies(@RequestParam(name = "page", required = false, defaultValue = "1") String page,
			@RequestParam(name = "limit", required = false, defaultValue = "15") String limit,
			@RequestParam(name = "years", required = false) String years,
			@RequestParam(name = "genres", required = false) String genres,
			@RequestParam(name = "ratings", required = false) String ratings) {

		String queryString = GetQueryString(limit, page, years, genres, ratings);

		return _traktservice.getTraktPopularMovies(queryString);

	}

	@GetMapping("/movies/trending")
	public List<Movie> getTrendingMovies(@RequestParam(name = "page", required = false, defaultValue = "1") String page,
			@RequestParam(name = "limit", required = false, defaultValue = "15") String limit,
			@RequestParam(name = "years", required = false) String years,
			@RequestParam(name = "genres", required = false) String genres,
			@RequestParam(name = "ratings", required = false) String ratings) {

		String queryString = GetQueryString(limit, page, years, genres, ratings);

		return _traktservice.getTraktTrendingMovies(queryString);

	}

	@GetMapping("/movie/search")
	public List<Movie> getSearchMoives(@RequestParam(name = "query", required = false) String query) {

		query = query == null ? "" : query;

		return _traktservice.getTraktSearchbMovies(query);
	}

	@GetMapping("/movie/{traktId}")
	public MovieDetail getMovieDetail(@PathVariable Long traktId) {
		return _traktservice.getMovieDetails(traktId);
	}

	public boolean isNullOrEmpty(String str) {
		if (str != null && !str.isEmpty())
			return false;
		return true;
	}

	private String GetQueryString(String limit, String page, String years, String genres, String ratings) {

		UriComponentsBuilder builder = UriComponentsBuilder.newInstance().queryParam("expended", "full")
				.queryParam("limit", limit).queryParam("page", page);

		if (!isNullOrEmpty(years)) {
			builder = builder.queryParam("years", years);
		}
		if (!isNullOrEmpty(genres)) {
			builder = builder.queryParam("genres", genres);
		}
		if (!isNullOrEmpty(ratings)) {
			builder = builder.queryParam("ratings", ratings);
		}
		return builder.build().toUriString();
	}
}
