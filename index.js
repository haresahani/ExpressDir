const express = require('express');
const app = express();

const port = 8080;

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

// app.get("/", (req, res) => {
//     res.send("you cont path");
// });

// app.get("/:userman", (req, res) => {
//     console.log(req.params);
//     res.send("Hello i'm Hare Sahani");
// });

app.get("/apple", (req, res) => {
    res.send("you contacted apple path");
});

app.get("/orange", (req, res) => {
    res.send("you contacted orange path");
});

app.get("*", (req, res) => {
    res.send("This page does not exist, try again");
});

app.get("/search", (req, res) => {
    console.log(req.query);
    res.send("no result");
});

// app.use((req, res) =>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1><ul><li>Apple</li><li>Orange</li><li>Banana</li></ul>"
//     res.send(code);

// });


