import express, {Request,Response,Application} from 'express';
import CryptoJS from 'crypto-js';
const PORT = process.env.PORT || 8000;
const app:Application = express();
app.use(express.json());


app.get("/", (req:Request, res:Response):void => {
  const hash= CryptoJS.SHA256(req.body);
  res.send(hash)
});

app.listen(PORT, ():void => {
  console.log(`Server Running here 👉 https://localhost:${PORT}`);
});