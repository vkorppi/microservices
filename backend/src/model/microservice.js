const mongoose = require('mongoose');


const MicroserviceSchema = new mongoose.Schema({
 // params: [{ type: String, required: true }],
  name: { type: String, required: true },
  url: { type: String, required: true }
});

MicroserviceSchema.set('toJSON', {
  transform: (schema) => {
    schema.id = schema._id;
      delete schema._id;
      delete schema.__v;
  }
});

module.exports =  mongoose.model('Microservice', MicroserviceSchema)
