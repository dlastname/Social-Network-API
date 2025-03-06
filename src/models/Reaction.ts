import { Schema, Types, Document } from "mongoose";

// Define the Reaction interface
export interface IReaction extends Document {
  reactionId: Types.ObjectId;
  reactionBody: string;
  username: string;
  createdAt: Date;
}

// Define the Reaction schema
const reactionSchema = new Schema<IReaction>(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      // Include getters when converting to JSON
      getters: true,
    },
    id: false,
  }
);

// Export the schema (not a model!)
export default reactionSchema;
