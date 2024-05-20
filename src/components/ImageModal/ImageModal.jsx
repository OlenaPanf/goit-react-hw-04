import ReactModal from 'react-modal';

export default function ImageModal({ isOpen, likes, user: { name }, urls: { regular }, onClose }) {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)'
        },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)'
        }
      }}
    >
      <img src={regular} alt="large image" width="1080" height="600" />
      <p><span>Author: </span><span>{name}</span></p>
      <p><span>Likes: </span><span>{likes}</span></p>
    </ReactModal>
  );
}