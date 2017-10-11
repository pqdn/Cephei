import com.metalabs.cephei.smartitem.DiffbotRequest.DiffbotRequest;
import com.metalabs.cephei.smartitem.DiffbotRequest.DiffbotRequestException;
import com.metalabs.cephei.smartitem.SmartItemRequest;

public class Main {
    public static void main(String[] args) {

        SmartItemRequest request;
        try {
            request = new DiffbotRequest("https://www.kinopoisk.ru/photostory/3051123/");
            request.execute();
            System.out.println(request.getSmartItem().getJsonItem());
        }catch(DiffbotRequestException e){
            System.out.println(e.getMessage());
        }
    }
}
