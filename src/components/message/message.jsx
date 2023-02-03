import './message.css';

import dice from '../../images/icon-dice.svg';
import desktop from '../../images/pattern-divider-desktop.svg';
import mobile from '../../images/pattern-divider-mobile.svg';
import ReactLoading from 'react-loading';

const Message = ({ id, advice, loading, handleClick }) => {
    return (
        <section className='container_data'>
            { 
                loading ? 

                <div className='container_message'>
                    <p><small>Advice #{ id }</small></p>
                    <h3>{ advice }</h3>
                </div> : 

                <h3 className='loading_message'>
                    Wainting for message <ReactLoading color='#cee3e9' height={'20%'} width={'20%'} />
                </h3>
            }

            <img src={ desktop } alt="Pattern divider" className='desktop' />
            <img src={ mobile } alt="Pattern divider" className='mobile' />
            <img title='New advice' src={ dice } alt="Pattern divider" className='pattern_dice' onClick={ handleClick } />
        </section> 
    );
}

export default Message;