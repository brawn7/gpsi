const gpsi = require('./controllers/base')
const router = require('express').Router();

router.get('/ping',(req,res)=>{
  console.log('pong');
  res.status(200).json({data:'pong'})
})

router.get('/welcome', gpsi.welcomeInit);

router.get('/vendors', gpsi.allVendors);
router.get('/vendors/:id', gpsi.oneVendor);
router.post('/vendors', gpsi.addVendor);
// router.put('/vendors', gpsi.vendor);
router.delete('/vendors/:id', gpsi.delVendor);


module.exports = router;