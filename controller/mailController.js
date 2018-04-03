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
                    user: 'hlrwoodworking18@gmail.com', // generated ethereal user
                    pass: 'sadie406sue'  // generated ethereal password
                },
                tls:{
                    rejectUnauthorized:false
                }
            });
            // setup email data with unicode symbols
            let mailOptions = {
                to: 'hlrwoodworking18@gmail.com', // list of receivers 
                subject: 'A Message From Your Website', // Subject line
                html: `
                <p>You have a new message from</p>
                <ul>
                  <li>First Name: ${req.body.firstName}</li>
                  <li>Last Name: ${req.body.lastName}</li>
                  <li>Email: ${req.body.email}</li>
                </ul>
                <h3>Message</h3>
                <p>${req.body.message}</p>
              `
            };
            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return console.log(error);
                }
                console.log('Message sent: %s', info.messageId);
                console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
                res.render('contact')
            });
        });
    }
    
}