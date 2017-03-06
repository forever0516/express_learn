const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send(" home page of order");
})

router.get('/orderList', (req, res) => {
	res.send(" order list");
})

router.get('/order', (req, res) => {
	res.send(" order detail");
})

module.exports = router