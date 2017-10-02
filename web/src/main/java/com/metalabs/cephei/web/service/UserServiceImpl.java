package com.metalabs.cephei.web.service;

import com.metalabs.cephei.web.model.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    User user;


    @Override
    public void save(User user) {
        this.user = user;
    }

    @Override
    public List<User> list() {
        return List.of(user);
    }
}
