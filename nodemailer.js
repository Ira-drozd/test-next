const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
        host: 'smtp.yandex.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'TSAluminium@yandex.by',
            pass: 'TriWkk9mTET9M99'
        }
    },
    {
        from: '"TSAluminium" <TSAluminium@yandex.by>'
    });

const mailer =  (message) => {
     transporter.sendMail(message, (err, info) => {
        if (err) return console.log(err);
        console.log('Email send', info)
    })
   // console.log('message', message)
}

/*transporter.verify(function(error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log("Server is ready to take our messages");
    }
});*/

module.exports = mailer;
