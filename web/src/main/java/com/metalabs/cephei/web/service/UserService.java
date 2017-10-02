package com.metalabs.cephei.web.service;

import java.util.List;

import com.metalabs.cephei.web.model.User;

public interface UserService {
   void save(User user);

   List<User> list();
}
