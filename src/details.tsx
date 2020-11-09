import React, { lazy } from 'react'
import pet, { Photo } from '@frontendmasters/pet';
import Carousel from './carousel';
import ErrorBoundary from './errorboundary';
import ThemeContext from './context/themeContext';
import { navigate, RouteComponentProps } from '@reach/router';
// import Modal from './modals/modal'

interface IState {
  loading: boolean;
  showModal: boolean;
  name: string;
  animal: string; url: string; location: string; description: string; media: Photo[]; breed: string
}

const Modal = lazy(() => import('./modals/modal'));

class Details extends React.Component<RouteComponentProps<{ id: string }>> {
  public state: IState = {
    loading: true, showModal: false,
    name: '', animal: '', url: "", location: '', description: '', media: [] as any[], breed: ''
  };
  componentDidMount() {
    if (!this.props.id) {
      navigate("/");
      return;
    }
    pet.animal(+this.props.id).then(({ animal }) => {
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

export default function DetailsWithErrorBoundaries(props: RouteComponentProps<{ id: string }>) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  )
};