import { Schema, model, Document, Types } from "mongoose";
import reactionSchema, { IReaction } from "./Reaction"; // Import the Reaction schema and interface

// Define the Thought interface
interface IThought extends Document {
  thoughtText: string;
  createdAt: Date;
  // Single username referring to the User model
  username: string; 
  // Array of Reaction subdocuments
  reactions: Types.DocumentArray<IReaction>; 
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
    username: {
      type: String,
      required: true,
// Reference to the User model
      ref: "User", 
    },
    // Bug fix: Embed the Reaction schema as an array
    reactions: [reactionSchema], 
  },
  {
    toJSON: {
      virtuals: true, 
    },
    id: false, 
  }
);

// Virtual property `reactionCount` to get the number of reactions
thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

// Initialize the Thought model
const Thought = model<IThought>("Thought", thoughtSchema);

export default Thought;