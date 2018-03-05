'use strict'

const fs = require('fs')
const data = JSON.parse(fs.readFileSync('node_modules/jxfs-lookup/constants.min.json'))

class jxfsLookup {
  query(query, callback) {
    return new Promise((resolve, reject) => {
      if (query === undefined) {
        reject('Undefined parameter')
        return callback('Undefined parameter')
      } else if (query.length === 0) {
        reject('Invalid query')
        return callback('Invalid query')
      } else if (typeof query === 'function') {
        callback = query
        reject('Unsupported type \'function\'')
        return callback('Unsupported type \'function\'')
      } else {
        let result = []
        Object.values(data).map((control) => {
          Object.values(control.content).map((status) => {
            if(status.val == query)
              result.push(status)
          })
        })
        resolve(result)
        return callback(result)
      }
    })
  }
}

module.exports = new jxfsLookup()
