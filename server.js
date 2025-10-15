// Import Express
const express = require('express');

// Create Express app
const app = express();

// PORT
const PORT = 3000;

// 1 Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
  const username = req.params.username;
  res.send(`Hello there, ${username}! What a delight it is to see you once more.`);
});

// 2 Rolling the Dice
app.get('/roll/:number', (req, res) => {
  const number = parseInt(req.params.number);

  if (isNaN(number)) {
    res.send('You must specify a number.');
    return;
  }

  const result = Math.floor(Math.random() * (number + 1));
  res.send(`You rolled a ${result}.`);
});

// 3 I Want THAT One!
const collectibles = [
  { name: 'shiny ball', price: 5.95 },
  { name: 'autographed picture of a dog', price: 10 },
  { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
];

app.get('/collectibles/:index', (req, res) => {
  const index = parseInt(req.params.index);
  const item = collectibles[index];

  if (!item) {
    res.send('This item is not yet in stock. Check back soon!');
    return;
  }

  res.send(`So, you want the ${item.name}? For ${item.price}, it can be yours!`);
});

// 4 Filter Shoes by Query Parameters
const shoes = [
  { name: "Birkenstocks", price: 50, type: "sandal" },
  { name: "Air Jordans", price: 500, type: "sneaker" },
  { name: "Air Mahomeses", price: 501, type: "sneaker" },
  { name: "Utility Boots", price: 20, type: "boot" },
  { name: "Velcro Sandals", price: 15, type: "sandal" },
  { name: "Jet Boots", price: 1000, type: "boot" },
  { name: "Fifty-Inch Heels", price: 175, type: "heel" }
];

app.get('/shoes', (req, res) => {
  let filteredShoes = shoes;

  const minPrice = parseFloat(req.query['min-price']);
  const maxPrice = parseFloat(req.query['max-price']);
  const type = req.query.type;

  if (!isNaN(minPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price >= minPrice);
  }

  if (!isNaN(maxPrice)) {
    filteredShoes = filteredShoes.filter(shoe => shoe.price <= maxPrice);
  }

  if (type) {
    filteredShoes = filteredShoes.filter(shoe => shoe.type === type);
  }

  res.send(filteredShoes);
});

// Start the server
app.listen(PORT, () => {
  console.log(`✅ Server is listening on http://localhost:${PORT}`);
  console.log(`🟢 Try examples:`);
  console.log(`   → /greetings/Christy`);
  console.log(`   → /roll/6`);
  console.log(`   → /collectibles/1`);
  console.log(`   → /shoes?type=boot&min-price=50`);
});
