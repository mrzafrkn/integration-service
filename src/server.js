import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import serviceRoutes from "./routes/serviceRoutes.js";

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

app.use("/api", serviceRoutes);

app.listen(PORT, () => {
  console.log(`Server has started on port: ${PORT}`);
});
