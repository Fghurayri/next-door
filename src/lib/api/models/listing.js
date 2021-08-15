import mongoose from "mongoose";

const ListingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      default: "Feature",
    },
    properties: {
      emoji: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      price: {
        type: Number,
        default: 0,
      },
    },
    geometry: {
      type: {
        type: String,
        default: "Point",
      },
      coordinates: {
        type: [Number],
        index: "2dsphere",
        required: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

ListingSchema.index({ geometry: "2dsphere" });

const model =
  mongoose.models.Listing || mongoose.model("Listing", ListingSchema);

export default model;
