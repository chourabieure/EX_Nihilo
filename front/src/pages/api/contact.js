export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'choura.dont.repply@gmail.com',
            // pass: process.env.password,
            pass: 'ypbkuglmieruehlh'
        },
        secure: true,
    })
    const mailData = {
        from: 'choura.dont.repply@gmail.com',
        to: 'matsim@orange.fr',
        subject: `[Demande de contact EXNIHILO]`,
        text: "Demande de contact de la part de " + req.body.name,
        html: `<div>${req.body.email}</div><p>${req.body.phone}</p><p> ${req.body.name}</p>`
    }
    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)

        else
            console.log(info)
    })
    // transporter.sendMail(mailData)
    res.status(200).send("sent")
    // Test
}