import { StarWarsPerson } from '../types/starWars';

interface CardProps {
  person: StarWarsPerson;
}

const Card = ({ person }: CardProps) => {
  return (
    <div className="bg-bright rounded-lg shadow-md p-6 m-2 w-52 text-dark">
      <h3 className="text-xl font-bold mb-2">{person.name}</h3>
      <div className="text-sm">
        <p className="mb-1">Height: {person.height}cm</p>
        <p className="mb-1">Mass: {person.mass}kg</p>
        <p className="mb-1">Birth Year: {person.birth_year}</p>
      </div>
    </div>
  );
};

export default Card;
