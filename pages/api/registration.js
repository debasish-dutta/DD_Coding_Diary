const API_KEY = process.env.MAILGUN_API;
const DOMAIN = process.env.MAILGUN_DOMAIN;

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: API_KEY});

const from = 'Debasish <admin@mail.ddcodingdiary.com>'
const subject = 'Confirm your Newsletter'

export default function handler(req, res) {
    if (req.method === 'POST') {
        const formType = req.body.formType;
        // console.log(formType);
        if (formType === 'reg'){
            const email = req.body.email;
            const confirmLink = `${req.headers.origin}/confirm`;
            const  messageData = {
                from: from,
                to: email,
                subject: subject,
                template: 'newslettr-confirmation',
                'h:X-Mailgun-Variables': JSON.stringify({"link": confirmLink})
        }
            mg.messages.create(DOMAIN, messageData).then((res)=> {
                // console.log(res);
            }).catch((err)=>{
                console.log(err);
            });
            res.status(200).send({ message: 'Success' })
        } else if (formType === 'confirm'){
                const listAdd = {
                    address: req.body.email,
                    name: req.body.name,
                    vars: JSON.stringify({phone: req.body.phone}),
                    subscribed: 'yes',
                    upsert: 'yes'
                }
                mg.lists.members.createMember(`newsletter@`+DOMAIN, listAdd).then((
                    res)=> {
                        // console.log(res);
                    }).catch((err)=>{
                        console.log(err);
                    });
            res.status(200).send({ message: 'Success' })
        } else {
      res.status(400).json({ error: 'Invalid form type' });
    }
    } else {
      res.status(501).send({ error: 'method not implemented' })
    }
  }