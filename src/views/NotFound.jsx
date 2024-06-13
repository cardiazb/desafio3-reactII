import Pokebola from "../assets/img/pokebola.png";

const NotFound = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <img src={Pokebola} style={{ width: 200, height: 200 }}></img>
      <h1>Ruta No encontrada</h1>
    </div>
  );
};

export default NotFound;
