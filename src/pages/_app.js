import { Head } from 'next/document';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
      
      </Head> */}
      <Theme>
        <title>My Portfolio</title>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 