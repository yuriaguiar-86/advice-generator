import './container.css';

const Container = (props) => {
    return (
        <main className='container_main'>
            { props.children }
        </main>
    );
}

export default Container;