package com.metalabs.cephei.web.controllers;

import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;

import java.util.LinkedList;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class SmartItemControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    List<SmartItemRequestBody> smartItemRequestBodies;

    @BeforeEach
    void setUpRequestDescription() {
        smartItemRequestBodies = new LinkedList<SmartItemRequestBody>();

        smartItemRequestBodies.add(new SmartItemRequestBody("https://biggeek.ru/products/apple-iphone-8-64gb-space-gray",
                "{\"type\": \"prodcut\", \"requiredAttributes\": [\"name\", \"price\", \"description\", \"images\", \"videos\"]}"));
    }

    @Test
    public void testSmartItemRequest() {
        for (SmartItemRequestBody item: smartItemRequestBodies) {
            String request = createRequest(item);
            System.out.println(request);
            String body = this.restTemplate.getForObject(request, String.class);
            //TODO сделать нормальное сравнение с шаблоном ответа по запросу
            System.out.println(body);
            assertNotNull(body);
        }
    }


    private String createRequest(SmartItemRequestBody smartItemRequestBody) {

        StringBuilder stringBuilder = new StringBuilder()
                .append("/rest/smart-item/request?url=")
                .append(smartItemRequestBody.getUrl())
                .append("&description=")
                .append(smartItemRequestBody.getDescription());

        return stringBuilder.toString();
    }

    private class SmartItemRequestBody {

        private String url;

        private String description;

        public SmartItemRequestBody(String url, String description) {
            this.url = url;
            this.description = description;
        }

        public String getUrl() {
            return url;
        }

        public String getDescription() {
            return description;
        }
    }
}
