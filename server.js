const express = require('express')
const next = require('next')
const bodyParser = require('body-parser')
const mailer = require("./nodemailer");



const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    server.use(bodyParser.json())


    server.post('/api/contact', (req, res) => {
       // const { email = '', msg = '' } = req.body; //We will use this later

        let tel = '+37529999999';
        let email = 'ddd@jd.dd';
        let message = 'hhhjsdfghjkl';

        const sendMessage = {
            to: `TSAluminium@yandex.by`,
            subject: `Сообщение от ${email}`, // Subject line
            //text: `Hello, this is just text ${request.body.email} ${request.body.password}`, // plain text body
            html: `
            <table><tbody>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Телефон:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${tel}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Email:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${email}</td>
    </tr>
    <tr style="background-color: #f8f8f8;">
        <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сообщение:</b></td>
        <td style='padding: 10px; border: #e9e9e9 1px solid;'>${message}</td>
    </tr></tbody>
            </table>
            `}

        mailer(sendMessage);
        // if(req.body){
        //     console.log(req.body)
        // }
        console.log(req.body)

       // res.send('success');
    });

   /* server.post('/api/contact', (req, res) => {
        const { data } = req.body
        console.log(req.body)
        res.send('success')
    })*/

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Read on http://localhost:3000')
    })


})
