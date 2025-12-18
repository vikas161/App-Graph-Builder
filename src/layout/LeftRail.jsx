import { FaGithub, FaNodeJs } from "react-icons/fa";
import {
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
} from "react-icons/si";

const icons = [
  { Icon: FaGithub, bg: "bg-[#0D1117]" },
  { Icon: SiPostgresql, bg: "bg-[#336791]" },
  { Icon: SiMongodb, bg: "bg-[#023430]" },
  { Icon: FaNodeJs, bg: "bg-[#215732]" },
  { Icon: SiMysql, bg: "bg-[#0B3A42]" },
  { Icon: SiRedis, bg: "bg-[#3A0B0B]" },
];

export default function LeftRail() {
  return (
    <div className="w-14 bg-black border-r border-neutral-800 flex flex-col justify-center items-center py-4 gap-4">
      {icons.map(({ Icon, bg }, idx) => (
        <div
          key={idx}
          className={`
            w-9 h-9
            flex items-center justify-center
            rounded-lg
            ${bg}
            cursor-pointer
            border border-neutral-700
            hover:scale-105 hover:border-neutral-500
            transition
          `}
        >
          <Icon size={18} color="white" />
        </div>
      ))}
    </div>
  );
}
