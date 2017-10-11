package com.metalabs.cephei.smartitem.DiffbotRequest;

import com.google.api.client.http.apache.ApacheHttpTransport;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.metalabs.cephei.smartitem.SmartItem;
import com.metalabs.cephei.smartitem.SmartItemRequest;
import com.metalabs.cephei.smartitem.SmartItemType;
import com.syncthemall.diffbot.Diffbot;
import com.syncthemall.diffbot.exception.DiffbotException;
import com.syncthemall.diffbot.model.PageType;
import com.syncthemall.diffbot.model.classifier.Classified;

public class DiffbotRequest extends SmartItemRequest{
    private Diffbot diffbot;
    private final String token = "d0c3b199e5d4935d1872a1a18253a0df";

    public DiffbotRequest(String url) throws DiffbotRequestException {
        super(url);
        try{
            diffbot = new Diffbot(new ApacheHttpTransport(), new JacksonFactory(), token);
        }catch(javax.xml.bind.JAXBException e){
            throw new DiffbotRequestException("bad instance Diffbot", e);
        }
    }

    @Override
    public void execute() {
        Classified classified;
        try {
            classified = diffbot.classifier().analyze(url).execute();
        }catch (DiffbotException e){
            return;
        }

        smartItem = DiffbotAdapter.adapt(classified);
    }

}
