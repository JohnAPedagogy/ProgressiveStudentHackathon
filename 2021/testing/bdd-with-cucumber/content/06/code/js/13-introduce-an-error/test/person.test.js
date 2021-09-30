const assert = require('assert')
const sinon = require('sinon')
const {Person} = require('../src/shouty')

describe('Person', () => {
  let network, networkStub
  beforeEach(() => {
    network = {
      subscribe() {},
      broadcast() {}
    }
    networkStub = sinon.spy(network)
  })

  it('subscribes to the network', () => {
    const lucy = new Person(network, 100)
    assert(networkStub.subscribe.calledOnce)
    assert.strictEqual(networkStub.subscribe.getCall(0).args[0], lucy)
  })

  it('has a location', () => {
    const location = 100
    const lucy = new Person(network, location)
    assert.strictEqual(lucy.location, location)
  })

  it('broadcasts shouts to the network', () => {
    const message = "Free bagels!"
    const sean = new Person(network)
    sean.shout(message)
    assert(networkStub.broadcast.calledOnce)
    assert.strictEqual(networkStub.broadcast.getCall(0).args[0], message)
  })

  it('remembers messages heard', () => {
    const message = "Free bagels!"
    const lucy = new Person(network)
    lucy.hear(message)
    assert.deepStrictEqual(lucy.messagesHeard(), [message])
  })
})
