import { configDotenv } from "dotenv";

const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env';

configDotenv({path: envFile})