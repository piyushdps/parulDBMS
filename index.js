const express = require('express');
const path = require('path');
const hpp = require('hpp');
const cors = require('cors');

const main = async () => {

  const app = express();
  // Prevent http param pollution
  app.use(hpp());

  // Enable CORS
  app.use(cors());

  app.use(express.json({ extended: false }));
  app.use(express.urlencoded({ extended: false }));
  //auth login
  app.get('/api/auth' , (req,res) =>{
    res.send('Hi There')
  })
  app.use('/api/auth/', require('./server/routes/auth'));
  // doc
  app.use('/api/doc/', require('./server/routes/doc'));
  //meds
  app.use('/api/med/', require('./server/routes/med'));
  //hospital
  app.use('/api/hosp/', require('./server/routes/hosp'));
  // admin
  app.use('/api/admin/', require('./server/routes/admin'));

  //patients
  app.use('/api/pat/', require('./server/routes/pat'));
  //reports
  app.use('/api/repo/', require('./server/routes/repo'));
  //staff
  //appointments
  app.use('/api/app/', require('./server/routes/app'));

  // serve static assets in production
  if (
    process.env.NODE_ENV === 'staging' ||
    process.env.NODE_ENV === 'production'
  ) {
    
    app.use(express.static(path.join(__dirname, '/client/build')));
    app.use('*', (req, res) => {
      res.sendFile(
        path.resolve(__dirname, '..', 'client', 'build', 'index.html')
      );
    });
  }



  app.listen(process.env.PORT || 8080, () =>
    console.log(`Listening on port ${process.env.PORT || 8080}`)
  );
};

main();

