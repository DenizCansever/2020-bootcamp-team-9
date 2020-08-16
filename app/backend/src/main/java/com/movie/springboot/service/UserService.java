package com.movie.springboot.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.movie.springboot.domain.model.User;
import com.movie.springboot.dto.UserDto;
import com.movie.springboot.models.Movie;
import com.movie.springboot.repository.UserRepository;
@Service
public class UserService {
	@Autowired
    private UserRepository _userRepository;
	
	public void addUser(UserDto userDto) {
		
		List<Movie> watched= new ArrayList<Movie>();
		
		User user= new User();
		
		user.setId(userDto.getId());
		user.setName(userDto.getName());
		user.setWatched(watched);
		
		_userRepository.save(user);
		
	}
	public List<Movie> getWatched(String userId){
		
		Optional<User> optionalUser= _userRepository.findById(userId);
		
		User user= optionalUser.get();
		
		return user.getWatched();
		
	}
	
	public List<Movie> addWatched(Movie movie, String userId){
		
		Optional<User> optionalUser= _userRepository.findById(userId);
		
		User user= optionalUser.get();
		
	   boolean isMovieExist=user.getWatched()
		.stream()
		.filter(u->u.getIds().getTrakt()==movie.getIds().getTrakt())
		.findFirst().isPresent();
		
		if(!isMovieExist) {
			
		 user.addMovie(movie);
		 User updatedUser =_userRepository.save(user);
		 return updatedUser.getWatched();
		}
		
		return user.getWatched();
		
	}

}
