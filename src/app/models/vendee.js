const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Vendee = new Schema({
  vendeeName: {
    type: String
  },
  vendeeFirstName: {
    type: String
  },
  vendeeLastName: {
    type:String
  },
  vendeeAge: {
    type: String
  },
  vendeeGender: {
    type: String
  }
}, {
  collection: 'lmsUser'
})
