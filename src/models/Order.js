import mongoose from "mongoose";

const { Schema } = mongoose;

const orderSchema = new Schema(
  {
    pickUpLocation: {
      type: String,
      required: true,
    },
    dropOffLocation: {
      type: String,
      required: true,
    },
    pickUpDate: {
      type: String,
      required: true,
    },
    returnDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.models.Order || mongoose.model("Order", orderSchema);
