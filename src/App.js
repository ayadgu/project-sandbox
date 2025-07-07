import "./App.css";
import EsignatureApp from "./projects/01-e-signature-app/EsignatureApp";
import RandomizeColor from "./projects/02-color-project/RandomizeColor";
import LikePhotoApp from "./projects/03-like-my-photo/LikePhotoApp";
import TestimonialsApp from "./projects/04-testimonials-app/TestimonialsApp";
import AlertApp from "./projects/05-alert/AlertApp";
import TemperatureApp from "./projects/06-temperature/TemperatureApp";
import DarkMode from "./projects/07-DarkMode/DarkMode";

function App() {
  return (
    <div className="App">
      {/* <EsignatureApp /> */}
      {/* <RandomizeColor /> */}
      {/* <LikePhotoApp /> */}
      {/* <TestimonialsApp /> */}
      {/* <AlertApp /> */}
      {/* <TemperatureApp /> */}
      {/* Uncomment the component you want to view */}
      <DarkMode />
    </div>
  );
}

export default App;
