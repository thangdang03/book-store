const author_router = require("./auther");
const book_router = require("./book_rt");
const Router=(app)=>{
    app.use("/book",book_router)
    app.use("/user",author_router);
}

module.exports = Router;