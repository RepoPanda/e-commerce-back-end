const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// find all categories
router.get('/', async (req, res) => {
  try{
    // find all categories
    const catagoryData = await Category.findAll({
      // be sure to include its associated Products
      include: [{model: Product}]
    });
    res.status(200).json(catagoryData);
  }catch(err) {
    res.status(500).json(err);
  }
});

// find one category by its `id` value
router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  try {
    const catagoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{model: Product}]
    });
  
    if (!catagoryData) {
      res.status(404).json({ message: 'No category found with that id!' });
      return;
    }

    res.status(200).json(catagoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category

});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const categoryData = await Category.update(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
