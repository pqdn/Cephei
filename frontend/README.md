# Запуск

## Запуск с помощью node.js

1. Установите node.js.
3. Зайдите в папку **frontend**: `cd frontend`
2. Затем выполните `npm install` 
3. Запустите сервер hot replace webpack `npm run dev`.
4. Откройте в браузере [http://localhost:8080/](http://localhost:8080/).
Должно отобразиться приложение, в консоли браузера должна быть надпись: `[HMR] Waiting for update signal from WDS...`.
4. Сервер продолжит работать и отслеживать изменения в исходных кодах.
То есть при изменении исходных кодов приложение в брауере будет перезагружено. Проверено в **Google Chrome**. 

## Запуск с помощью maven

`cd modules && mvn clean install`

# Спецификация

## Размещение компонент

Кодовое обозначение компонент:

* layout — элементы размещения страницы в целом. Такие элементы, как `Header`, `Footer`, `Navbar` и пр.
* common — общие кастомные элементы управления. Всевозможные datePickers, кастомные Dropbox и прочие скроллбары, кастомные инпуты.
*  


Компоненты размещаем согласно правилам:
1.	Все компоненты и иные файлы, содержащие jsx (это, где реактовская примесь XML в JS) должны иметь расширение jsx, иначе линтер лихорадит
2.	По папкам: 
    `components/<код компоненты>` — размещение компоенет. Код компоненты см. выше. 
3.	Похожим правилам могут следовать `actions`, `reducers`.
4.	Все иные статические данные размещаем в папке `src/main/resources/META-INF/resources/static`: `img`, `css` и пр.
 
## Текстовые константы
Текстовые константы следует размещать в файле `constans/strings.js`. 
Для удобства файл можно разбить.

## Инструкция по получению данных из REST
   
**dataService** представляет собой прослойку, которая выполняет запрос на сервер, получает данные, преобразует их в JSON и передает в редьюсер
   
Для получения данных из REST-сервиса необходимо:
   
1. Выбрать название обработчика (предпложим "GET_TEST_POSTS") 
2. В файле **services/dataService.js:** добавить в метод **dataService** обработку выбранного названия. Она реализуется в 3 строчки:
     
     
       case 'GET_TEST_POSTS':
         getApi(**URL**, action.type, action.request, **METHOD**);
         break;
         
         
3. Добавить редьюсеры обрабатывающие получаемые из запроса данные:
    1. `{type: "GET_TEST_POSTS_REST_ERROR", 
        error: **ошибка, которую вернул сервер**}` - для запросов выполнившихся с ошибкой
        
    2. `{type: "GET_TEST_POSTS_REST_SUCCESS", 
        response: **данные, которые вернул запрос**}` - для запросов выполнившихся без ошибок
        
4. Для выполнения запроса из компонента необходимо выполнить:
    
    
    this.props.actions.executeRest("GET_TEST_POSTS", request);
    this.props.actions.executeRest("GET_TEST_POSTS", request, ID); //если необходимо получить элемент по ID
    
    //пример вызова можно увидеть в components/inflow/FindClientForm.jsx



# Misc
* spring boot & node.js — http://justincalleja.com/2016/04/17/serving-a-webpack-bundle-in-spring-boot/
* https://github.com/jchapron/redux-friendlist-demo/tree/v1.0/src/components
* https://github.com/sadams/todo-redux-react-webpack/blob/master/webpack.config.js
* bootstrap & react — https://react-bootstrap.github.io/components.html
* https://maxfarseer.gitbooks.io/redux-course-ru/
* http://stackoverflow.com/questions/32646920/whats-the-at-symbol-in-the-redux-connect-decorator
