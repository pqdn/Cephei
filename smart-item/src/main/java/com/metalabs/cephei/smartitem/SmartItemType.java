package com.metalabs.cephei.smartitem;


//public enum SmartItemType {
//    UNKNOWN,
//    PRODUCT,
//    ARTICLE
//}

public class SmartItemType {
    String name;

    int value;

    public static final SmartItemType UNKNOWN = new SmartItemType("Unknown", 100);
    public static final SmartItemType PRODUCT = new SmartItemType("Product", 200);
    public static final SmartItemType ARTICLE = new SmartItemType("Article", 300);

    private SmartItemType(String name, int value){
        this.name = name;
        this.value = value;
    }

    @Override
    public String toString(){return name;}

    @Override
    public int hashCode() {
        return this.value;
    }

    @Override
    public boolean equals(Object obj) {
        if (this == obj)
            return true;

        try {
            SmartItemType smtObj = (SmartItemType)obj;
            return (smtObj.value == this.value);
        } catch (Exception ex) {
            return false;
        }
    }
}
