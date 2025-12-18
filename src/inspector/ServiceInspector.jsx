import { useState } from "react";
import { useAppStore } from "../store";

export default function ServiceInspector() {
  const tab = useAppStore((s) => s.activeTab);
  const setTab = useAppStore((s) => s.setActiveTab);
  const [value, setValue] = useState(20);

  return (
    <div className="mt-4 bg-[#0f0f0f] border border-[#1f1f1f] rounded-xl p-4">
      <div className="flex gap-1 bg-[#111] rounded-lg p-1 mb-4 text-xs">
        {["cpu", "memory"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-1 rounded ${
              tab === t ? "bg-white text-black" : "text-gray-400"
            }`}
          >
            {t.toUpperCase()}
          </button>
        ))}
      </div>

      <label className="text-xs text-gray-400">Value</label>

      <input
        type="range"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full my-2"
      />

      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full px-2 py-1 rounded bg-black border border-[#1f1f1f]"
      />
    </div>
  );
}
