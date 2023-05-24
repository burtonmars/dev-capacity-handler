import Navbar from './components/navbar/navbar';
import style from './styles/page.module.css';

export default function Home() {
  return (
    <main className={style.home__main}>
      <Navbar />
      <div className={style.home__content}>
        <div className={style.home__showDev}>
          <h2>Name:</h2>
          <h2>level:</h2>
        </div>
      </div>
    </main>
  )
};
