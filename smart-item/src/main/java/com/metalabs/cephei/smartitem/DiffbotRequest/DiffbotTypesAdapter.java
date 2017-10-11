package com.metalabs.cephei.smartitem.DiffbotRequest;

import com.metalabs.cephei.smartitem.SmartItemType;
import com.syncthemall.diffbot.model.PageType;


public class DiffbotTypesAdapter {
    //    static SmartItemType()
    public static SmartItemType adapt(PageType pageType){
        if(pageType == PageType.ARTICLE){
            return SmartItemType.ARTICLE;
        }else if(pageType == PageType.PRODUCT){
            return SmartItemType.PRODUCT;
        }else{
            return SmartItemType.UNKNOWN;
        }
    }
}
