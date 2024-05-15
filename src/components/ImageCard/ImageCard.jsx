import css from './ImageCard.module.css'

export default function ImageCard({
  card: { urls: {small} },
}) {
  
  return (
      <div className={css.container}>
      <img
        className={css.img}
             src={small}
             alt=""
             width="360"
             height="200"
             
          />
      </div>
  );
}

