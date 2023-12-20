const express = require('express');
const contributorRouter = express.Router();
const Contributor = require('../model/Contributor');

// Get all Contributors
contributorRouter.get('/', async (req, res) => {

   try {
    const contributor =  await Contributor.find().sort({ preference: 'asc' })
    res.json({ success: true, data: contributor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  } 

});

// Get single Conributor
contributorRouter.get('/:id', async (req, res) => {
  try {
    const contributor = await Contributor.findById(req.params.id);
    res.json({ success: true, data: contributor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Add a Contributor
contributorRouter.post('/', (async(req, res, next) => {

  const contributor = new Contributor({
    preference: req.body.preference,
    name: req.body.name,
    text: req.body.text
  });
console.log(contributor)

   const newContributor = await Contributor.create(contributor)

   const result = await newContributor.save()// Make sure to wrap this code in an async function
          .then((result) => {
             res.render('profiles', {contributor: result});
          })
          .catch((err) => {
             console.log(err)
          })
   console.log(result)
}));

// Update Contributor
contributorRouter.put('/:id', async (req, res) => {
  try {
    const updatedContributor = await Contributor.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          preference: req.body.preference,
          name: req.body.name,
          text: req.body.text,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedContributor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Delete Contact
contributorRouter.delete('/:id', async (req, res) => {
  try {
    await Contributor.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: ('Contributor Deleted')});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

contributorRouter.get('/api/contributor', async (res,req) => {
  res.sendFile('index.html')
})

module.exports = contributorRouter;
