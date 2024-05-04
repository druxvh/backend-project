import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    subscriber: {
      type: Schema.Types.ObjectId, // One who's subscribing
      ref: "User",
    },

    channel: {
      type: Schema.Types.ObjectId, // One to whom 'subscriber' subscribing
      ref: "User",
    },
  },
  { timestamps: true }
);

export const Subscription = model("Subscription", subscriptionSchema);
