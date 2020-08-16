package com.movie.springboot.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.movie.springboot.domain.model.User;
@Repository
public interface UserRepository extends MongoRepository<User, String> {

}
