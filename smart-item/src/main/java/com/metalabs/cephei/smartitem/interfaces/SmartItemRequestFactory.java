package com.metalabs.cephei.smartitem.interfaces;

import com.metalabs.cephei.smartitem.interfaces.SmartItemRequest;

public interface SmartItemRequestFactory {
    SmartItemRequest makeSmartItemRequest(String url, String smartItemDescription);
}
