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
    const categoriesID = await Category.findByPk(req.params.id, {include: [{model:Product}],});
    res.status(200).json(categoriesID);
  } catch(err){
    res.status(500).json(err);
  }finally{
    console.log("Passing through router.get /:id");
  }
});

router.post('/', async (req, res) => {
  try{
    const categoriesNew = await Category.create(req.body);
    res.status(200).json(categoriesNew);
  } catch(err){
    res.status(500).json(err);
  } finally{
    console.log("Passing through reouter.post");
  }
});

router.put('/:id', async (req, res) => {
  try{
    const categoriesUpdated = await Category.update(req.body, {where: {id: req.params.id},}); 
      res.status(200).json(categoriesUpdated);
  } catch(err){
    res.status(500).json(err);
  } finally{
    console.log("Passing through router.put");
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const categoriesDel = await Category.destroy({where: {id: req.params.id}});
    res.status(200).json(categoriesDel);
  } catch(err){
    res.status(500).json(err);
  } finally{
    console.log("Passing through router.delete");
  }
});

module.exports = router;
