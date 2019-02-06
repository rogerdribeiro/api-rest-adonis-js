'use strict'

class Session {
  get validateAll () {}
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
}

module.exports = Session
