const myFavBook = {
   title: ['Fahrenheit', '451'],
   author: ['Ray', 'Bradburry'],
   year: 1951,
   description: ['A dystopian scifi']
};

const myFavMovie = {
   title: ['Fast and Furious'],
   director:['Rob Cohen'],
   year: 2001,
   description: ['Action, Cars'],
   actors: [
      { actorName: 'Vin Diesel', actorRole: 'Dominic Toretto' },
      { actorName: 'Paul Walker', actorRole: 'Brian OConner' }
   ]
};

const myFavSeries = {
   title: ['Narcos'],
   directors: [
      {directorName: 'Chris Brancato'},
      {directorName: 'Carlo Bernard'}
   ],
   seasons: [
      {seasonName: '1', episodes: '10', startYear: '2013', endYear: '2014' },
      {seasonName: '2', episodes: '10', startYear: '2014', endYear: '2015' },
      {seasonName: '3', episodes: '10', startYear: '2015', endYear: '2016' }
   ],
   description: ['Biographical crime drama'],
   actors: [
      {actorName: 'Wagner Moura', roleName: 'Pablo Escobar' },
      {actorName: 'Pedro Pascal', roleName: 'Javier Pena' },
      {actorName: 'Boyd Holbrook', roleName: 'Steve Murphy' }
   ]
};

let myFavs = {
   book: myFavBook,
   movie: myFavMovie,
   series: myFavSeries
};

console.log (myFavs);