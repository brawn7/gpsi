const app = require('./express');

app.listen(app.get('port'),()=>{
  console.log('listening on port ',app.get('port'))
});
