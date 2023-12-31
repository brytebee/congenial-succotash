import express, { Request, Response } from "express";
import cors from "cors";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:3000" }));

// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello world!");
// });

routes(app);

app.listen(8000, () => console.log("Listening on port 8000"));
