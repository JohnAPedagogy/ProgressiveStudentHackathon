const { Given, When, Then } = require('@cucumber/cucumber')
const { assertThat, is } = require('hamjest')

const { Person, Network } = require('../../src/shouty')

Given('Lucy is {int} metres from Sean', function (distance) {
  this.network = new Network()
  this.lucy    = new Person(this.network)
  this.sean    = new Person(this.network)

  this.lucy.moveTo(distance)
})

Given('a person named Lucy', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

Given('a person named Sean', function () {
  // Write code here that turns the phrase above into concrete actions
  return 'pending'
})

When('Sean shouts {string}', function (message) {
  this.sean.shout(message)
  this.messageFromSean = message
})

Then('Lucy should hear Sean\'s message', function () {
  assertThat(this.lucy.messagesHeard(), is([this.messageFromSean]))
})
