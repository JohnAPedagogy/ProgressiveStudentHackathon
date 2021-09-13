const {Given, When, Then }  = require('@cucumber/cucumber')


Given('I have logged in to the portal successfully', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Given('I am on the dashboard page', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

When('I select the admin on the sidebar', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

Then('the sidebar should expand to reveal the \{Resource} item', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending';
});

/**
 * 

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:<password>@cluster0.phtaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
Replace <password> with the password for the admin user. Replace myFirstDatabase with the name of the database that connections will use by default. Ensure any option params are URL encoded.
});
 */