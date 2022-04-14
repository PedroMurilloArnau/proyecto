******* Uso de Express ******************

- 1º Uso de la variable de sesión.

En nuestra app devemos de incluir la siguiente info.

    app.use(session({
    secret: 'frase secreta',
    resave: true,
    saveUninitialized: true,
    cookie:{ secure: true}
    }));


