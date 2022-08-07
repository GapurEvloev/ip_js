import { useCallback, useState } from 'react';
import Form from './components/Form';
import './App.css';
import dataContext from './context';


const {Provider} = dataContext;

function App() {
    const [data, setData] = useState({
        mail: "name@example.com",
        text: 'some text',
        forceChangeMail: forceChangeMail,
    });

    const onLog = useCallback(() => {
        console.log("wow");
    }, []);

    function forceChangeMail() {
        setData({...data, mail: "test@example.com"})
    };

    return (
        <Provider value={data}>
            <Form text={data.text} onLog={onLog}/>
            <button 
                onClick={() => setData({
                    ...data,
                    mail: "name@example.com",
                    text: 'some text'
                })}>
                Click me
            </button>
        </Provider>
    );
}

export default App;
