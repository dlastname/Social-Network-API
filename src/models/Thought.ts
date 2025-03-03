import { Schema, model, Document, ObjectId, Types } from "mongoose";
import reactionSchema from "./Reaction";

interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  // Single username refering to the User model
  username: string;
  reactions: Types.Subdocument;
  // Virtual property to get the number of reactions
  reactionCount: number;
}

const thoughtSchema = new Schema<IThought>(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: [
      {
        type: String,
        required: true,
        ref: "User",
      },
    ],
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Virtual property `friendCount` to get the number of friends
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Initialize the Thought model
const Thought = model<IThought>("Thought", thoughtSchema);

export default Thought;
