import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Rasm1 from './preschool/1.jpg';
import Rasm2 from './preschool/2.jpg';
import Rasm3 from './preschool/3.jpg';
import Rasm4 from './preschool/4.jpg';
import Rasm5 from './preschool/5.jpg';
import Rasm6 from './preschool/7.jpg';
import Rasm7 from './preschool/8.jpg';
import Rasm8 from './preschool/9.jpg';
import Rasm9 from './preschool/10.jpg';
import Rasm10 from './preschool/11.jpg';
import Rasm11 from './preschool/12.gif';
import Rasm12 from './preschool/14.gif';
import Rasm13 from './preschool/15.jpeg';
import Rasm14 from './preschool/16.jpeg';
import Rasm15 from './preschool/17.jpg';
import Rasm17 from './preschool/18.png';



function App() {

    const images = [
        Rasm1, Rasm2, Rasm3, Rasm4, Rasm5, Rasm6, Rasm7,
        Rasm8, Rasm9, Rasm10, Rasm11, Rasm12, Rasm13,
        Rasm14, Rasm15, Rasm17
    ];

    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    {images.map((rasm, index) => (
                        <div className="col-md-4 mb-3" key={index}>
                            <img
                                src={rasm}
                                alt={`Rasm ${index + 1}`}
                                className="img-fluid"
                                style={{ width: '100%', height: 'auto' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default App;