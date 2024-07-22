import React, { useState } from 'react'; // Import the useState hook

import logo from './logo.svg';
import './App.css';

// Import dishes from their respective files
// import starters from './items/starters';
// import mainCourses from './items/mainCourses';
// import sides from './items/sides';

function App() {
    const mainCourses = ['Idly', 'Dosa', 'Poori', 'Chapati', 'Pongal'];
    const sides = {
        'No sides': ['Pongal'],
        'Coconut Chutney': ['Idly', 'Dosa', 'Poori', 'Chapati', 'Pongal'],
        'Tomato Chutney': ['Idly', 'Dosa'],
        'Coriander Chutney': ['Idly', 'Dosa'],
        'Pudina Chutney': ['Idly', 'Dosa'],
        'Daal Sambar': ['Idly', 'Dosa', 'Pongal'],
        'Kadalai Mavu Sambar': ['Idly', 'Dosa'],
        'Tomato Sambar': ['Idly', 'Dosa'],
        'Potato Sambar': ['Idly', 'Dosa'],
        'Onion Sambar': ['Idly', 'Dosa'],
        'Tomato Pickle': ['Idly', 'Dosa'],
        'Potato Masala': ['Poori'],
        'Channa Masala': ['Poori'],
        'Aloo Matar': ['Chapati'],
        'Vegetable Kurma': ['Chapati', 'Poori'],
        'Paneer Butter Masala': ['Chapati'],
        'Mushroom Masala': ['Chapati', 'Poori'],
        'Mushroom Sambar': ['Idly', 'Dosa'],
    };

    // Function to pick a random item from an array
    const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

    // Function to pick a side and then a compatible main course
    const pickSideAndMainCourse = () => {
        const selectedSide = pickRandom(Object.keys(sides));
        const compatibleMainCourses = sides[selectedSide];
        const selectedMainCourse = pickRandom(compatibleMainCourses);
        return { side: selectedSide, mainCourse: selectedMainCourse };
    };

    // Initial random selection for side and main course
    const initialSelection = pickSideAndMainCourse();

    // State to hold the current selections
    const [selection, setSelection] = useState(initialSelection);

    // Function to generate a new selection
    const generateSelection = () => {
        setSelection(pickSideAndMainCourse());
    };

    return (
        <div className="App">
            <header className="App-header">
                <h2>Today's Meal</h2>
                <p>Main Course: {selection.mainCourse}</p>
                <p>Side: {selection.side}</p>
                <button onClick={generateSelection}>Pick-A-Dinner</button>
            </header>
        </div>
    );
}

export default App;
