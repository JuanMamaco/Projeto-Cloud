const Product = require('../models/productModel');

class ProductController {
  static async getAll(req, res) {
    const products = await Product.getAll();
    res.json(products);
  }

  static async getById(req, res) {
    const product = await Product.getById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Product not found' });
    }
  }

  static async create(req, res) {
    const newProduct = await Product.create(req.body);
    res.status(201).json({ id: newProduct });
  }

  static async update(req, res) {
    await Product.update(req.params.id, req.body);
    res.status(200).json({ message: 'Product updated' });
  }

  static async delete(req, res) {
    await Product.delete(req.params.id);
    res.status(200).json({ message: 'Product deleted' });
  }
}

module.exports = ProductController;
