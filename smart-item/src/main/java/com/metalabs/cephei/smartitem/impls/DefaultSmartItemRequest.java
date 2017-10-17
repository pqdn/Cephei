package com.metalabs.cephei.smartitem.impls;

import com.metalabs.cephei.smartitem.interfaces.SmartItemRequest;

public class DefaultSmartItemRequest implements SmartItemRequest {
    private String url;
    private String smartItemDescription;

    public DefaultSmartItemRequest(String url, String smartItemDescription) {
        this.url = url;
        this.smartItemDescription = smartItemDescription;
    }

    @Override
    public String execute() {
        return new String("{\n" +
                "  \"type\": \"product\",\n" +
                "  \"attributes\": {\n" +
                "    \"name\": \"iphone 8\",\n" +
                "    \"price\": \"80000 руб\",\n" +
                "    \"description\": \"бла-бла iphone 8\",\n" +
                "    \"images\": {\n" +
                "      \"image\": \"https://biggeek.ru/files/products/iphone8-spgray-select-2017_av2.435x435.png?ce33550514f746732a8b1b76d039e487\"\n" +
                "    }\n" +
                "  }\n" +
                "}");
    }
}
