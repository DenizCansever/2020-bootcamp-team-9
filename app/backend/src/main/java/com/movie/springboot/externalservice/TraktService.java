package com.movie.springboot.externalservice;


import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.movie.springboot.models.Movie;
import com.movie.springboot.models.MovieDetail;
import com.movie.springboot.models.MovieId;
import com.movie.springboot.models.MovieImages;
import com.movie.springboot.models.MovieSearch;
import com.movie.springboot.models.People;

@Service
public class TraktService {
	private final RestTemplate restTemplate;
	@Value("${trakt.apikey}")
	private String _traktApiKey;
	@Autowired
	private FanartService _fanartService;

	public TraktService(RestTemplateBuilder restTemplateBuilder) {
		this.restTemplate = restTemplateBuilder.build();
	}

	@Cacheable(cacheNames = "movie", key = "#query")
	public List<Movie> getTraktPopularMovies(String query) {

		String url = "https://api.trakt.tv/movies/popular" + query;

		HttpEntity<?> request = getHttpEntity();

		List<Movie> movieList = new ArrayList<Movie>();

		try {

			ResponseEntity<Movie[]> response = this.restTemplate.exchange(url, HttpMethod.GET, request, Movie[].class,
					1);

			if (response.getStatusCode() == HttpStatus.OK) {

				movieList = Arrays.asList(response.getBody());

				for (Movie item : movieList) {
					MovieImages images = _fanartService.getImages(item.getIds().getTmdb());

					if (images.getHdmovieclearart() != null) {

						item.setMovieClearArtImage(images.getHdmovieclearart()[0].getUrl());
					}
					if (images.getMovieposter() != null) {

						item.setMoviePosterImage(images.getMovieposter()[0].getUrl());
					}

				}

				return movieList;

			} else {
				return movieList;
			}
		} catch (Exception ex) {

			return movieList;
		}

	}

	@Cacheable(cacheNames = "moviesearch", key = "#query")
	public List<Movie> getTraktSearchbMovies(String query) {

		String url = "https://api.trakt.tv/search/movie?query=" + query;

		HttpEntity<?> request = getHttpEntity();

		List<Movie> searchMovies = new ArrayList<Movie>();

		try {

			ResponseEntity<MovieSearch[]> response = this.restTemplate.exchange(url, HttpMethod.GET, request,
					MovieSearch[].class, 1);

			if (response.getStatusCode() == HttpStatus.OK) {

				for (MovieSearch item : response.getBody()) {
					Movie movie = new Movie();

					MovieImages images = _fanartService.getImages(item.getMovie().getIds().getTmdb());
					if (images.getHdmovieclearart() != null) {
						movie.setMovieClearArtImage(images.getHdmovieclearart()[0].getUrl());
					}
					if (images.getMovieposter() != null) {

						movie.setMoviePosterImage(images.getMovieposter()[0].getUrl());
					}

					movie.setIds(item.getMovie().getIds());
					movie.setTitle(item.getMovie().getTitle());
					movie.setYear(item.getMovie().getYear());
					searchMovies.add(movie);
				}

				return searchMovies;
			} else {
				return searchMovies;
			}
		} catch (Exception ex) {

			return searchMovies;
		}

	}

	@Cacheable(cacheNames = "movieDetail", key = "#traktId")
	public MovieDetail getMovieDetails(Long traktId) {

		String url = "https://api.trakt.tv/movies/" + traktId + "?extended=full";

		HttpEntity<?> request = getHttpEntity();

		ResponseEntity<MovieDetail> response = this.restTemplate.exchange(url, HttpMethod.GET, request,
				MovieDetail.class, 1);

		if (response.getStatusCode() == HttpStatus.OK) {

			MovieDetail item = response.getBody();

			MovieImages images = _fanartService.getImages(item.getIds().getTmdb());

			if (images.getHdmovieclearart() != null) {
				item.setMovieClearArtImage(images.getHdmovieclearart()[0].getUrl());
			}
			if (images.getMovieposter() != null) {

				item.setMoviePosterImage(images.getMovieposter()[0].getUrl());
			}
			item.setPeople(getPeopleList(traktId).getPeople());

			return item;

		} else {

			return new MovieDetail();
		}
	}

	private People getPeopleList(Long traktId) {

		String url = "https://api.trakt.tv/movies/" + traktId + "/people";

		HttpEntity<?> request = getHttpEntity();

		ResponseEntity<People> response = this.restTemplate.exchange(url, HttpMethod.GET, request, People.class, 1);

		return response.getBody();

	}

	private HttpEntity<?> getHttpEntity() {

		HttpHeaders headers = new HttpHeaders();

		headers.set("trakt-api-key", _traktApiKey);
		headers.set("Content-Type", "application/json");
		headers.set("trakt-api-version", "2");

		return new HttpEntity<Object>(headers);
	}

}
