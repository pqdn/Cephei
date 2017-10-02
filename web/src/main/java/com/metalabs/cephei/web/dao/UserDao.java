package com.metalabs.cephei.web.dao;

import java.util.List;

import com.metalabs.cephei.web.model.User;

public interface UserDao {
   void save(User user);
   List<User> list();
}
