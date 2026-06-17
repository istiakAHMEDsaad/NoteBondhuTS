import { InferSchemaType, Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required!"],
      trim: true,
      unique: [true, "Email must be unique!"],
      lowercase: true,
      // minLength: [5, "Email must have 5 characters!"]
    },
    password: {
      type: String,
      required: true,
      select: false, // ignore this value
    },
    verified: {
      type: Boolean,
      default: false,
    },
    verificationCode: {
      type: String,
      select: false,
    },
    verificationCodeValidation: {
      type: Number,
      select: false,
    },
    forgotPasswordCode: {
      type: String,
      select: false,
    },
    forgotPasswordCodeValidation: {
      type: Number,
      select: false,
    },
  },
  { timestamps: true },
);

type User = InferSchemaType<typeof userSchema>;

const UserModel = model<User>("User", userSchema);
export default UserModel;
