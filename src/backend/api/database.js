let mongoose = require('mongoose');

const server = 'mongodb+srv://kk:p3rs0n4l@cluster0-b0nna.azure.mongodb.net/'; // REPLACE WITH YOUR DB SERVER

class Database {
  constructor() {
    this._connect()
  }

  get database() {
      return "spring2019"
  }

_connect() {
     mongoose.connect(`mongodb://${server}/${this.database}?retryWrites=true`)
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

module.exports = new Database()