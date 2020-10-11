import React, { Component } from "react";

const iconArr = ['airplane.svg', 'beach.svg', 'bear.svg', 'beer.svg', 'black-nib.svg',
'blossom.svg', 'bomb.svg', 'bouquet.svg', 'cat-face.svg', 'cockroach.svg', 'coffin.svg',
'couple.svg', 'doughnut.svg', 'film-projector.svg', 'fish.svg', 'foggy.svg', 'green-apple.svg',
'guitar.svg', 'hamburger.svg', 'heart.svg', 'honeybee.svg', 'meal.svg', 'mount-fuji.svg',
'popcorn.svg', 'rose.svg', 'saxophone.svg', 'snake.svg', 'soccer-ball.svg', 'spider.svg',
'statue-of-liberty.svg', 'tree.svg', 't-rex.svg', 'unicorn.svg', 'video-game.svg']

const iconArrs = ['android.svg', 'bag.svg', 'backpack.svg', 'bell.svg', 'bird.svg',
'bowling.svg', 'box.svg', 'briefcase.svg', 'brush.svg', 'calculator.svg', 'calendar.svg',
'camera.svg', 'camera2.svg', 'car.svg', 'card.svg', 'certificate.svg', 'chair.svg',
'chart.svg', 'chemistry.svg', 'clipboard.svg', 'clock.svg', 'color.svg', 'compass.svg',
'cone.svg', 'converse.svg', 'cup.svg', 'dialog.svg', 'diamond.svg', 'donut.svg',
'earth.svg', 'eggs.svg', 'eraser.svg', 'eye.svg', 'folder.svg', 'gamepad.svg',
'gift.svg', 'girl.svg', 'snowglobe.svg', 'headphones.svg', 'heart.svg',
'help.svg', 'illustrator.svg', 'ipad.svg', 'key.svg', 'letter.svg', 'lock.svg',
'macbook.svg', 'magic hat.svg', 'map.svg', 'medal.svg', 'mind.svg', 'money.svg',
'monitor.svg', 'notepad.svg', 'off.svg', 'pantone.svg', 'paper.svg', 'passport.svg',
'patch.svg', 'pencil.svg', 'pictures.svg', 'pig.svg', 'plane.svg', 'printer.svg',
'rocket.svg', 'sale.svg', 'search.svg', 'settings.svg', 'shield.svg', 'shirt.svg',
'sim.svg', 'site.svg', 'speaker.svg', 'store.svg', 'study hat.svg', 'theatre.svg',
'thermometer.svg', 'target.svg', 'trash.svg', 'twitter.svg', 'UFO.svg', 'umbrella.svg',
'user.svg', 'video.svg', 'wallet.svg', 'weather.svg', 'webcam.svg', 'youtube.svg'


]
// const ConsoleLog = ({ children }) => {
//   console.log(children);
//   return false;
//   };

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
        </form>
        <button className='float-right' onClick={() => {
          var value = this.state.cards
            this.getUnique(iconArrs, value);
          }} >
          Get images
        </button>

        <br />
        <br />

        <div style={{textAlign:"center"}}>
        {this.state.randArr.map(item => (
            <span key={item}>
            <img className='icon' src={'/SVG-new/'+item} alt='card icon' />
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
    // console.log(ret)
  }
}

export default Icons;
