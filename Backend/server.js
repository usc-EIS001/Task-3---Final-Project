const express = require('express');
const pool = require('./db/config');
const cors = require('cors');
const app = express();
const port = 5500;

app.use(cors());
app.use(express.json());

// Get all recipies
app.get('/recipies', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM recipies');
    res.json(result.rows);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get a single recipie by ID
app.get('/recipies/:id', async (req, res) => {
    const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM recipies WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ msg: 'Recipie not found' });
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Create a new recipie
app.post('/recipies', async (req, res) => {
    console.log('POST /recipies endpoint called');  // Debug Line
    console.log('Request body:', req.body);  // Debug Line

  try {
    const { title, description, ingredients, steps } = req.body;
    console.log('Data to insert:', { title, description, ingredients, steps });  // Debug Line


    const result = await pool.query(
      'INSERT INTO recipies (title, description, ingredients, steps) VALUES ($1, $2, $3, $4) RETURNING *',
      [title, description, ingredients, steps]
    );

    console.log('Database response:', result.rows[0]);  // Debug Line
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error'); // Debug Line
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
