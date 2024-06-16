const pool = require('./config');

const getRecipies = (req, res) => {
  pool.query('SELECT * FROM recipies', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

const getRecipieById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query('SELECT * FROM recipies WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows[0]);
  });
};

const createRecipie = (req, res) => {
  const { title, description, ingredients, steps } = req.body;
  pool.query(
    'INSERT INTO recipies (title, description, ingredients, steps) VALUES ($1, $2, $3, $4) RETURNING *',
    [title, description, ingredients, steps],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json(results.rows[0]);
    }
  );
};

module.exports = {
  getRecipies,
  getRecipieById,
  createRecipie,
};