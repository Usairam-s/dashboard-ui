import Image from "next/image";
import Link from "next/link";
function Navbar() {
  return (
    <header className="p-4 flex justify-between items-center">
      {/* search */}
      <div className="hidden md:flex items-center gap-4 ring[1.5px] border rounded-2xl px-6 py-2">
        <Image src="/search.png" width={12} height={12} alt="search" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none"
        />
      </div>
      {/* user and icons */}
      <div className="flex items-center gap-2 justify-end w-full">
        <div className="bg-gray-200 p-2 rounded-full">
          <Image src="/message.png" alt="message" height={15} width={15} />
        </div>
        <div className="bg-gray-200 p-2 rounded-full relative">
          <Image src="/announcement.png" alt="message" height={15} width={15} />
          <div className="-top-2 -right-2 w-5 h-5 flex justify-center items-center text-xs absolute rounded-full bg-purple-500 text-white ">
            1
          </div>
        </div>
        <div className=" p-2 flex flex-col rounded-full">
          <span className="text-sm">John Doe</span>
          <span className="text-right text-xs text-gray-400">Admin</span>
        </div>
        <div className=" p-2 ">
          <Image
            src="/avatar.png"
            alt="message"
            height={30}
            width={30}
            className="rounded-full"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
