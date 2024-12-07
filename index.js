const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3000;

app.use(express.static('static'));

function getGreetingMessage(username){
  return "Hello, " + username + "!"
}

app.get("/greet", (req, res) => {
  let username = req.query.username
  res.send(getGreetingMessage(username))
})

function checkPassword(password){
  if(password.length > 15){
    return "Password is strong."
  } else {
    return "Password is weak."
  }
}

app.get("/check-password", (req,res) => {
  let password = req.query.password
  res.send(checkPassword(password))
})

function calculateSum(num1, num2) {
  let sum = num1 + num2;
  return sum.toString();
}

app.get("/sum", (req, res) => {
  let num1 = parseFloat(req.query.num1);
  let num2 = parseFloat(req.query.num2);
  res.send(calculateSum(num1, num2));
});

function checkSubscriptionStatus(username, subscribed) {
  if (subscribed === "true") {
    return username + " is subscribed";
  } else {
    return username + " is not subscribed";
  }
}

app.get("/subscription-status", (req, res) => {
  let username = req.query.username;
  let subscribed = req.query.isSubscribed;

  res,send(checkSubscriptionStatus(username, subscribed));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
