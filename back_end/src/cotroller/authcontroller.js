const {Book,Author } = require("../model/model");


class authrcontroller{
    getallauthor=async(req,res)=>{
        try {
            const listuser = await Author.find();
            res.status(200).json(listuser);
        } catch (error) {
            res.status(400).json(error);
            
        }
    }

    addauthor=async(req,res)=>{
        
        try {
            console.log(req.body.name)
            const newauthor = await new Author(req.body);
            const save = await newauthor.save();
            res.status(200).json(save);
        } catch (error) {
            res.status(500).json(error);
        }
    }
    

    getAnAuther= async(req,res)=>{
        try {
            const id = req.params.id ;
            const auther = await Author.findById(id).populate('books','name -_id');
            res.status(200).json(auther);
        } catch (error) {
            res.status(500).json(error);
            
        }
    }

    uppdateathor = async(req,res)=>{
        try {
            const auther = await Author.findByIdAndUpdate(req.params.id,{$set:req.body},{new: true});
            res.status(200).json(" uppdate successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }

    delteauthor = async (req,res)=>{
        try {
           await Book.updateMany({"author": req.params.id},{
             "author": null
           })
            const athor = await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("delte successfully");
        } catch (error) {
            res.status(500).json(error);
            
        }
    }
}

module.exports = new authrcontroller