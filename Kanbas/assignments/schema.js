import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    id: String,
    description: String,
    dueDateTime: Date,
    availableFromDate: Date,
    availableUntilDate: Date,
    course: String,
    points: Number
  },
  { collection: "assignments" });
export default assignmentSchema;