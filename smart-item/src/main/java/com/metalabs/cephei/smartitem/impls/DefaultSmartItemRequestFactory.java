package com.metalabs.cephei.smartitem.impls;

import com.metalabs.cephei.smartitem.interfaces.SmartItemRequest;
import com.metalabs.cephei.smartitem.interfaces.SmartItemRequestFactory;

public class DefaultSmartItemRequestFactory implements SmartItemRequestFactory {
    @Override
    public SmartItemRequest makeSmartItemRequest(String url, String smartItemDescription) {
        return new DefaultSmartItemRequest(url, smartItemDescription);
    }
}
