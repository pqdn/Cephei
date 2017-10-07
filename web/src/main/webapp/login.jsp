<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<html>
<head>
    <title>Страница авторизации</title>
    <link href="./static/css/bootstrap.min.css" rel="stylesheet"/>
    <link href="./static/css/app.css" rel="stylesheet"/>
</head>
<body class="login-page">
    <div class="container">
        <form class="form-signin" action="login" method="POST">
            <div class="stub-error">
                <% if ("true".equals(request.getParameter("login_error"))) { %>
                <div class="alert alert-danger text-center">
                    <strong>Неверный логин/пароль</strong>
                </div>
                <% } %>
            </div>
            <h2 class="title-block">Страница авторизации ЕФС</h2>
            <label for="input-login" class="sr-only">Логин:</label>
            <input type="text" name="username" id="input-login" class="form-control input-top" placeholder="Логин" required autofocus>
            <label for="input-password" class="sr-only">Пароль:</label>
            <input type="password" name="password" id="input-password" class="form-control input-bottom" placeholder="Пароль" required>
            <button class="btn btn-lg btn-primary btn-block" name="submit" type="submit">Вход</button>
        </form>
    </div>
</body>
</html>