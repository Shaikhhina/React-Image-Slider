/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;*/


import "./style.css";
import SimpleImageSlider from "react-simple-image-slider";

export default function App() {
    const images = [
        { url: "https://img.freepik.com/free-photo/green-wall-mockup-with-green-plant-shelf3d-rendering_41470-4114.jpg?size=626&ext=jpg&ga=GA1.2.2068660830.1656829885" },
        { url: "https://img.freepik.com/free-photo/cabinet-tv-modern-living-room-with-armchair-plant-concrete-wall-background_41470-4785.jpg?size=626&ext=jpg&ga=GA1.2.2068660830.1656829885" },
        { url: "https://img.freepik.com/free-photo/tv-cabinet-have-white-plaster-wall-living-room-with-armchairminimal-design3d-rendering_41470-4583.jpg?size=626&ext=jpg&ga=GA1.2.2068660830.1656829885" },
        { url: "https://img.freepik.com/free-photo/book-laptop-pencil-clock-wooden-table-library-education-learning-concept_1150-16629.jpg?size=626&ext=jpg&ga=GA1.2.2068660830.1656829885" },
        { url: "https://img.freepik.com/free-photo/front-view-desk-elements-arrangement-with-copy-space_23-2148708018.jpg?size=626&ext=jpg&ga=GA1.2.2068660830.1656829885" },
    ];

    return ( <
        div className = "App" >
        <
        SimpleImageSlider showNavs = "true"
        width = { 1680 }
        height = { 900 }
   
      
        images = { images }
        />   </div >
    );
}


