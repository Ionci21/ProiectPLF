import Thumbnail from './Thumbnail';

function Results({ results: rezultatePrimite }) {
  return (
    <div className='px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
      {rezultatePrimite.map((rezultatCurent) => (
        <Thumbnail key={rezultatCurent.id} result={rezultatCurent} />
      ))}
    </div>
  );
}

export default Results;
