

import { Handle, Position } from "@xyflow/react";

const STATUS = {
  success: "bg-green-900 text-green-400",
  error: "bg-red-900 text-red-400",
};





export default function ServiceNode({ data, selected }) {
  return (
    <div
      className={`w-[300px] rounded-2xl bg-gradient-to-b from-[#0f0f0f] to-black
      border ${selected ? "border-blue-500" : "border-[#1f1f1f]"}
      shadow-xl p-4`}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center">
           
                icon
          </div>
          <span className="font-semibold">{data.label}</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs px-2 py-1 rounded bg-green-900 text-green-400">
            $0.03/HR
          </span>
          ⚙️
        </div>
      </div>

      {/* Metrics */}
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>0.02</span>
        <span>0.05 GB</span>
        <span>10.00 GB</span>
        <span>1</span>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-[#111] rounded-lg p-1 mb-3 text-xs">
        {["CPU", "Memory", "Disk", "Region"].map((t, i) => (
          <div
            key={t}
            className={`flex-1 text-center py-1 rounded ${
              i === 0 ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            {t}
          </div>
        ))}
      </div>

      {/* Slider */}
      <div className="relative mb-3">
        <div className="h-1 rounded bg-gradient-to-r from-blue-500 via-green-500 to-red-500" />
        <div className="absolute top-[-4px] left-[70%] w-3 h-3 bg-white rounded-full" />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center">
        <span
          className={`text-xs px-2 py-1 rounded ${
            STATUS[data.status]
          }`}
        >
          {data.status === "success" ? "● Success" : "● Error"}
        </span>

        <span className="text-orange-400 text-sm font-semibold">
          aws
        </span>
      </div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
