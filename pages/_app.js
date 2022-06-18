import Script from 'next/dist/client/script';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { UserAuthContextProvider } from './context/UserAuthContext';
import '../styles/index.css'
import { store } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {

  return (
    <UserAuthContextProvider>
      <Provider store={store}>
        <Layout>
          <Script src="https://kit.fontawesome.com/845a2c9539.js" />
          <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
          <Script src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </UserAuthContextProvider>
  );
}

export default MyApp
