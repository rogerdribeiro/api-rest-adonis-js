'use strict'
const Antl = use('Antl')

class Session {
  get validateAll () {}
  get rules () {
    return {
      email: 'required|email',
      password: 'required'
    }
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Session
