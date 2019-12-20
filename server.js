const express = require("express");
const exphbr = require('express-handlebars');

// initialise
const app = express();


//create app engine 
app.engine('handlebars',exphbr(
    {
        defaultLayout: 'main'
    }
));
app.set('view engine', 'handlebars');


//port
const port = 3000 || process.env.PORT;

//express static folder
app.use(express.static('public'));


//handler
app.get('/',(req,res) => 
{
  //  res.send('Welcome to book finder');
  res.render('home.handlebars'); // res.render('home.handlebars'); change extension when rendering more files
});

app.get('/about',(req,res) =>
{
  res.render('about');
}
);

app.get('/contact',(req,res) =>
{
  res.render('contact');
}
);

//listen to port
app.listen(3000, () =>
{
 // console.log('Server is running on port ${port}');
  
  console.log(`Server is running on port ${port}`);
});