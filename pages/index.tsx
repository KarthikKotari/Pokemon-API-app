import type { NextPage } from 'next';
import { useGetPokemonsQuery } from '../generated';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const { data, error, loading } = useGetPokemonsQuery();

  if (loading) {
    <p>Loading....</p>;
  }

  if (error) {
    <p>Error = {error.message}</p>;
  }

  return (
    <div className={styles.container}>
      {/* Add Error handling */}

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
                    <h5 className="card-title">
                      {pokemon.id} : {pokemon.name}
                    </h5>
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
                      {pokemon.pokemon_v2_pokemonmoves?.map((move) => {
                        return <li> {move.pokemon_v2_move?.name}</li>;
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
