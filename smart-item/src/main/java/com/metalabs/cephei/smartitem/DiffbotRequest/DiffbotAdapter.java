package com.metalabs.cephei.smartitem.DiffbotRequest;

import com.metalabs.cephei.smartitem.SmartItem;
import com.metalabs.cephei.smartitem.SmartItemType;
import com.syncthemall.diffbot.Diffbot;
import com.syncthemall.diffbot.exception.DiffbotParseException;
import com.syncthemall.diffbot.model.PageType;
import com.syncthemall.diffbot.model.article.Article;
import com.syncthemall.diffbot.model.classifier.Classified;
import com.syncthemall.diffbot.model.products.Product;
import com.syncthemall.diffbot.model.products.Products;


public class DiffbotAdapter {
    //    static SmartItemType()
    public static SmartItem adapt(Classified classified){
        SmartItem smartItem;

        try {
            Article article = classified.asArticle();
            return new SmartItem(SmartItemType.ARTICLE, article.getHtml());
        }catch(Exception e) {

        }

        try {
            Products products = classified.asProducts();
            return new SmartItem(SmartItemType.PRODUCT, products.getUrl());
        }catch(Exception e) {

        }

        return new SmartItem(SmartItemType.UNKNOWN, classified.getHumanLanguage());
    }
}
