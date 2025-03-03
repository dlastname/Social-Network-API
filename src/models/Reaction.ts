import { Schema } from "mongoose";

// Define the Reaction schema
const reactionSchema = new Schema(
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
      default: Date.now, // Default value is the current timestamp
      get: (timestamp: Date) => timestamp.toISOString(), // Format timestamp on query
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
