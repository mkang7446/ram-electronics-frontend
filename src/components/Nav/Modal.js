import { Link } from 'react-router-dom';

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return (
    <div id='modal'>
      <div id='modal-open'>
        <div className='modal-appliance-div'>
          <Link className='modal-appliance' to={`/Appliance`}>
            Appliances
          </Link>
        </div>
        <div className='modal-tvs-div'>
          <Link className='modal-tvs' to={`/tv`}>
            TVs
          </Link>
        </div>

        <div className='modal-computers-div'>
          <Link className='modal-computers' to={`/computers`}>
            Computers and Tablets
          </Link>
        </div>
        <div className='modal-smarts-div'>
          <Link className='modal-smarts' to={`/smart`}>
            Smart Products
          </Link>
        </div>
        <div className='modal-gaming-div'>
          <Link className='modal-gaming' to={`/game`}>
            Gaming
          </Link>
        </div>
      </div>
      <div id='modal-close'>
        {' '}
        <button id='modal-close-button' onClick={onClose}>
          X
        </button>
      </div>
    </div>
  );
}
