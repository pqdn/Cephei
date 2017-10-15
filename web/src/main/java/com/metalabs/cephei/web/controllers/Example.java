package com.metalabs.cephei.web.controllers;

import com.metalabs.cephei.web.model.PseudoBot;
import com.metalabs.cephei.web.repository.PseudoBotRepository;
import com.metalabs.cephei.web.service.PseudoBotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class Example {

    @Autowired
    private PseudoBotService pseudoBotService;

    @RequestMapping("/hello")
    String home() {
        return "Hello world";
    }


    @RequestMapping("/example")
    List<Item> home2() {
        List<Item> items = List.of(new Item(12, "Vasay"), new Item(13, "Petya"));
        return items;
    }

    @RequestMapping("/pseudobot")
    List<PseudoBot> home3() {
        return pseudoBotService.findAll();
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
