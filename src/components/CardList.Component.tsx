import Card from './Card.Component';
import { StarWarsPerson } from '../types/starWars';

interface CardListProps {
  people: StarWarsPerson[];
}

const CardList = ({ people }: CardListProps) => {
  return (
    <div className="flex flex-wrap justify-center mt-4 h-full">
      {people.map((person) => (
        <Card key={person.name} person={person} />
      ))}
    </div>
  );
};

export default CardList;
