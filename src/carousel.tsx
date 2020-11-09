import { Photo } from '@frontendmasters/pet';
import React from 'react';

interface IProps {
  media: Photo[];
}

interface IState {
  active: number;
  photos: string[];
}

class Carousel extends React.Component {
  public state = {
    photos: [],
    active: 0
  }
  public handleIndexClick = (e: React.MouseEvent<HTMLElement>) => {
    if (!(e?.target instanceof HTMLElement)) {
      return;
    }
    if (e.target?.dataset?.index) {
      this.setState({
        active: +e.target.dataset.index
      })
    }
  }

  public static getDerivedStateFromProps({ media }: IProps) {
    let photos = ['http://placecorgi.com/600/600'];
    if (media.length) {
      photos = media.map(({ large }) => large)
    }
    return { photos };
  }

  render() {
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