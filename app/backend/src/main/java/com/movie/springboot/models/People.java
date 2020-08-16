package com.movie.springboot.models;

import com.fasterxml.jackson.annotation.JsonProperty;

public class People {
	
	
	   @JsonProperty("cast")
	private PeopleList[] people;

	public PeopleList[] getPeople() {
		return people;
	}

	public void setPeople(PeopleList[] people) {
		this.people = people;
	}
	 
}

