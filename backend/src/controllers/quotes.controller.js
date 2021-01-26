const Quote = require('../models/Quotes');
const ctrlQuote = {}

ctrlQuote.getQuotes= async (req,res)=>{
    const quotes = await Quote.find(); 
    res.json(quotes);
}
ctrlQuote.getQuoteById = async (req,res)=>{
    const quote = await Quote.findById(req.params.id)
    res.json(quote)
}
ctrlQuote.createQuote = async (req,res)=>{
    const {quote,author} = req.body;
    const newQuote = new Quote({quote,author});
    await newQuote.save();
    res.json({message:'New Quote saved successfuly'})
}
ctrlQuote.deleteQuote = async(req,res)=>{
    const {id} = req.params;
    await Quote.findByIdAndDelete(id);
    res.json({message:'Quote deleted Successfully'})
}
ctrlQuote.updateQuote = async (req,res)=>{
    const {id} = req.params;
    const {quote,author} = req.body;
    await Quote.findByIdAndUpdate(id,{quote,author});
    res.json({message:'Quote Updated Successfully'})
}
module.exports = ctrlQuote;