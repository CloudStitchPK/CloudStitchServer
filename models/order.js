const mongoose = require("mongoose");
const { productSchema } = require("./product");

const orderSchema = mongoose.Schema({
  products: [
    {
      product: productSchema,
      quantity: {
        type: Number,
        required: true,
      },
      neckStyle: {
        type: Number,
        required: true,
      },
      sleeveStyle: {
        type: Number,
        required: true,
      },
      trouserLength: {
        type: Number,
        required: true,
      },
      instructions: {
        type: String,
        required: true,
        trim: true,
      },
      image: 
        {
          type: String,
          required: true,
        },
    },
  ],
  totalPrice: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  userId: {
    required: true,
    type: String,
  },
  orderedAt: {
    type: Number,
    required: true,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
