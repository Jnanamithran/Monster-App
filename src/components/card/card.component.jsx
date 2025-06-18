import './card.styles.css';

const Card = ({name, email, id}) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${id}?set=set2`} />
      <h1>{name}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;