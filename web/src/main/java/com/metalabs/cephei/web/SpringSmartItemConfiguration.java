package com.metalabs.cephei.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableAutoConfiguration
@ComponentScan("com.metalabs.cephei.smartitem")
public class SpringSmartItemConfiguration {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}
