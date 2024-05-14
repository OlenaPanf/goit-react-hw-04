

export default function ImageCard({
  card: { likes, description, user : {name} , urls : {regular, small} },
}) {
  
  return (
      <div>
          <img
             src={regular}
             alt={small}
             width="360"
             height="200"
          />
          <p>{description}</p>
          <p>{name}</p>
          <p>{likes}</p>
</div>
  );
}

