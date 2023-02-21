const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagAll = await Tag.findAll({include: [{model:Product, through: ProductTag,}], /*Eager Loading*/}); 
    res.status(200).json(tagAll);
  }catch(err){
  res.status(500);
  }finally{
  console.log("Passing through router.get")
}
});

router.get('/:id', async (req, res) => {
  try{
    const tagID = await Tag.findByPk(req.params.id, {include: [{model:Product, through: ProductTag,}],});
    res.status(200).json(tagID);
  } catch(err){
    res.status(500);
  }finally{
    console.log("Passing through router.get /:id");
  }
});

router.post('/', async (req, res) => {
  try{
    const tagNew = await Tag.create(req.body);
    res.status(200).json(tagNew);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through reouter.post");
  }
});

router.put('/:id', async (req, res) => {
  try{
    const tagUpdated = await Tag.update(req.body, {where: {id: req.params.id},}); 
      res.status(200).json(tagUpdated);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.put");
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const tagDel = await Tag.delete({where: {id: req.params.id}});
    res.status(200).json(tagDel);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.delete");
  }
});

module.exports = router;
