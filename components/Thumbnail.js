import Image from 'next/image';
import { ThumbUpIcon } from '@heroicons/react/outline';

// Thumbnail este folosit pentru a prelua imaginile filmelor din DB-ul celor de la TMDB
function Thumbnail({ result: datePrimite }) {
  const URL = 'https://image.tmdb.org/t/p/original/'; // URL-ul de unde preluăm imaginile
  return (
    <div className='p-2 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50'>
      <Image
        layout='responsive'
        src={`${URL}${datePrimite.backdrop_path || datePrimite.poster_path}` || `${URL}${datePrimite.poster_path}`}
        width={1920}
        height={1080}
      />
      <div className='p-2'>
        <p className='truncate max-w-md'>{datePrimite.overview}</p>
        {/* Titlul filmului */}
        <h2 className='mt-1 text-2xl text-purple-400 transition-all duration-100 ease-in-out group-hover:font-bold'>
          {datePrimite.title || datePrimite.original_name}
        </h2>
        {/* Data apariției, butonul de Like */}
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
          {datePrimite.media_type && `${datePrimite.media_type} •`} {datePrimite.release_date || datePrimite.find_air_date} •{' '}
          <ThumbUpIcon className='h-5 mx-2' /> {datePrimite.vote_count}
        </p>
      </div>
    </div>
  );
}

export default Thumbnail;
