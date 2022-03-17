const express = require('express'),
bodyParser = require('body-parser'),
uuid = require('uuid'),
morgan = require('morgan');

const app = express();

app.use(bodyParser.json());

let users = [
  {
    id: 1,
    name: 'Kim',
    favoriteMovies: []
  },
  {
    id: 2,
    name: 'Joe',
    favoriteMovies: ['The Godfather']
  }
];

let movies = [
  {
    title: 'The Shawshank Redemption',
    year: '1994',
    genre: {
      name: 'Drama',
      description: 'Genre Description'
    },
    director: {
      name: 'Frank Darabont',
      bio: 'Frank Árpád Darabont is an American film director, screenwriter and producer. He has been nominated for three Academy Awards and a Golden Globe Award. In his early career, he was primarily a screenwriter for such horror films as A Nightmare on Elm Street 3: Dream Warriors, The Blob and The Fly II.'
    }
  },
  {
    title: 'The Godfather',
    year: '1972',
    genre: {
      name: 'Crime',
      description: 'Genre Description'
    },
    director: {
      name: 'Francis Ford Coppola',
      bio: 'Francis Ford Coppola is an American film director, producer, and screenwriter. He was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s. His accolades include five Academy Awards, six Golden Globe Awards, and a British Academy Film Award.'
    }
  },
  {
    title: 'The Dark Knight',
    year: '2008',
    genre: {
      name: 'Action',
      description: 'Genre Description'
    },
    director: {
      name: 'Christopher Nolan',
      bio: 'Christopher Edward Nolan CBE is a British-American film director, producer, and screenwriter. His films have grossed more than US$5 billion worldwide, and have garnered 11 Academy Awards from 36 nominations. Born and raised in London, Nolan developed an interest in filmmaking from a young age.'
    }
  },
  {
    title: 'The Godfather: Part II',
    year: '1974',
    genre: {
      name: 'Crime',
      description: 'Genre Description'
    },
    director: {
      name: 'Francis Ford Coppola',
      bio: 'Francis Ford Coppola is an American film director, producer, and screenwriter. He was a central figure in the New Hollywood filmmaking movement of the 1960s and 1970s. His accolades include five Academy Awards, six Golden Globe Awards, and a British Academy Film Award.'
    }
  },
  {
    title: '12 Angry Men',
    year: '1957',
    genre: {
      name: 'Drama',
      description: 'Genre Description'
    },
    director: {
      name: 'Sidney Lumet',
      bio: 'Sidney Arthur Lumet was an American film director, producer, and screenwriter with over 50 films to his credit. He was nominated five times for the Academy Award: four for Best Director for 12 Angry Men, Dog Day Afternoon, Network, and The Verdict and one for Best Adapted Screenplay for Prince of the City.'
    }
  },
  {
    title: 'Schindler\'s List',
    year: '1993',
    genre: {
      name: 'War',
      description: 'Genre Description'
    },
    director: {
      name: 'Steven Spielberg',
      bio: 'Steven Allan Spielberg is an American film director, producer, and screenwriter. He began his career in the New Hollywood era and is currently the most commercially successful director of all time.'
    }
  },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: '2003',
    genre: {
      name: 'Fantasy',
      description: 'Genre Description'
    },
    director: {
      name: 'Peter Jackson',
      bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.'
    }
  },
  {
    title: 'Pulp Fiction',
    year: '1994',
    genre: {
      name: 'Crime',
      description: 'Genre Description'
    },
    director: {
      name: 'Quentin Tarantino',
      bio: 'Quentin Jerome Tarantino is an American filmmaker, actor, film critic and author. His films are characterized by nonlinear storylines, dark humor, stylized violence, extended dialogue, pervasive use of profanity, ensemble casts, references to popular culture, alternate history, and neo-noir.'
    }
  },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
    year: '2001',
    genre: {
      name: 'Fantasy',
      description: 'Genre Description'
    },
    director: {
      name: 'Peter Jackson',
      bio: 'Sir Peter Robert Jackson ONZ KNZM is a New Zealand film director, screenwriter, and film producer. He is best known as the director, writer, and producer of the Lord of the Rings trilogy and the Hobbit trilogy, both of which are adapted from the novels of the same name by J. R. R. Tolkien.'
    }
  },
  {
    title: 'The Good, the Bad and the Ugly',
    year: '1966',
    genre: {
      name: 'Western',
      description: 'Genre Description'
    },
    director: {
      name: 'Sergio Leone',
      bio: 'Sergio Leone was an Italian film director, producer and screenwriter credited as the creator of the Spaghetti Western genre and widely regarded as one of the most influential directors in the history of cinema.'
    }
  }
];

//READ + RETURN A LIST OF ALL MOVIES
app.get('/movies', (req, res) => {
  res.status(200).json(movies);
});

//READ + RETURN DATA ABOUT A SINGLE MOVIE BY TITLE
app.get('/movies/:title', (req, res) => {
  const {title} = req.params;
  const movie = movies.find(movie => movie.title === title);

  if (movie) {
    res.status(200).json(movie);
  } else {
    res.status(404).send('no such movie');
  }
});

//READ + RETURN DATA ABOUT A GENRE (DESCRIPTION) BY NAME/TITLE
app.get('/movies/genre/:genreName', (req, res) => {
  const {genreName} = req.params;
  const genre = movies.find(movie => movie.genre.name === genreName).genre;

  if (genre) {
    res.status(200).json(genre);
  } else {
    res.status(404).send('no such genre');
  }
});

//READ + RETURN DATA ABOUT A DIRECTOR (BIO, BIRTH YEAR, DEATH YEAR) BY NAME
app.get('/movies/director/:directorName', (req, res) => {
  const {directorName} = req.params;
  const director = movies.find(movie => movie.director.name === directorName).director;

  if (director) {
    res.status(200).json(director);
  } else {
    res.status(404).send('no such director');
  }
});

//CREATE + ALLOW NEW USERS TO REGISTER
app.post('/users', (req, res) => {
  const newUser = req.body;

  if (newUser.name) {
    newUser.id = uuid.v4();
    users.push(newUser);
    res.status(201).json(newUser);
  } else {
    res.status(400).send('users need names');
  }
});

//UPDATE + ALLOW USERS TO UPDATE THEIR USER INFO (USERNAME)
app.put('/users/:id', (req, res) => {
  const {id} = req.params;
  const updatedUser = req.body;

  let user = users.find(user => user.id == id);

  if (user) {
    user.name = updatedUser.name;
    res.status(200).json(user);
  } else {
    res.status(400).send('no such user');
  }
});

//CREATE + ALLOW USERS TO ADD A MOVIE TO THEIR LIST OF FAVORITES
app.post('/users/:id/:movieTitle', (req, res) => {
  const {id, movieTitle} = req.params;

  let user = users.find(user => user.id == id);

  if (user) {
    user.favoriteMovies.push(movieTitle);
    res.status(200).send('${movieTitle} has been added to user ${id}\'s array');
  } else {
    res.status(400).send('no such user');
  }
});

//DELETE + ALLOW USERS TO REMOVE A MOVIE FROM THEIR LIST OF FAVORITES
app.delete('/users/:id/:movieTitle', (req, res) => {
  const {id, movieTitle} = req.params;

  let user = users.find(user => user.id == id);

  if (user) {
    user.favoriteMovies = user.favoriteMovies.filter(title => title !== movieTitle);
    res.status(200).send('${movieTitle} has been removed from user ${id}\'s array');
  } else {
    res.status(400).send('no such user');
  }
});

//DELETE + ALLOW EXISTING USERS TO DEREGISTER
app.delete('/users/:id', (req, res) => {
  const {id} = req.params;

  let user = users.find(user => user.id == id);

  if (user) {
    users = users.filter(user => user.id != id)
    res.status(200).send('user ${id} has been deleted');
  } else {
    res.status(400).send('no such user');
  }
});

//PREVOUS FUNCTIONS
app.get('/', (req, res) => {
  res.send('Welcome to my app!');
});

app.use(morgan('common'));

app.use(express.static('public'));

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(8080, () => {
  console.log('Your app is listening on port 8080.');
});
