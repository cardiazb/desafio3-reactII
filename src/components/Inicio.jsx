import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoadingGif from "../assets/img/Loading_2.gif";
import axios from "axios";

const Inicio = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(true);
  const [Loading, setLoading] = useState(true);

  const [options, setOptions] = useState([]);
  const PokemonApiURL = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";
  useEffect(() => {
    async function getAllPokemons() {
      const { data } = await axios.get(PokemonApiURL);

      const results = [];
      data.results.forEach((element) => {
        results.push({
          key: element.name,
          value: element.name,
        });
      });

      setOptions([{ key: "Seleccione un Personaje", value: "" }, ...results]);
      setLoading(false);
    }
    getAllPokemons();
  }, []);

  const navigate = useNavigate();
  const irAPersonajes = () => {
    error
      ? alert("Debe Seleccionar un personaje")
      : navigate(`/personajes/${name}`);
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    if (event.target.value == "") {
      setName("");
      setError(true);
    } else {
      setName(event.target.value);
      setError(false);
    }
  };

  return (
    <div>
      {Loading ? (
        <div>
          <img src={LoadingGif}></img>
        </div>
      ) : (
        <div>
          <select onChange={handleChange}>
            {options.map((option) => {
              return (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              );
            })}
          </select>
          <div>
            <button className="Button" onClick={irAPersonajes}>
              Ver Detalle
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inicio;
