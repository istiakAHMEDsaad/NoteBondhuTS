import dotenv from "dotenv";

dotenv.config({
  path: ".env",
  quiet: true,
});

interface Envtype {
  PORT: number;
  MONGO_URI: string;
}

const { PORT, MONGO_URI } = process.env;

if (!PORT) throw new Error("Please insert PORT number on .env");
if (!MONGO_URI) throw new Error("please insert value of MONGO_URI on .env");

export const ENV: Envtype = {
  PORT: Number(PORT),
  MONGO_URI,
};
