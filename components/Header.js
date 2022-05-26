import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline';
import HeaderItem from './HeaderItem';

function Header() {
  return (
    <header className='flex flex-col sm:flex-row m-5 justify-between items-center h-auto'>
      <div className='flex flex-grow justify-center '>
        <HeaderItem titlulCategoriei='ACASĂ' Icon={HomeIcon} />
        <HeaderItem titlulCategoriei='TRENDING' Icon={LightningBoltIcon} />
        <HeaderItem titlulCategoriei='VERIFICATE' Icon={BadgeCheckIcon} />
        <HeaderItem titlulCategoriei='COLECȚII' Icon={CollectionIcon} />
        <HeaderItem titlulCategoriei='CĂUTARE' Icon={SearchIcon} />
        <HeaderItem titlulCategoriei='CONTUL TĂU' Icon={UserIcon} />
      </div>
    </header>
  );
}

export default Header;
