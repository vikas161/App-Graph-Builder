import TopBar from "./layout/TopBar";
import LeftRail from "./layout/LeftRail";
import RightPanel from "./layout/RightPanel";
import FlowCanvas from "./canvas/FlowCanvas";

export default function App() {
  return (
    <div className="h-full flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <LeftRail />

        <div className="flex-1 relative">
          <FlowCanvas />
        </div>

        <RightPanel />
      </div>
    </div>
  );
}
