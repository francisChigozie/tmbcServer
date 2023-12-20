const express = require('express');
const router = express.Router();
const Contact = require('../model/Contact');

// Get all Contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json({ success: true, data: contacts });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Get single Contact
router.get('/:id', async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.json({ success: true, data: contact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Add a Contact
router.post('/', (async(req, res, next) => {

  const contact = new Contact({
    name: req.body.name,
    subject: req.body.subject,
    email: req.body.email,
    phone: req.body.phone,
    message: req.body.message
  });
console.log(contact)

   const newContact = await Contact.create(contact)

   const result = await newContact.save()// Make sure to wrap this code in an async function
          .then((result) => {
             res.render('feedback', {contact: result});
          })
          .catch((err) => {
             console.log(err)
          })
   console.log(result)
}));

// Update Contact
router.put('/:id', async (req, res) => {
  try {
    const updatedContact = await Contact.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          email: req.body.email,
          phone: req.body.phone,
        },
      },
      { new: true }
    );
    res.json({ success: true, data: updatedContact });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

// Delete Contact
router.delete('/:id', async (req, res) => {
  try {
    await Contact.findByIdAndDelete(req.params.id);
    res.json({ success: true, data: ('Contact Deleted')});
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
});

router.get('/api/contact', async (res,req) => {
  res.sendFile('index.html')
})

module.exports = router;
