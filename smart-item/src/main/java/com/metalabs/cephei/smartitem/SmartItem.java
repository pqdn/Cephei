package com.metalabs.cephei.smartitem;

import com.metalabs.cephei.smartitem.Attribute.Attribute;

import java.util.Map;
import java.util.Set;

public class SmartItem {
    private String json;
    private String url;
//    private List<String> attributeNames;
    private Map<String, Attribute> attrbutes;

    private SmartItemType type = SmartItemType.UNKNOWN;


    public SmartItem(SmartItemType type, String json){
        this.type = type;
        this.json = json;
    }

    public String getJsonItem() {
        return new String("This is json!!!");
//        return json;
    }

    public SmartItemType getType() {
        return type;
    }

    public void setType(SmartItemType type) {
        this.type = type;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    Attribute getAttribute(String name){
        return attrbutes.get(name);
    }

    Set<String> getAttributeNames(){
        return attrbutes.keySet();
    }
}
