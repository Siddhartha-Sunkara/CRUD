const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors = require('cors');

const FoodModel = require('./models/Food')

app.use(express.json());
app.use(cors());


mongoose.connect("mongodb+srv://siddhartha:75bKWyyuzJIfrSnb@crud.0atjiqo.mongodb.net/food?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    
});


app.post('/insert', async(req, res)=>{

    
    const foodName = req.body.foodName;
    const days = req.body.days;
    const food = new FoodModel({foodName: foodName, daysSinceIAte: days});
    
    
    try {
        await food.save();
        res.send("Inserted Data")
    } catch (err) {{
        console.log(err);
    }}
});

app.get('/read', async(req, res)=>{
    const data = await FoodModel.find()
    res.json(data);

    });
        // try{
        //     res.send(data);
        // }catch(err){
        //     res.status(500);
        //     res.send(err);
        // }
        // if (err) {
        //     res.send(err);
        // }
        // res.send(result);

    



app.listen(3001,()=>{
    console.log("Server listening on port 3001...");
});