const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


// trim không có khoảng trắng 
// required: không được trống 
// minlength: 6,// do dai toi thieu
// maxlength:20,// do dai toi da
// unique: true // khong duoc trung lap


// shema auhor
const AuthorShema = new Schema({
    name: {
        type: String,required:true
    },year:{
        type: Number,required:true
    },
    books:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Book"
    }]
},{
    timestamps: true,
    collection: "authers"
})


//schema book 
const Bookskema = new Schema({
    name:{
        type: String,
        required: true
    },
    publicsheData:{
        type: String
    },
    genser:{
        type:[String]
    },
    // author: type la object_id va duoc lien ket voi bang tac gia voi khoa chinh 
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    }
},{
    timestamps: true,
    collection: "Books"
});

const Book = mongoose.model("Book",Bookskema);
const Author = mongoose.model("Author",AuthorShema);

module.exports ={Book,Author}
