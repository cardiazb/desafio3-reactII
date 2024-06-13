import Inicio from "../components/Inicio";
import Portada from "../assets/img/hero-img.png";

const Home = () => {
  return (
    <div>
      <h1>Bienvenido Maestro Pokemon</h1>
      <img src={Portada} alt="Fotografía de todos los pokemones"></img>
    </div>
  );
};

export default Home;
