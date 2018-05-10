const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const myListSchema = new Schema (
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    allItems: {type: [String]},
  },
  {
    timestamps: true,
  }
);

const MyList = mongoose.model ('MyList', myListSchema);

module.exports = MyList;
