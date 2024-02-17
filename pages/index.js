import Head from 'next/head';
import Sidebar from '../component/Sidebar';
import Header from '../component/Header';
import Cards from '../component/Cards';
import Users from '../component/Users';

export default function Home() {
  return (
    <>
      <Head>
        <title>group17</title>

      </Head>
      <main className=''>
        <Header />
         <Cards/>
        <div className='p-4 grid md:grid-cols-3 grid-cols-1 gap-4'>
          <Users/>
          <Sidebar/>
        </div>
      </main>
    </>
  );
}
