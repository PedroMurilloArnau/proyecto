(async () => {
    const db = require('./dbConfig');
    const Usuario = require('./users');

    const usersd = new Usuario();

    usersd.autic = true;
    usersd.name = 'Wanli';
    usersd.surname = 'ChuLi';
    usersd.email = 'wanli.chuli@gmail.com';
    usersd.password = '1ooñkds123cz';
    usersd.type = 'Prog',
    usersd.code = '37161',
    usersd.birthdate = new Date(),

    await usersd.save();
})();