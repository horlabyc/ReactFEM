import React from 'react';
import Pet from './Pet.jsx';

const Results = ({ pets }) => {
  return (
    <div className="search">
      {pets.length === 0 ? (
        <h1>No pet found</h1>
      ) : (
          pets.map((pet) => (
            <Pet
              key={pet.id}
              animal={pet.type}
              breed={pet.breeds.primary}
              name={pet.name}
              media={pet.photos}
              location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
              id={pet.id}
            />))
        )
      }
    </div>
  )
}

export default Results;