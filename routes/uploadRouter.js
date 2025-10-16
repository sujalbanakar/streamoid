import express from 'express';
import fs from 'fs';
import csv from 'csv-parser';
import productModel from '../models/productmodel.js';
import upload from '../config/multer-config.js';

const router = express.Router();

// Serve HTML upload form
router.get('/', (req, res) => {
    res.render('upload'); // render upload.ejs
});


router.post('/', upload.single('file'), async (req, res) => {
    if (!req.file) return res.status(400).send("CSV file is required");

    const results = [];
    const failed = [];

    fs.createReadStream(req.file.path)
        .pipe(csv())
        .on('data', (row) => {
            const { sku, name, brand, color, size, mrp, price, quantity } = row;

            if (!sku || !name || !brand || !mrp || !price) {
                failed.push({ row, error: "Missing required fields" });
            } else if (parseFloat(price) > parseFloat(mrp)) {
                failed.push({ row, error: "Price cannot be greater than MRP" });
            } else if (parseInt(quantity) < 0) {
                failed.push({ row, error: "Quantity cannot be negative" });
            } else {
                results.push({
                    sku,
                    name,
                    brand,
                    color,
                    size,
                    mrp: parseFloat(mrp),
                    price: parseFloat(price),
                    quantity: parseInt(quantity),
                });
            }
        })
        .on('end', async () => {
            try {
                if (results.length > 0) {
                    await productModel.insertMany(results);
                }
                fs.unlinkSync(req.file.path); // remove CSV after processing
                res.json({ stored: results.length, failed });
            } catch (err) {
                res.status(500).send(err.message);
            }
        });
});

export default router;
