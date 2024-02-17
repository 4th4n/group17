
import 'chartjs-adapter-date-fns'; 
import '../styles/globals.css';
import Sidebar from '../component/Sidebar';

export default function App({ Component, pageProps }) {
  return (
    <Sidebar>
      <Component {...pageProps} />
    </Sidebar>
  );
}