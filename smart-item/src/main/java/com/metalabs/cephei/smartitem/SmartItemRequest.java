package com.metalabs.cephei.smartitem;

import java.util.List;
import java.util.logging.Logger;

abstract public class SmartItemRequest {
    private static final Logger LOGGER = Logger.getLogger(SmartItemRequest.class.getName());

    private SmartItem smartItem;
    private String url;
    private List<SmartItem> smartItems;

    SmartItemRequest(String url){
        this.url = url;

//        System.out.println("Выполнился запрос");
    }

    public abstract void execute();

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public SmartItem getSmartItem() {
        return smartItem;
    }
}
