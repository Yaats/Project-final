const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema (
  {
    myList: {
      type: Schema.Types.ObjectId,
      ref: 'MyList',
    },
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    interestedIn: {type: [String]},
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model ('User', userSchema);

module.exports = User;
