const app = require('./app.js');
const PORT = process.env.PORT || 3000;



// app.get("/" ,(req,res) =>{
//     res.send("hello World")
// })

app.listen(PORT, ()=>{
    console.log(`App is listening on http://localhost:${PORT}`)
})