// importé express
import express from "express";
import mongoose from "mongoose";
import colors from "colors";
import productsRouter from "./routes/productsRoutes.js";

// App instance
const app = express();

// DB conection
mongoose
  .connect("mongodb://localhost:27017/products")
  .then((response) => {
    console.log(colors.bgCyan("DB conection ok!"));
  })
  .catch((error) => {
    console.log(colors.red(`error: ${error}`));
  });

// rutas
app.use("/api/v1/products", productsRouter);

// escuche el servidor
app.listen(3000, () =>
  console.log(colors.rainbow("server running in 3000 port"))
);
