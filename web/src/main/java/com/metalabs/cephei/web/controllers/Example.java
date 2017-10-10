package com.metalabs.cephei.web.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Example {


    @RequestMapping("/hello")
    String home() {
        return "Hello world";
    }


    @RequestMapping("/example")
    List<Item> home2() {
        List<Item> items = List.of(new Item(12, "Vasay"), new Item(13, "Petya"));
        return items;
    }

    class Item{
        int id;
        String name;

        public Item(int id, String name) {
            this.id = id;
            this.name = name;
        }

        public int getId() {
            return id;
        }

        public void setId(int id) {
            this.id = id;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }
    }
}
