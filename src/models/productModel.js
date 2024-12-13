class Product {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    static async getAll() {
      const [rows] = await db.query('SELECT * FROM products');
      return rows;
    }
  
    static async getById(id) {
      const [rows] = await db.query('SELECT * FROM products WHERE id = ?', [id]);
      return rows[0];
    }
  
    static async create({ name, quantity, price }) {
      const [result] = await db.query('INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)', [name, quantity, price]);
      return result.insertId;
    }
  
    static async update(id, { name, quantity, price }) {
      await db.query('UPDATE products SET name = ?, quantity = ?, price = ? WHERE id = ?', [name, quantity, price, id]);
    }
  
    static async delete(id) {
      await db.query('DELETE FROM products WHERE id = ?', [id]);
    }
  }
  
  const db = require('../database/db');
  module.exports = Product;
  