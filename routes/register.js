const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');

router.get('/', (req, res) => {
  res.render('app');
});

router.post('/', async (req, res) => {
  try {
    const { name, email, contact, password } = req.body;
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({ name, email, contact, password: hashedPassword });
    await newUser.save();

    res.render('app');
  } 
  catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;





















// const express = require('express');
// const app = express();
// const connectToDatabase = require('../config/mongoose');
// const bcrypt = require('bcryptjs');
// const path = require("path");
// const hbs =require("hbs");
// const item = require('../config/userModel');

// const  staticPath =path.join(__dirname, "./public");
// const template_path = path.join(__dirname,"./views/partials")
// hbs.registerPartials(template_path);
// app.set("view engine", "hbs");


// connectToDatabase();

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(staticPath));
// app.use(express.static(template_path))
// // app.use(express.static(partialsPath));
// app.get('/register', (req, res) => {                                                                                                                        
//   res.render('img');
// });

// app.post('/register', async (req, res) => {
//   let { name, email,contact, password } = req.body;
//   let saltRounds = 10;
//   let salt = await bcrypt.genSalt(saltRounds);
//   let hashedPassword = await bcrypt.hash(password, salt);
//   console.log(hashedPassword);
//   //
//   let user = new item({ name, email,contact, password: hashedPassword });
//   console.log(name);
  
  
//   try {
//     await user.save();
//     res.render('img');
//   }
//   catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });




// app.get('/login', (req, res) => {                                                                                                                        
//   res.render('img');
// });

// app.post('/login', async (req, res) => {
//   let { email, password } = req.body;
//   try {
//     let user = await item.findOne({ email });
//     if (!user) {
//       res.status(400).send('<h1>User not found</h1>');
//       return;
//     }
//     let Match = await bcrypt.compare(password,user.password);
//     console.log(password,"and",user.password);
//     if (Match) {
//       res.render("index.hbs")
//     } else {
//      res.send("invalid password")
//     }
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Server Error');
//   }
// });
// app.get('*',(req,res)=>{
//   res.render("404")
// })
// const port = process.env.PORT || 4000;
// app.listen(port, () => console.log(`Listening on port ${port}`));



