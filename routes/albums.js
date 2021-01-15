const express = require("express");
const router = express.Router();
let dataFile = require('../data/data.json');


router.get('/albums' , (req,res)=>{
    
    let alldata = dataFile.kanny

    res.render('albums',{
       
        data : alldata,
         pageTitle: "Generic Page - Industrious by TEMPLATED"
       
    })
 
})




router.get('/albums/:albumsSummary', (req, res) => {
    let alldata = dataFile.kanny
    let Sumtest=[];
    let pageSummary = "";
    
    alldata.forEach(SumObj =>{
        if (SumObj.shortname ===req.params.albumsSummary){
            pageSummary= SumObj.summary;
            Sumtest.push(SumObj)

        }
        
    })
    

    res.render('albums', {
        data : Sumtest,
        Summary: pageSummary,
        pageTitle: "Generic Page - Industrious by TEMPLATED"
    })
})






module.exports = router;