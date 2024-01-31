import nodemailer from "nodemailer";

export const sendMail = async (user, startTime) => {
  try {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    const mail = {
      from: process.env.from,
      to: process.env.to,
      subject: "Startzeit aufgezeichnet",
      text: `Startzeit für Benutzer ${user}: ${startTime}`,
    };
    const result = await transport.sendMail(mail);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

export const sendMail2 = async (user, endTime) => {
  try {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.user,
        pass: process.env.pass,
      },
    });
    const mail = {
      from: process.env.from,
      to: process.env.to,
      subject: "Stopzeit aufgezeichnet",
      text: `Stopzeit für Benutzer ${user}: ${endTime}`,
    };
    const result = await transport.sendMail(mail);
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
