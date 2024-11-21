import React from 'react';
import { getMovieById } from '../../service/MovieService';
import Player from '../../components/Player';
import Cabecalho from '../../components/Cabecalho';

interface IWatchProps {
  params: Promise<{
    id: any;
  }>;
}

export default async function Watch({ params }: IWatchProps) {
  const movie = await getMovieById((await params).id);

  if (!movie) {
    return (
      <div className='flex h-screen justify-center align-middle'>
        <Cabecalho />
        <main className='flex flex-1 flex-col items-center justify-center px-20 text-center'>
          <h1 className='text-2xl font-bold md:text-4xl lg:text-7xl'>
            Sorry, this movie is not available.
          </h1>
        </main>
      </div>
    );
  }

  return <Player movie={movie} />;
}
