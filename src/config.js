import {config} from "dotenv"

config();



export default {
    port: process.env.Port || 4000
}