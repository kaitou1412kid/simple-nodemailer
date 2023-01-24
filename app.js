require("dotenv").config();
const nodemailer = require("nodemailer");

const transport = nodemailer.createTransport(
    {
        service:"gmail",
        auth : {
            user: process.env.USER,
            pass:process.env.PASS
        }
    }
);

//send out emails
const mailOptions = {
    from : process.env.USER,
    to:process.env.USER2,
    subject:"Test mail 2",
    text : "Mail send from nodejs nodemailer"
};

transport.sendMail(mailOptions, function(err,info){
    if(err){
        console.log(err);
    }else {
        console.log("Email Sent "+ info.response);
    }
});