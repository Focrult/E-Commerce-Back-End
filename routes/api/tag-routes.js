const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try{
    const tagAll = await Tag.findAll({include: [{model:Tag}], /*Eager Loading*/}); 
    res.status(200).json(tagAll);
  }catch(err){
  res.status(500);
  }finally{
  console.log("Passing through router.get")
}
});

router.get('/:id', async (req, res) => {
  try{
    const tagAll = await Tag.findByPk(req.params.id, {include: [{model:Tag}],});
    res.status(200).json(tagAll);
  } catch(err){
    res.status(500);
  }finally{
    console.log("Passing through router.get /:id");
  }
});

router.post('/', async (req, res) => {
  try{
    const tagAll = await Tag.create(req.body);
    res.status(200).json(tagAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through reouter.post");
  }
});

router.put('/:id', async (req, res) => {
  try{
    const tagAll = await Tag.update(req.body, {where: {id: req.params.id},}); 
      res.status(200).json(tagAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.put");
  }
});

router.delete('/:id', async (req, res) => {
  try{
    const tagAll = await Tag.delete({where: {id: req.params.id}});
    res.status(200).json(tagAll);
  } catch(err){
    res.status(500);
  } finally{
    console.log("Passing through router.delete");
  }
});

module.exports = router;
