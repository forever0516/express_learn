const express = require('express')
const app = express()

app.get('/remember', (req, res) => {
   res.cookie('rememberme', '1', {expires: new Date(Date.now() + 900000), httpOnly: true });
   res.clearCookie('rememberme');
   res.send("OK");
});

app.get('/json', (req, res) => { // JSON.stringify()
   res.json({"a":123, b:456,});
});

app.get('/leavehere', (req, res) => { 
   res.redirect('http://www.google.com'); // accept relative, fully-qualified
});

app.get('/forbidden', (req, res) => { 
   res.sendStatus(403); //response http status code
});

// pass a local variable to the view
res.render('user', { name: 'Tobi' }, (err, html) => {
  // ...
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})