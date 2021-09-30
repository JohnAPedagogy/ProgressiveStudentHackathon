class Person {
  constructor(network, location) {
    this.messages = []
    this.network  = network
    this.location = location


    this.network.subscribe(this)
  }

  shout(message) {
    this.network.broadcast(message, this.location)
  }

  hear(message) {
    this.messages.push(message)
  }

  messagesHeard() {
    return this.messages
  }
}

class Network {
  constructor(range) {
    this.listeners = []
    this.range     = range
  }

  subscribe(person) {
    this.listeners.push(person)
  }

  broadcast(message, shouter_location) {
    this.listeners.forEach(listener => {
      let withinRange = Math.abs(listener.location - shouter_location) <= this.range
      let shortEnough = message.length <= 180

      if( withinRange ) {
        if (shortEnough) {
          listener.hear(message)
        }
      }
    })
  }
}

module.exports = {
  Person  : Person,
  Network : Network
}
