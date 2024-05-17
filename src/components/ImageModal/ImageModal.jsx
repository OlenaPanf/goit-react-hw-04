// import ReactModal from 'react-modal';

// export default function ImageModal({ isOpen, likes, user: {name}, urls: {regular}, onClose }) {
//   return (
//     <ReactModal isOpen={isOpen} onRequestClose={onClose}>
//       <img src={regular} alt="large image" width="1080" height="600" />
//       <p><span>Author</span><span>{name}</span></p>
//       <p><span>Likes</span><span>{likes}</span></p>
//       <button onClick={onClose}>Close</button>
//     </ReactModal>
//   );
// }

// Модальне вікно
// Компонент ImageModal повинен рендеритися всередині 
// компоненту App та отримувати через пропси з App всі 
// необхідні дані та функції.
// Під час натискання на зображення галереї повинно 
// відкриватися модальне вікно ImageModal з темним фоном,
// яке відображатиме зображення у великому форматі.
// Модальне вікно має бути налаштовано таким чином,
// щоб воно закривалося при натисканні на клавішу ESC або 
// при кліку за його межами.Для реалізації функціональності
// модального вікна використовуй бібліотеку React Modal.