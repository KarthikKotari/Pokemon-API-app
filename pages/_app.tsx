import '../styles/globals.css';
import type { AppProps } from 'next/app';
import PokeApolloProvider from '../graphql/apollo';
import 'bootstrap/dist/css/bootstrap.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PokeApolloProvider>
      <Component {...pageProps} />
    </PokeApolloProvider>
  );
}

export default MyApp;
