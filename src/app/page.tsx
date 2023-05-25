import Navbar from './components/navbar';
import Header from './components/header';
import style from './styles/page.module.css';

interface Data {
}

export default function Home() {
  return (
    <main className={style.home__main}>
      <Header />
      <Navbar />
    </main>
  )
};
