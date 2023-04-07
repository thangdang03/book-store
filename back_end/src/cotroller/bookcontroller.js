const {Book,Author} = require("../model/model");

class Bookcontroller{

        addbook=async(req,res)=>{
               try {
                    const newbook = await new Book(req.body);
                    const savebook = await newbook.save();
                    if(req.body.author){
                        const checkauthor = await Author.findById(req.body.author);
                        await checkauthor.updateOne({$push:{books:savebook._id}});
                    }
                    res.status(200).json(savebook);
               } catch (error) {
                res.status(500).json(error)
               }
        }

        getallbook=async(req,res)=>{
                try {
                    const listbook = await Book.find()
                    res.status(200).json(listbook);
                } catch (error) {
                    res.status(500).json(error);
                }
        }

        getabook = async(req,res)=>{
            try {
                const book = await Book.findById(req.params.id).populate("author",'name year -_id');
                res.status(200).json(book);
            } catch (error) {
                res.status(500).json(error);
            }
        }

        updatebook = async(req,res)=>{
            try {
                const book =await Book.findById(req.params.id);
                await book.updateOne({$set: req.body});
               res.status(200).json("uppdate successfully");
            
            } catch (error) {
                res.status(500).json(error)
                
            }
        }

        detlebook = async (req,res)=>{
            try {
                await Author.updateMany({"books":req.params.id},{$pull: {"books": req.params.id}});
                const book = await Book.findByIdAndDelete(req.params.id);
                await book.updateOne({})
                res.status(200).json("delte successfully");
            } catch (error) {
                res.status(500).json(error);
                
            }
        }
}

module.exports = new Bookcontroller