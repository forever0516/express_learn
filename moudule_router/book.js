const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
	res.send(" home page of book");
})

router.get('/search', (req, res) => {
	res.send(" search book");
})

router.get('/detail', (req, res) => {
	res.send(" a book detail");
})

module.exports = router