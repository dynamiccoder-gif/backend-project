console.log(1+10);
import dotenv from "dotenv"
dotenv.config(
    {
        path:'.env'
    }
)
console.log(process.cwd())
console.log(`${process.env.PORT}`)
console.log(`${process.env.MONGODB_URI}`)