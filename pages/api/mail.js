// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {


  const body = JSON.parse(req.body);
  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Subject: ${body.subject}\r\n
    Message: ${body.message}\r\n
  `;

// data payload to send on our API

  const data = {
    to: 'sauravabde@gmail.com',
  from: 'sauravp017@gmail.com',
  subject: 'New Web Form Message',
    text: message,
    html: message.replace(/\r\n/g, '<br>')
    
  }

  console.log(data);
  mail.send(data);

  res.status(200).json({ status: 'OK' })
}
