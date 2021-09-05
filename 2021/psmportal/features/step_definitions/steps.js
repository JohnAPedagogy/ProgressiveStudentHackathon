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
ConnectionString connectionString = new ConnectionString("mongodb+srv://admin:<password>@cluster0.phtaz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
MongoClientSettings settings = MongoClientSettings.builder()
        .applyConnectionString(connectionString)
        .build();
MongoClient mongoClient = MongoClients.create(settings);
MongoDatabase database = mongoClient.getDatabase("test");

 */