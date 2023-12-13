const express = require ('express');
const app = express()
const port = 5000;




// a simple server side

app.get('/',(req,res)=>{
      res.send("donation server is running")
})


app.listen(port, () =>{
      console.log(`donation local server is running${port}`);
})