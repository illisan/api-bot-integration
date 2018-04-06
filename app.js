const express = require('express')
const app = express()
const port = process.argv[2] || 9090
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))



//Creating a test endpoint to ensure server is working as expected.
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`)
})

app.post ('/hello', (req, res, next) => {
    let userName = req.body.user_name
    let botPayload = {
        text: 'Hi ' + userName + ' ! Welcome to the BatCave :bat:'
    }
    //conditional to prevent infinite loop, only retunr payload if user is NOT slackbot.
    if(userName !== 'slackbot') { 
        return res.status(200).json(botPayload)
    } else {
        return res.status(200).end
    }
})

