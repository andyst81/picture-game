import React, { Component } from "react";

const iconArr = ['airplane.svg', 'beach.svg', 'bear.svg', 'beer.svg', 'black-nib.svg',
'blossom.svg', 'bomb.svg', 'bouquet.svg', 'cat-face.svg', 'cockroach.svg', 'coffin.svg',
'couple.svg', 'doughnut.svg', 'film-projector.svg', 'fish.svg', 'foggy.svg', 'green-apple.svg',
'guitar.svg', 'hamburger.svg', 'heart.svg', 'honeybee.svg', 'meal.svg', 'mount-fuji.svg',
'popcorn.svg', 'rose.svg', 'saxophone.svg', 'snake.svg', 'soccer-ball.svg', 'spider.svg',
'statue-of-liberty.svg', 'tree.svg', 't-rex.svg', 'unicorn.svg', 'video-game.svg']

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
  };

class Icons extends Component {
  state = {
    rand: '',
    randArr: [],
    cards: 2
  };

  setInput = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  }

  render() {
    return (
      <div className='container'>
        <form>
          <label style={{textAlign:"center"}}>How many images would you like to see? Choose a number between 1 and 8 below:</label>
          <input value={this.state.cards} type='number' id='quantity' min='1' max='8'  onChange={this.setInput('cards')} />
          <ConsoleLog>{this.state.cards}</ConsoleLog>
        </form>
        <button className='float-right' onClick={() => {
          var value = this.state.cards
            this.getUnique(iconArr, value);
          }} >
          Get images
        </button>

        <br />
        <br />

        <div style={{textAlign:"center"}}>
        {this.state.randArr.map(item => (
            <span key={item}>
            <ConsoleLog>{item}</ConsoleLog>
            <img src={'/cards/'+item} alt='card icon' />
            </span>
          ))}
        </div>
      </div>
    );
  }

  getUnique(arr, count) {
    // Make a copy of the array
    var tmp = arr.slice(arr);
    var ret = [];

    for (var i = 0; i < count; i++) {
      var index = Math.floor(Math.random() * tmp.length);
      var removed = tmp.splice(index, 1);
      // Since we are only removing one element
      ret.push(removed[0]);
    }
    this.setState({ randArr: ret });
    console.log(ret)
  }
}

export default Icons;
