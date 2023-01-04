const nodemailer = require("nodemailer");
require('dotenv').config();

class EmailService {
    
    constructor() {
      // !smtpAuthUser must be a 2-factor account with google
      this.smtpHost = "smtp.gmail.com"
      this.smtpPort = 587
      this.smtpSecure = false
      this.smtpAuthUser = process.env.EMAIL_ACCOUNT
      this.smtpPass = process.env.EMAIL_PASSWORD

      // create reusable transporter object using the default SMTP transport
      this.transporter = nodemailer.createTransport({
        host: this.smtpHost,
        port: this.smtpPort,
        secure: this.smtpSecure,      // true for 465, false for other ports
        auth: {
          user: this.smtpAuthUser,
          pass: this.smtpPass
          },
        tls:{
            rejectUnauthorized: false   // set to false to let gmail let message through
        }
      })

      // email object for message to sent
      this.email = {
        from: '"Food-Hero ☕" <' + this.smtpAuthUser + '>',
        to: "receiver",
        subject: "Order Complete ✔",
        html: ""
      }
    }

    envCheck(){

      console.log("password ====", process.env.DB_PASSWORD);
      console.log("email sender ====", process.env.EMAIL_ACCOUNT);
      console.log("email password ====", process.env.EMAIL_PASSWORD);
    }

    sendEmailOrderComplete(emailReceiver) {
      this.email.to = emailReceiver
      this.email.html = "<b>Your order is ready for collection, see you soon!</b>"
      this.sendEmail(emailReceiver, this.email)
    }

    sendEmail(emailReceiver, emailMessage) {
      let info = this.transporter.sendMail(emailMessage, (error, info) => {
        if (error) {
          return console.log(error)
        }
        else {
          console.log("Sending to:", emailReceiver);
          console.log("Message sent: %s", info.messageId);
          console.log("Message sent: %s", info.response);
        }
      });
    }
}

module.exports = EmailService;