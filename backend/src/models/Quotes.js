const {Schema,model} = require('mongoose');

const quoteSchema = new Schema({
    quote:{type:String},
    author:{type:String}
});

module.exports = model('Quote',quoteSchema)



