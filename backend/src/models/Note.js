import mongoose from "mongoose";

// step 1: create a schema
// step 2: model based off of said schema

const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content:{
        type: String,
        required: true
    },
    user:{
        type: mongoose.Schema.Types.ObjectId, ref: "User", required: true
    }
},
{ timestamps: true } // createdAt, updatedAt
);

// create a Note model based off ^ schema - will have title, content, and timestamp
const Note = mongoose.model("Note", noteSchema)

export default Note