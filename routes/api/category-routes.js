const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //Use try catch, finally.
  try{
    const categoriesAll = await Category.findAll({
    include: [{model:Product}], //Eager Loading
  }); res.status(200).json(categoriesAll);
}catch(err){
  res.status(500);
}finally{
  console.log("Passing through router.get")
}
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', async (req, res) => {
  // create a new category
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
