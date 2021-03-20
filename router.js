const router = require('express').Router();

router.get('/ping',(req,res)=>{
  console.log('pong');
  res.status(200).json({data:'pong'})
})

module.exports = router;