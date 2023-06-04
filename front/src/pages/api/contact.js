import { Email } from "@/components/UI/Email";
import { render } from "@react-email/render";

export default function (req, res) {
    console.log(process.env.password);

    const { name, email, phone } = req.body;
    const emailHtml = render(<Email name={name} email={email} phone={phone} />);

    let nodemailer = require("nodemailer");
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: "choura.dont.repply@gmail.com",
            pass: process.env.password,
            // pass: 'ypbkuglmieruehlh'
        },
        secure: true,
    });

    const mailData = {
        from: "choura.dont.repply@gmail.com",
        to: "matsim972@gmail.com",
        subject: `[Demande de contact EXNIHILO]`,
        text: "Demande de contact de la part de " + name,
        html: emailHtml,
    };
    transporter.sendMail(mailData, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
    });
    // transporter.sendMail(mailData)
    res.status(200).send("sent");
    // Test
}
