import {useState} from 'react';
import SliderHook from "./Slider";
import Form from "./Form";
import './App.css';

function App() {
    const [slider, setSlider] = useState(true);

    return (
        <>
            <button onClick={() => setSlider(!slider)}>Remove slider</button>
            {
                slider ? <SliderHook/> : null
            }
            <Form/>
        </>
    );
}

export default App;
