const mongoose = require('mongoose');


mongoose.connect(`mongodb+srv://admin:${process.env.MONDODB_PW}@cluster0-pvgis.mongodb.net/test?retryWrites=true`, {
  useMongoClient: true,
  useNewUrlParser: true,
});
