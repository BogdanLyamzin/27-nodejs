const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;
// Протокол SMTP
// info@mysite.com
const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, // 25, 465, 2255
    secure: true,
    auth: {
        user: "bogdan.lyamzin.d@meta.ua",
        pass: EMAIL_PASSWORD
    }
};

const transporter = nodemailer.createTransport(nodemailerConfig);

const mail = {
    from: "bogdan.lyamzin.d@meta.ua",
    to: "bogdan.lyamzin.d@gmail.com",
    subject: "Тестовое письмо",
    text: "Тестовое письмо"
};

transporter.sendMail(mail)
    .then(info => console.log(info))
    .catch(error => console.log(error));