const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema (
  {
    username: {type: String},
    email: {type: String},
    password: {type: String},
    interestedIn: {type: [Number]},
    interestedInSerie: {type: [Number]},
    interestedInEvent: {type: [Number]},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model ('User', userSchema);

module.exports = User;
