import Link from 'next/link';

export default function Navbar() {
  return (
    <div className="w-full h-[60px] flex justify-between items-center shadow-md">
      <div className="flex items-center justify-center">
        <div className="px-10">
          <Link href={'/'}>PopPick</Link>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="px-5">
          <button className="bg-blue-400 p-3 px-5 rounded-xl text-white ">
            + New
          </button>
        </div>
        <div className="px-5">
          <Link href={'/auth'}>Sign In</Link>
        </div>
      </div>
    </div>
  );
}
