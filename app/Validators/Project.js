'use strict'
const Antl = use('Antl')

class Project {
  get validateAll () {
    return true
  }
  get rules () {
    return {}
  }
  get messages () {
    return Antl.list('validation')
  }
}

module.exports = Project
