const express = require('express');
const editorRouter = express.Router();
const Editor = require('../model/Editor');



// Get all Editors
editorRouter.get('/', async (req, res) => {

  try {
    const editor =  await Editor.find().sort({ preference: 'asc' })
    res.json({ success: true, data: editor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  } 
 
});

// Get single Editor
editorRouter.get('/:id', async (req, res) => {
  try {
    const editor = await Editor.findById(req.params.id);
    res.json({ success: true, data: editor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Add a Editor
editorRouter.post('/', (async(req, res, next) => {

  const editor = new Editor({
    name: req.body.name,
    text: req.body.text
  });
console.log(editor)

   const newEditor = await Editor.create(editor)

   const result = await newEditor.save()// Make sure to wrap this code in an async function
          .then((result) => {
             res.render('chiefeditor', {editor: result});
          })
          .catch((err) => {
             console.log(err)
          })
  // console.log(result)
}));

// Update  Editor
editorRouter.put('/:id', async (req, res) => {
  try {
    const updatedEditor = await Editor.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          name: req.body.name,
          text: req.body.text,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedEditor });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Delete  Editor
editorRouter.delete('/:id', async (req, res) => {
  try {
    await Editor.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: ('An Editor-in-Chief Deleted')});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

editorRouter.get('/api/editor', async (res,req) => {
  res.sendFile('index.html')
})


module.exports = editorRouter;
