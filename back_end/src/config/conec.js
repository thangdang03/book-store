const mogoose = require('mongoose')
const conect= async()=>{
    try {
          const db = await mogoose.connect(process.env.MOGO_DB);
          console.log('conect suscessfull');
      } catch (error) {
        console.log('conect ero');
      }
}

module.exports = conect