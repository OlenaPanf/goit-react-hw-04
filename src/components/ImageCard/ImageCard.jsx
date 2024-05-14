

export default function ImageCard({
  card: { likes, user: {name}, urls: {small} },
}) {
  
  return (
      <div>
          <img
             src={small}
             alt=""
             width="360"
             height="200"
          />
          <p>{name}</p>
          <p>{likes}</p>

</div>
  );
}

