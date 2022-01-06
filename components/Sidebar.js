import {
    HomeIcon,
    SearchIcon,
    LibraryIcon,
    PlusCircleIcon,
  } from "@heroicons/react/outline";

import { HeartIcon, RssIcon } from "@heroicons/react/solid";

function Sidebar() {
    return (
        <div className="text-gray-500 p-5 text-xs lg:text-sm overflow-y-scroll sm:max-w-[12rem] lg:max-w-[15rem] h-screen scrollbar-hide hidden md:inline-flex border-r border-gray-900 pb-36">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="h-5 w-5" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="h-5 w-5" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="h-5 w-5" />
          <p>Your Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="h-5 w-5 text-gray-400" />
          <p>Create Playlist</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="h-5 w-5 text-blue-700" />
          <p>Liked Songs</p>
        </button>

        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="h-5 w-5 text-green-700" />
          <p>Your Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900" />

        
      </div>
    </div>
  );
}

export default Sidebar;