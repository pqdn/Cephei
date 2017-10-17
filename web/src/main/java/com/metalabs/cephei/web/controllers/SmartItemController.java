package com.metalabs.cephei.web.controllers;

import com.metalabs.cephei.smartitem.interfaces.SmartItemRequest;
import com.metalabs.cephei.smartitem.interfaces.SmartItemRequestFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/smart-item")
public class SmartItemController {

    @Autowired
    private SmartItemRequestFactory smartItemRequestFactory;

    @RequestMapping("/test")
    public void test(String str1, String str2) {
        System.out.println(str1);
        System.out.println(str2);
    }

    @RequestMapping("/request")
    public String request(String url, String smartItemDescription) {
        SmartItemRequest request = smartItemRequestFactory.makeSmartItemRequest(url, smartItemDescription);
        return request.execute();
    }
}
