import style from './styles/page.module.scss';

import { getDevelopers } from '../app/lib/developers';
import { getStories } from '../app/lib/stories';
import Home from './pages/home';

async function fetchDevelopers() {
  const { developers } = await getDevelopers();
  if (!developers) throw new Error('Failed to fetch developers');
  return developers
}

async function fetchStories() {
  const { stories } = await getStories();
  if (!stories) throw new Error('Failed to fetch stories');
  return stories
}

export default async function Page() {
  const developers = await fetchDevelopers();
  const stories = await fetchStories();

  return (
    <main className={style.page__main}>
      <Home developers={developers} stories={stories}/>
    </main>
  )
};