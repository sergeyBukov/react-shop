import './singin.scss';
import classNames from 'classnames';

const SingIn = ({ active }) => {

    return (
        <div className={classNames(active ? `${'singIn'} ${'singIn--active'}` : 'singIn')}>
            <div className={classNames('singIn__content', 'container')}>
                sing in
            </div>
        </div>
    )
}

export default SingIn;