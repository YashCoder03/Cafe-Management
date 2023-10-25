const server = require("./server");
const userRoutes = require("./Routes/userRoute");
const dbConnection = require("./Db/DbConnection");
const jwtAuth = require("./Middleware/jwtAuthentication")
const app =  server.app;

app.use("/",jwtAuth.jwtAuth);
app.use("/user",userRoutes);


app.get("/",(req,res) => {
    res.send("hello World");
});
