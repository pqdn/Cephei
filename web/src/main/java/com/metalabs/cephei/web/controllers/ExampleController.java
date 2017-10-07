package com.metalabs.cephei.web.controllers;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/example")
public class ExampleController {

    @RequestMapping(method = RequestMethod.GET, produces =  "application/json; charset=utf-8")
    public BoxMessage cashInCommission() {
        return new BoxMessage("test rest field");
    }

    class BoxMessage{
        private String message;

        public BoxMessage(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
