import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      banner: [
        {
          id: 0,
          title: 'Awesome City',
          img: '../assets/images/img1.jpg',
          name: 'city',
        },
        {
          id: 1,
          title: 'Awesome Forest',
          img: '../assets/images/img2.jpg',
          name: 'forest',
        },
        {
          id: 2,
          title: 'Awesome Street',
          img: '../assets/images/img3.jpg',
          name: 'street',
        },
        {
          id: 3,
          title: 'Awesome Tree',
          img: '../assets/images/img4.jpg',
          name: 'tree',
        }
      ],
    };
  };

  slideIndex = 0;

  slide = (n) => {
    this.slideIndex = this.slideIndex === 0 && n < 0 ? this.state.banner.length - 1 : (this.slideIndex + n) % this.state.banner.length;
    this.forceUpdate();
  }

  pushSlide = (key) => {
    this.slideIndex = key;
    this.forceUpdate();
  }

  render() {
    return (
      this.state.banner &&
      <div className="banner-root">
        <div className="banner-block">
          {this.state.banner.map((item, key) => (
            this.slideIndex === key &&
            <div className="banner-item" key={key}>
              <div className="img-block">
                <img src={item.img} alt="" />
              </div>
              <div className="title-block">
                <h1>{item.title}t</h1>
              </div>
            </div>
          ))
          }
          <div className="arr-root">
            <div className="arr-block-left" onClick={() => this.slide(-1)}>
              <span className="fa fa-arrow-left"></span>
            </div>
            <div className="arr-block-right" onClick={() => this.slide(1)}>
              <span className="fa fa-arrow-right"></span>
            </div>
          </div>
          <div className="nav-block">
            {this.state.banner.map((nav, key) => (
              <div
                key={key}
                className={key === this.slideIndex ? "nav-item fa fa-circle" : "nav-item fa fa-circle-o"}
                onClick={() => this.pushSlide(key)}>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Carousel;
