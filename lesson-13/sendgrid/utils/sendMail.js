const sgMail = require("@sendgrid/mail");
require("dotenv").config();

const {SENDGRID_KEY} = process.env;

sgMail.setApiKey(SENDGRID_KEY);

const sendMail = async ({to, subject, text, html}) => {
    const mail = {
        to,
        from: "bogdan.lyamzin.d@gmail.com",
        subject,
        text,
        html
    };
    try {
        const answer = await sgMail.send(mail);
        return answer;
    }
    catch(error){
        throw eror;
    }
}

module.exports = sendMail;
