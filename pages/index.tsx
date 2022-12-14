import type { NextPage } from 'next';
import { useGetPokemonsQuery } from '../generated';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { loading, error, data } = useGetPokemonsQuery();

  if (loading) {
    return <p>Loading....</p>;
  }

  if (error) {
    return <p>Error = {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="container">
          <div className="row">
            {data?.pokemon_v2_pokemon.map((pokemon) => {
              return (
                <div
                  className="card text-white bg-dark mb-3 col-4 d"
                  style={{ width: '20rem' }}
                  key={pokemon.id}
                >
                  <div className="card-body">
                    <div className="row">
                      <h5 className="card-title">
                        {pokemon.id} : {pokemon.name}
                      </h5>
                      <img
                        src={
                          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/' +
                          pokemon.id +
                          '.png'
                        }
                        alt={pokemon.name}
                        className="img"
                      ></img>
                    </div>
                    <h6 className="card-subtitle mb-2 text-muted">
                      {
                        pokemon.pokemon_v2_pokemonspecy
                          ?.pokemon_v2_pokemonhabitat?.name
                      }
                    </h6>

                    <p className="card-text">
                      Height : {pokemon.height} m - Weight : {pokemon.weight} Kg
                    </p>
                    <h6 className="moves-header">Moves</h6>
                    <p className="card-text">
                      {pokemon.pokemon_v2_pokemonmoves?.map((move, i) => {
                        return <li key={i}> {move.pokemon_v2_move?.name}</li>;
                      })}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
