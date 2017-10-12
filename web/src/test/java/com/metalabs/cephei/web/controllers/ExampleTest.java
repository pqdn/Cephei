package com.metalabs.cephei.web.controllers;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class ExampleTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    public void home() {
        String body = this.restTemplate.getForObject("/rest/hello", String.class);
        assertThat(body).isEqualTo("Hello World");
    }
}