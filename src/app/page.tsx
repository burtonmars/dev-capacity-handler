//"use client"
import { useState } from 'react';

import style from './styles/page.module.scss';

import { getDevelopers } from '../app/lib/developers';
import { Developer } from './lib/types';
import Home from './pages/home';

async function fetchDevelopers() {
  const { developers } = await getDevelopers();
  if (!developers) throw new Error('Failed to fetch developers');
  return developers
}

export default async function Page() {
  const developers = await fetchDevelopers();

  return (
    <main className={style.page__main}>
      <Home developers={developers}/>
    </main>
  )
};