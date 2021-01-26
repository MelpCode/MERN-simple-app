
const ctrlQuote = require('../controllers/quotes.controller');
const express = require('express');

const router = express.Router();

router.get('/api/quotes',ctrlQuote.getQuotes);
router.get('/api/quote/:id',ctrlQuote.getQuoteById);
router.post('/api/quote',ctrlQuote.createQuote);
router.delete('/api/quote/:id',ctrlQuote.deleteQuote);
router.put('/api/quote/:id',ctrlQuote.updateQuote);
module.exports = router;