const express = require('express');
const router = express.Router();
const ctrl = require('../controller/transactionController');

router.post('/', ctrl.createTransaction);
router.get('/', ctrl.getTransactions);
router.get('/:id', ctrl.getTransaction);
router.put('/:id', ctrl.updateTransaction);
router.delete('/:id', ctrl.deleteTransaction);

module.exports = router;
