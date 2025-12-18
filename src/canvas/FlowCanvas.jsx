import { useCallback } from "react";
import {
  ReactFlow,
  Background,
  BackgroundVariant,
  useNodesState,
  useEdgesState,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { useAppStore } from "../store";
import ServiceNode from "./ServiceNode";

const nodeTypes = { service: ServiceNode };

const initialNodes = [
  {
    id: "1",
    type: "service",
    position: { x: 100, y: 100 },
    data: { label: "Postgres", status: "success", value: 20 },
  },
  {
    id: "2",
    type: "service",
    position: { x: 400, y: 100 },
    data: { label: "Redis", status: "error", value: 20 },
  },
  {
    id: "3",
    type: "service",
    position: { x: 250, y: 300 },
    data: { label: "MongoDB", status: "error", value: 20 },
  },
];

const initialEdges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
];

export default function FlowCanvas() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges] = useEdgesState(initialEdges);
  const setSelectedNode = useAppStore((s) => s.setSelectedNode);

  const onNodeClick = useCallback((_, node) => {
    setSelectedNode(node.id);
  }, []);

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
      nodeTypes={nodeTypes}
      onNodesChange={onNodesChange}
      onNodeClick={onNodeClick}
      fitView
    >
      <Background variant="dots" gap={20} size={3} color="#1f1f1f" />
    </ReactFlow>
  );
}
