const Supplier = require('../models/supplier');

// Create a supplier
exports.createSupplier = async (req, res) => {
  try {
    const supplier = new Supplier(req.body);
    await supplier.save();
    res.status(201).json(supplier);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all suppliers
exports.getSuppliers = async (req, res) => {
  try {
    const suppliers = await Supplier.find().populate('productsSupplied');
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single supplier
exports.getSupplierById = async (req, res) => {
  try {
    const supplier = await Supplier.findById(req.params.id).populate('productsSupplied');
    if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
    res.status(200).json(supplier);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a supplier
exports.updateSupplier = async (req, res) => {
    try {
      const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
      res.status(200).json(supplier);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  // Delete a supplier
  exports.deleteSupplier = async (req, res) => {
    try {
      const supplier = await Supplier.findByIdAndDelete(req.params.id);
      if (!supplier) return res.status(404).json({ message: 'Supplier not found' });
      res.status(200).json({ message: 'Supplier deleted' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  