const Transaction = require('../models/transaction');

exports.createTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const txn = new Transaction({ title, amount, date, category });
    await txn.save();
    res.status(201).json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getTransactions = async (req, res) => {
  try {
    // optional: allow query params (e.g., ?limit=20&sort=date)
    const txns = await Transaction.find().sort({ date: -1 });
    res.json(txns);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getTransaction = async (req, res) => {
  try {
    const txn = await Transaction.findById(req.params.id);
    if (!txn) return res.status(404).json({ error: 'Not found' });
    res.json(txn);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateTransaction = async (req, res) => {
  try {
    const { title, amount, date, category } = req.body;
    const txn = await Transaction.findByIdAndUpdate(
      req.params.id,
      { title, amount, date, category },
      { new: true, runValidators: true }
    );
    if (!txn) return res.status(404).json({ error: 'Not found' });
    res.json(txn);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteTransaction = async (req, res) => {
  try {
    const txn = await Transaction.findByIdAndDelete(req.params.id);
    if (!txn) return res.status(404).json({ error: 'Not found' });
    res.json({ message: 'Deleted', id: req.params.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
