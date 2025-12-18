import { ChevronDown, MoreHorizontal, Share2, Moon } from "lucide-react";

export default function TopBar() {
  return (
    <div className="h-14 px-4 flex items-center justify-between border-b border-neutral-800 bg-black">
      {/* Left section */}
      <div className="flex items-center gap-3">
        {/* Logo */}
        <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
          <div className="w-4 h-4 bg-black rotate-45" />
        </div>

        {/* App selector */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-neutral-900 border border-neutral-800">
          <span className="text-sm font-medium">supertokens-golang</span>
          <ChevronDown size={16} className="text-neutral-400" />
        </div>

        <MoreHorizontal size={18} className="text-neutral-400" />
      </div>

      {/* Right section */}
      <div className="flex items-center gap-2">
        <button className="w-9 h-9 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800">
          <Share2 size={16} />
        </button>

        <button className="w-9 h-9 rounded-md bg-neutral-900 border border-neutral-800 flex items-center justify-center hover:bg-neutral-800">
          <Moon size={16} />
        </button>

        {/* Profile */}
        <div className="w-8 h-8 rounded-full overflow-hidden border border-neutral-700">
          <img
            src="https://i.pravatar.cc/100"
            alt="user"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
