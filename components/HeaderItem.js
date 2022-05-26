function HeaderItem({ titlulCategoriei, Icon }) {
  return (
    <div className='flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-purple-400 active:text-purple-500'>
      <Icon className='h-8 mb-1 group-hover:animate-bounce' />
      <p className='opacity-0 group-hover:opacity-100 tracking-wider'>{titlulCategoriei}</p>
    </div>
  );
}

export default HeaderItem;
