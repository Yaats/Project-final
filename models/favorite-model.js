const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const favoriteSchema = new Schema (
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
    title: {type: String},
    category: {type: String, enum: ['movie', 'event', 'tv-show', 'music']},
    details: {type: Schema.Types.Mixed},
  },
  {
    timestamps: true,
  }
);

const Favorite = mongoose.model ('Favorite', favoriteSchema);

module.exports = Favorite;
