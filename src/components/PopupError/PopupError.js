import React from 'react';
import './PopupError.css';
import error from '../../images/error.svg';

function PopupError({ popupError, closePopupError }) {
    return (
        <div className={`popup ${popupError && 'popup_opened'}`}>
            <div className="popup__container">
                <button type="button" className="popup__close popup__close_for_profile"
                    onClick={closePopupError}></button>
                <img className={"popup__img"} src={error} alt='error cross' />
                <h2 className={`popup__title`}>Что-то пошло не так...</h2>
            </div>
        </div>
    );
};

export default PopupError;