import { InferSchemaType, Schema, model } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required!"],
    },
    content: {
      type: String,
      required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { timestamps: true },
);

type Note = InferSchemaType<typeof noteSchema>;

const NoteModel = model<Note>("Note", noteSchema);
export default NoteModel;
