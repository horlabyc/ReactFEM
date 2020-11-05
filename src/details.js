import React from 'react'
import pet from '@frontendmasters/pet';
import Carousel from './carousel';
import ErrorBoundary from './errorboundary';
import ThemeContext from './context/themeContext';
import { navigate } from '@reach/router';
import Modal from './modals/modal';

class Details extends React.Component {
  state = { loading: true, showModal: false };
  componentDidMount() {
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        url: animal.url,
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false
      })
    }, console.error)
  };

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  adoptPet = () => navigate(this.state.url);

  render() {
    const { name, animal, location, description, breed, loading, media, showModal } = this.state
    if (loading) {
      return <h1>...loading</h1>
    }
    return (
      <div className="details">
        <Carousel media={media} />
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
        <ThemeContext.Consumer>
          {([theme]) => (
            <button style={{ backgroundColor: theme }} onClick={this.toggleModal}>Adopt {name}</button>
          )}
        </ThemeContext.Consumer>
        <p>{description}</p>
        {
          showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adoptPet}>Yes</button>
                  <button onClick={this.toggleModal}>No I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null
        }
      </div>
    );
  }
}

export default function DetailsWithErrorBoundaries(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
};