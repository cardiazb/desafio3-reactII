import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import LoadingGif from "../assets/img/Loading_2.gif";
import { MdOutlineArrowBackIos } from "react-icons/md";

const Pokemon = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [options, setOptions] = useState({
    tipo: "",
    hp: "",
    attack: "",
    defense: "",
    special_attack: "",
    speed: "",
  });
  const [foto, setFoto] = useState();
  const [Loading, setLoading] = useState(true);
  const PokemonDetailsURL = "https://pokeapi.co/api/v2/pokemon/" + name;
  console.log(PokemonDetailsURL);
  async function getPokemons() {
    try {
      const { data } = await axios.get(PokemonDetailsURL);
      setFoto(data.sprites.other.dream_world.front_default);
      setOptions({
        tipo: data.types[0].type.name,
        hp: data.stats[0].base_stat,
        attack: data.stats[1].base_stat,
        defense: data.stats[2].base_stat,
        special_attack: data.stats[3].base_stat,
        speed: data.stats[5].base_stat,
      });

      setLoading(false);
    } catch {
      navigate("/error");
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div>
      {Loading ? (
        <div>
          <img src={LoadingGif}></img>
        </div>
      ) : (
        <div className="Card">
          <div className="imagen">
            <img className="img-pokemon" src={foto} alt={name}></img>
          </div>
          <div className="detalle">
            <h2>{name}</h2>
            <ul>
              <li>hp: {options.hp}</li>
              <li>attack: {options.attack}</li>
              <li>defense: {options.defense}</li>
              <li>special attack: {options.special_attack}</li>
              <li>speed: {options.speed}</li>
            </ul>
            <h4>Tipo: {options.tipo}</h4>
          </div>
          <div>
            <button onClick={() => navigate(-1)}>
              <MdOutlineArrowBackIos />
              Volver
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Pokemon;
