package com.movie.springboot.externalservice;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.movie.springboot.models.MovieDetail;
import com.movie.springboot.models.MovieImages;

@Service
public class FanartService {
	
	 private final RestTemplate restTemplate;
	 @Value("${fanart.apikey}")
	 private String _fanartApiKey;
	 
	  public FanartService(RestTemplateBuilder restTemplateBuilder) {
	        this.restTemplate = restTemplateBuilder.build();
	    }
	  

	    public MovieImages getImages(long tmdId) {
	    	
	        String url = "http://webservice.fanart.tv/v3/movies/"+tmdId+"?api_key="+_fanartApiKey;
	        
	        try {
	        	ResponseEntity<MovieImages> response = this.restTemplate.exchange(url, HttpMethod.GET, null, MovieImages.class, 1);
		        
		        if(response.getStatusCode() == HttpStatus.OK) {
		        	
		        	return (MovieImages) response.getBody();
		        }else {
		        	
		        	return new MovieImages();
		        }
	        }
	        catch(Exception ex){
	        	
	        	return new MovieImages();
	        }
	        
	        
	    }
}
