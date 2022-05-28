const products = require('../data/products')
module.exports={
    add : (req,res) =>{
  return res.render('categoryAdd')
    },
    store: (req,res) =>{
        let  lastID = categories_db[categories_db.length - 1].id
        let 
    },
    edit:()=>{
        const {id} = req.params;
        const category = categories_db.find(category => category.id === +id);
        return res.render()
    },
    update:() =>{
        const {id} = req.params;
        const {name} =req.body
       
        const categoriesModify = categories_db.map(category )
            }


}