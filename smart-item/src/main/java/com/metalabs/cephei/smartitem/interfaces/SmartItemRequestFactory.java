package com.metalabs.cephei.smartitem.interfaces;

public interface SmartItemRequestFactory {
    SmartItemRequest makeSmartItemRequest(String url, String smartItemDescription);
}
