const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken")

//Create

router.post("/",verify, async(req,res)=>{
    if(req.user.isAdmin){
        const newList = new List(req.body);

        try{
            const savedList = await newList.save();
            res.status(201).json(savedList);
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed!");
    }
})

//Delete
router.delete("/:id",verify, async(req,res)=>{
    if(req.user.isAdmin){
        try{
            await List.findByIdAndDelete(req.params.id);
            res.status(201).json("List deleted");
        }catch(err){
            res.status(500).json(err);
        }
    }else{
        res.status(403).json("You are not allowed!");
    }
})

// Get single list

router.get("/find/:id", verify, async(req, res)=>{
    if(req.user.isAdmin){
        let list = []
        try {
            list = await List.findById(req.params.id);
            res.status(200).json(list);
        } catch (error) {
            res.status(500).json(error);
        }
    }else{
        res.status(403).json("You are not allowed");
    }
})


//Get List

router.get("/", verify, async(req,res)=>{
    const typeQuery = req.query.type;
    const genreQuery = req.query.genre;

    let list = [];

    try{    
        if(typeQuery){
            if(genreQuery){
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type:typeQuery, genre: genreQuery}},
                ]);
            }else{
                list = await List.aggregate([
                    {$sample: {size: 10}},
                    {$match: {type:typeQuery}},
                ]);
            }
        }else{
            list = await List.aggregate([
                {$sample: {size: 10}}
            ]);
        }

        res.status(200).json(list);
    }catch(err){
        res.status(500).json(err)
    }
})



module.exports = router;