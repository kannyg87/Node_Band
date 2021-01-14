const express = require("express");
const router = express.Router();
let dataFile = require('../data/data.json');

router.get('/', (req, res) => {
    // let pageIndex = dataFile.albums;

    res.render('index',{
        data: dataFile.kanny,
        pageTitle : "Industrious by TEMPLATED"
       

})

})

router.get('/index', (req, res) => {
    // let pageIndex = dataFile.albums;

    res.render('index',{
        data: dataFile.kanny,
        pageTitle : "Industrious by TEMPLATED"
       

})

})


module.exports = router;


// let nameArr = [
//     "Woody",
//     "RJ",
//     "Micah",
//     "Jeremy",
//     "Chris",
//     "Dan",
//     "Cainan",
//     "Michael"
// ]

// router.get('/', async (req, res) => {

//     res.render('index', {
//         names: nameArr
//     })
// })

 
// <% names.forEach(name => { %>
     
//     <h2><%= name %> </h2>
// <% }) %>
