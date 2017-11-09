package com.example.onlineshoppingdemo.Repository;

import com.example.onlineshoppingdemo.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Long> {
}