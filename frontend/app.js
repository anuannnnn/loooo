
 const express=require('express');
const app = express();

const nav=[
    {
        link:'/books',name:'books'},
    
    {link:'/authors',name:'authors'},

     {link:'/signup',name:'signup'},
     
    {link:'/admin',name:'add Book'}


    
    
    
]; 
const authorRouter = require('./src/routes/authorRoutes')(nav)
const booksRouter = require('./src/routes/bookRoutes')(nav)
// const signupRouter = require('./src/routes/signupRoutes')(nav)

 const signupRouter = require('./src/routes/signupRoutes')(nav)
 const adminRouter = require('./src/routes/adminRoutes')(nav)



app.use(express.static('./public'));

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/authors',authorRouter);
app.use('/books',booksRouter);
app.use('/admin',adminRouter);

app.use('/signup',signupRouter);



 

app.get('/',function(req,res)
{
    res.sendFile(__dirname+"/src/views/index.html");
    res.render("index",{
     nav,
     title:'library'
    });
});

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({
//     extended: false
// }));
// app.use(cors());


// app.use(cookieParser());
// app.use(session({
//     secret: 'positronx',
//     saveUninitialized: false,
//     resave: false
// }));



app.listen(6964);