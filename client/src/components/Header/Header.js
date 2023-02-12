import './header.scss';
import { useState } from 'react';
import SingIn from '../SingIn/SingIn';
import loginIcon from '../../images/loginIcon.svg';

const Header = () => {

    const [activeModal, setActiveModal] = useState(false);

    return (
        <header className='header'>
            <div className='header__content container'>
                <div>block</div>

                <div>
                    <button className='header-login' onClick={() => setActiveModal(!activeModal)}>
                        <img src={loginIcon} alt="Login" />
                        <span className='header-login__text'>Login</span>
                    </button>
                </div>
            </div>

            <SingIn active={activeModal} setActive={setActiveModal} />
        </header>
    )
}

export default Header;