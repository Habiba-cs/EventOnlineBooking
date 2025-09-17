const mongoose = require ("mongoose");

const eventsModelSchema=new mongoose.Schema({

    title :{
        type: String,
        required: [true,"Title is required"],
        trim: true,
    },

    description:{
        type: String,
        required:[true,"Event description is required"],
    },

    date:{
        type: Date,
        required:[true,"Event date is required"],
    },

    location :{
        type: String,
        required:[true,"Event location is required"],
    },

    catogry:{
        type: String,
        enum:["Conceret","WorkShop","Conference","Sport","Theatre","Pther"],
        default:"Other",
    },

    image:{
        type: String,
    },

    ticketprice:{
        type: Number,
        required:[true, "Ticket price is required"],
        min: 0,
    },

    totalTicket:{
        type:Number,
        required: [true,"Total number of tickets is required"],
        min: 1,
    },

    remainingTicket:{
        type: Number,
        required: true,
        min: 1,
    },

    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Organizer",
        required: true,
    }

},

{timestamps: true}, 

);

const Event=mongoose.model("Event",eventsModelSchema);
module.exports=Event;