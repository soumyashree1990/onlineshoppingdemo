package com.example.onlineshoppingdemo.Service;

import com.example.onlineshoppingdemo.Model.User;
import com.example.onlineshoppingdemo.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    private static List<User> users = new ArrayList<>();

    static {
        users.add(new User("user1@gmail.com","user1"));
        users.add(new User("user2@gmail.com","user2"));
    }

    public void saveInitialBatch(){
        userRepository.save(users);
    }

}