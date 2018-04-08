# Building a bot with an outgoing webhook using Slack Web API and Node.js

An outgoing webhook will send an HTTP POST request from a specified URL. This simple app creates a bot in slack that 
responds to a post request and returns a polite greeting. We create an endpoint of `/hello` with a payload message containing a text key, which prints a string that greets the user.
In the `package.json` you'll see a couple of required dependencies including express, request and body-parser. Make sure you run npm install before running the code, as you will need to define a port. 

1. Create a Slack App if you haven't already, give it a fun name, ours is Albert :older_man: 
2. Before testing the app we'll need to deploy the code to a publicly accessible server. For this, we used Heroku. 
You can find deployment instructions [here](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction). 
3. Once you have your heroku url open your app directory. 
4. add a new outgoing webhook and fill out the integration form with your new url, name your bot! Ours is Batbot :bat:
5. Test it out! 

![Alt text](/imgs/sample.gif?raw=true)
