const express = require('express');
const router = express.Router()

// router.get('/', (req, res) => {
//     res.redirect('/public/html/index.html')
// })
router.get("/",(req,res)=>{
    res.render('./home.ejs')
})
module.exports = router