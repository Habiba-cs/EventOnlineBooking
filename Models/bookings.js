const mongoose = require("mongoose");

const bookingsModelSchema=new mongoose.Schema({

    user:{
        type: mongoose.Types.ObjectId,
        ref: "User",
        required:true,
    },

    event:{
        type: mongoose.Types.ObjectId,
        ref: "Event",
        required: true,
    },

    numberOfTickets:{
        type: Number,
        required: true,
        min: 1,
    },

    totalPrice :{
        type: Number,
        required: true,
    },

    status:{
        enum:["pending","confirmed","canceled"],
        default: "pending",
    },

},
{timestamps: true},
);

const Booking= mongoose.model("Booking",bookingsModelSchema);
module.exports= Booking;
