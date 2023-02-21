const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  //Use try catch, finally.
  try{
    const categoriesAll = await Category.findAll({include: [{model:Product}], /*Eager Loading*/}); 
    res.status(200).json(categoriesAll);
}catch(err){
  res.status(500);
}finally{
  console.log("Passing through router.get")
}
});

router.get('/:id', async (req, res) => {
  try{
    const categoriesAll = await Category.findByPk(req.params.id, {include: [{model:Product}],});
    res.status(200).json(categoriesAll);
  } catch(err){
    res.status(500);
  }finally{
    console.log("Passing through router.get /:id");
  }
});

router.post('/', async (req, res) => {
  try{
    const categoriesAll = await Category.create(req.body);
    res.status(200).json(categoriesAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through reouter.post");
  }
});

router.put('/:id', async (req, res) => {
  try{
    const categoriesAll = await Category.update(req.body, {where: {id: req.params.id},}); 
      res.status(200).json(categoriesAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.put");
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const categoriesAll = await Category.delete({where: {id: req.params.id}});
    res.status(200).json(categoriesAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.delete");
  }
});

module.exports = router;
