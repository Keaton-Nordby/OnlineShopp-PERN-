import express from "express";
import helmet from "helmet";
import morgan from "morgan";

const app = express();

app.use(helmet()); // helmet is a security middleware that helps protect the app by setting various HTTP headers -> this is my first time using this
app.use(morgan("dev")); // this tool helps log the requests to the console -> also the first time using this

app.get("/test",  (req, res) => {
    res.send("Hello from the test route.");
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
