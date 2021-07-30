const nodemailer = require("nodemailer");
require("dotenv").config();

const {EMAIL_PASSWORD} = process.env;

const nodemailerConfig = {
    host: "smtp.meta.ua",
    port: 465, 
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

const sendMail = async({to, subject, text}) => {
    const mail = {
        from: "bogdan.lyamzin.d@meta.ua",
        to, subject, text
    };

    try {
        const result = await transporter.sendMail(mail);
        return result;
    }
    catch(error){
        throw error;
    }
}

module.exports = sendMail;