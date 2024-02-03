import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar fixed inset-x-0 top-0 bg-white dark:bg-gray-950 z-[10] h-fit border-b border-zinc-300  py-2 ">
      <div className="navbar-container flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <div className="navbar-left">
          <Link href={'/'} className="flex items-center gap-2">
            <p className="px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block">
              Code Challenge
            </p>
          </Link>
        </div>
        <div className="navbar-right flex items-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
