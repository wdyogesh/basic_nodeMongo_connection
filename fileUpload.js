var nodemailer = require("nodemailer");

var transport = nodemailer.createTransport("SMTP", {
    host: "smtp.gmail.com", // hostname
    secureConnection: true, // use SSL
    port: 465, // port for secure SMTP
    auth: {
        user: "wdyogesh@gmail.com",
        pass: "Yogesh@1990"
    }
});

var mailOptions = {
    from: 'wdyogesh@gmail.com',
    to: 'yogesh@yopmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});