import { useState } from 'react';

import Container from './components/container/container';
import Footer from './components/footer/footer';
import Message from './components/message/message';
import service from './components/service/service.js';

const App = () => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);

    const handleClick = () => {
        setLoading(false);

        setTimeout(() => {
            service
            .get('/advice')
            .then((res) => {
                setData(res.data.slip);
                setLoading(true);
            })
            .catch((err) => console.log(err));

        }, 500);

        clearTimeout();
    }

    return (
        <>
            <Container>
                <Message 
                id={ data?.id } 
                advice={ data?.advice } 
                loading={ loading }
                handleClick={ handleClick } 
                />
            </Container>

            <Footer />
        </>
    );
}

export default App;