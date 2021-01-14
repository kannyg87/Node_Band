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
    
    let pageSummary = [];
    let TylerAlbumName = [];
    alldata.forEach(SumObj =>{
        if (SumObj.albumname ===req.params.albumsSummary){
            pageSummary= SumObj.summary;
            TylerAlbumName.push(SumObj)

        }
        
    })
    

    res.render('albums', {
        data : alldata,
        Summary: pageSummary,
        pageTitle: "Generic Page - Industrious by TEMPLATED"
    })
})






module.exports = router;