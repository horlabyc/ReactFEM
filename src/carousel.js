import React from 'react';

class Carousel extends React.Component {
  state = {
    photos: [],
    active: 0
  }
  handleIndexClick = (e) => {
    this.setState({
      active: +e.target.dataset.index
    })
  }

  static getDerivedStateFromProps({ media }) {
    let photos = ['http://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large)
    }
    return { photos };
  }

  render() {
    console.log(this.state)
    const { photos, active } = this.state;
    return (
      <div className="carousel">
        <img src={photos[active]} alt="animal" />
        <div className="carousel-smaller">
          {photos.map((photo, index) => (
            // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
            <img
              src={photo}
              key={photo}
              onClick={this.handleIndexClick}
              onKeyDown={this.handleIndexClick}
              data-index={index}
              className={index === active ? "active" : ""}
              alt="animal-thumbnail"
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;