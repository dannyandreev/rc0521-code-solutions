console.log('Lodash is loaded:', typeof _ !== 'undefined');
var players = [];

// create 4 players
players.push(createPlayer('Jack'));
players.push(createPlayer('Alex'));
players.push(createPlayer('John'));
players.push(createPlayer('Dave'));

console.log(players);

// deck + shuffle

var deck = [];

deck = createDeck();

console.log('deck created:');
console.log(deck);

shuffle(deck);

console.log('deck shuffled:');
console.log(deck);

dealCards(deck, players, 2);
console.log('Cards Dealt:');
console.log(players[0].hand);
console.log(players[1].hand);
console.log(players[2].hand);
console.log(players[3].hand);

console.log('Finding Winners:');

console.log('The Winner is Player: ' + findWinner(findPlayerValues(players)) + '!');

function findWinner(array) {

  var max = array[0];
  var maxIndex = 0;

  for (var i = 1; i < array.length; i++) {
    if (array[i] > max) {
      maxIndex = i;
      max = array[i];
    }
  }

  return maxIndex;
}

function findPlayerValues(players) {
  var playerValues = [];
  for (var i = 0; i < players.length; i++) {
    playerValues[i] = 0;
    for (var j = 0; j < players[0].hand.length; j++) {
      playerValues[i] += players[i].hand[j].value;
    }
  }
  return playerValues;
}

function dealCards(deck, players, cardsToDeal) {
  for (var i = 0; i < 2; i++) {
    for (var j = 0; j < players.length; j++) {
      var card = deck.pop();
      console.log('player dealt a:' + card);
      players[j].hand.push(card);
    }
  }
}

function createDeck() {
  var deck = [];
  pushSuit(deck, 'clubs');
  pushSuit(deck, 'diamonds');
  pushSuit(deck, 'hearts');
  pushSuit(deck, 'spades');

  return deck;
}

function pushSuit(deck, suit) {
  deck.push({ rank: 'Ace', suit: suit, value: 11 });
  for (var i = 2; i < 11; i++) {
    deck.push({ rank: i, suit: suit, value: i });
  }
  deck.push({ rank: 'Jack', suit: suit, value: 10 });
  deck.push({ rank: 'Queen', suit: suit, value: 10 });
  deck.push({ rank: 'King', suit: suit, value: 10 });
}

function shuffle(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function createPlayer(name) {
  return { name: name, hand: [] };
}
