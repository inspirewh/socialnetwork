const { Schema, model } = require('mongoose');

const reactionSchema = new Schema (
  {
  body: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})


// Schema to create a thoughts model
const thoughtSchema = new Schema(
    {
      text: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
      },
      username: {
        type: String,
        required: true,
      },
      reactions: [
        reactionSchema
      ]
    },
    {
      timestamps: true,
      id: false,
    }
  );

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
})

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
