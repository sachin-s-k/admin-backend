import express, { Express, Request, Response,Application} from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import { connectDb } from "./config/dbConnection";
import courseRouter from './routes/courseRouter'
import { branchRouter } from "./routes/branchRouter";
import { enquiryRouter } from "./routes/enquiryRouter";
import { counsellorRouter } from "./routes/councellorRouter";
import { contentRouter } from "./routes/contentRouter";
import { companyRouter } from "./routes/companyRouter";
import cors from 'cors'
dotenv.config();


const app: Application = express();

const port:number|undefined|string = process.env.PORT ;
const mongodbUri:string|undefined= process.env.MONGODB_URI
app.use(bodyParser.json())
app.use(cors())
console.log(process.env.MONGODB_URI);

console.log(process.env.PORT,'rwrwrew' );


app.use('/admin',courseRouter)
app.use('/admin',branchRouter)
app.use('/admin',enquiryRouter)
app.use('/admin',counsellorRouter)
app.use('/admin',contentRouter)
app.use('/admin',companyRouter)

connectDb(mongodbUri)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});


