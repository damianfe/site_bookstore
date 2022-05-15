const products = require('../data/products')

module.exports ={
    index: (req, res,) => {
        res.render('index', { 
            products,
             });
      },
      search:(req,res) =>{
          res.render('products',{
              products,

          })
      }
  }