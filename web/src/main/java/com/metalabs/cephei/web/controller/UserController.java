package com.metalabs.cephei.web.controller;

import com.metalabs.cephei.web.model.User;
import com.metalabs.cephei.web.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

import java.util.Locale;

@Controller
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping("/")
	public String userForm(Locale locale, Model model) {
		return "editUsers";
	}
	
	@ModelAttribute("user")
    public User formBackingObject() {
        return new User();
    }

}
