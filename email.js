require('dotenv').config()
const express = require('express');

const router = express();

router.post('/email', function (req, res) {
    var transporter = require('nodemailer').createTransport({
      service:'gmail',
      port: 465,
      secure: true,
      auth: {
        // SMTP-сервер, который будет отправлять письма
        user: 'proektnyjp4638@gmail.com',
        pass: 'xezxwduwbtptolaz'
      }
    });
    var opt = {
      from: req.body.from,
      to: 'proektnyjp4638@gmail.com', // Почта сайта
      subject: req.body.subject,
      html: req.body.message
    };
    transporter.sendMail(opt, function(err) {
      if (err) console.error(err);
      res.send('Send Message!');
    });
  });
// const transporter = nodemailer.createTransport({
//     service:'gmail',
//     auth: {
//         user: 'proektnyjp4638@gmail.com',
//         pass: 'xezxwduwbtptolaz'
//     }
// })

// const mailOptions = {
//     from: 'proektnyjp4638@gmail.com',
//     to : 'proektnyjp4638@gmail.com',
//     subject: 'Письмо черерз node.js',
//     text: 'Текст самого пиьма'
// }
// transporter.sendMail(mailOptions)