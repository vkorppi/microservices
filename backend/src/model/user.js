const mongoose = require('mongoose');

const configuration = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    address: { type: String, required: true }
});

UserSchema.set('toJSON', {
    transform: (schema) => {
        schema.id = schema._id;
        delete schema._id;
        delete schema.__v;
    }
});

module.exports = mongoose.model('User', UserSchema)
