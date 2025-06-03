const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

const mockUser = { username: 'vijay', password: '123456', name: 'Vijay Mangal' };
const secretKey = 'my_jwt_secret';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === mockUser.username && password === mockUser.password) {
    const token = jwt.sign({ name: mockUser.name }, secretKey, { expiresIn: '1h' });
    return res.json({ token, user: mockUser });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

app.get('/dashboard', (req, res) => {
  res.json({
    stats: { views: 0, users: 0, points: 35 },
    games: [
      {
        name: 'اسم اللعبة',
        approved: false,
        count: 4,
        age: '24/36',
        image: 'https://via.placeholder.com/150'
      },
      {
        name: 'اسم اللعبة',
        approved: false,
        count: 4,
        age: '24/36',
        image: 'https://via.placeholder.com/150'
      }
    ]
  });
});

app.listen(3000, () => {
  console.log('Backend running at http://localhost:3000');
});
