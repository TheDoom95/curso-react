import React, { useState } from 'react';
import { Link } from 'react-router-dom';

type Pokemon = {
    name: string;
    url: string;
}

const Fetch = () => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);

    const getPokemons = async () => {
        //fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')
        //    .then((response: Response) => response.json())
        //    .then(res => setPokemons(res.results))
        //    .catch(error => console.error(error));

        try {
            const response = await (await fetch('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200')).json();
            setPokemons(response.results);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="p-2 mt-2">
            <Link className="bg-blue-500 ml-4 p-2 text-white mb-4" to="/">Ir a la home</Link>

            {
                pokemons.map((pokemon: Pokemon, index: number) => (
                    <div key={pokemon.name + index}>
                        <h2>{pokemon.name}</h2>
                        <p>{pokemon.url}</p>
                    </div>
                ))
            }

            <button onClick={getPokemons}>Listar pokemons</button>
        </div>
    );
};

export default Fetch;
