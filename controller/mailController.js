const nodemailer = require('nodemailer'); 
module.exports = {
    sendMail: function(req, res, next ){
        console.log(req.body);
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        nodemailer.createTestAccount((err, account) => {
            // create reusable transporter object using the default SMTP transport
            let transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                auth: {
                    user: 'sleepydistrict01@gmail.com', // generated ethereal user
                    pass: 'riley420'  // generated ethereal password
                }
            });
            // setup email data with unicode symbols
            let mailOptions = {
                from: req.body.email,//'"Fred Foo 👻" <sleepydistrict01@gmail.com>', // sender address
                to: 'sleepydistrict01@gmail.com', // list of receivers ///////////////This needs to go to Heidi//////////
                subject: 'Hello ✔', // Subject line
                text: 'Hello world?', // plain text body
                html: req.body.message//'<b>Hello world?</b>' // html body
            };
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                // Preview only available when sending through an Ethereal account
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
                // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
            });
        });
    }
    
}