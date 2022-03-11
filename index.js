const express = require('express')
const app = express();

const morgan = require('morgan');

let topMovies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994'
  },
  {
    title: 'The Godfather',
    year: '1972'
  },
  {
    title: 'The Dark Knight',
    year: '2008'
  },
  {
    title: 'The Godfather: Part II',
    year: '1974'
  },
  {
    title: '12 Angry Men',
    year: '1957'
  },
  {
    title: 'Schindler\'s List',
    year: '1993'
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003'
  },
  {
    title: 'Pulp Fiction',
    year: '1994'
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001'
  },
  {
    title: 'The Good, the Bad and the Ugly',
    year: '1966'
  }
];

app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.get('/movies', (req, res) => {
  res.json(topMovies);
});

app.use(morgan('common'));

app.use('/public', express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
