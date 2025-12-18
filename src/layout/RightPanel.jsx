
import { useAppStore } from "../store";
import ServiceInspector from "../inspector/ServiceInspector";

const apps = [
  "supertokens-golang",
  "supertokens-java",
  "supertokens-python",
  "supertokens-ruby",
  "supertokens-go",
];

export default function RightPanel() {
  const selectedNodeId = useAppStore((s) => s.selectedNodeId);

  return (
    <div className="w-80 bg-black border-l border-[#1f1f1f] p-4">
      <h2 className="text-sm font-semibold mb-3">Application</h2>

      <input
        placeholder="Search..."
        className="w-full mb-3 px-3 py-2 text-sm rounded bg-[#111] border border-[#1f1f1f]"
      />

      <div className="space-y-1 mb-4">
        {apps.map((a) => (
          <div
            key={a}
            className="flex items-center justify-between px-3 py-2 rounded bg-[#0f0f0f] hover:bg-[#161616] cursor-pointer"
          >
            <span className="text-sm">{a}</span>
            ▶
          </div>
        ))}
      </div>

      {selectedNodeId && <ServiceInspector />}
    </div>
  );
}
