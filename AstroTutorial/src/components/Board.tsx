import React from 'react';
import { Background, ReactFlow } from '@xyflow/react';
import { Handle, Position } from 'reactflow'; // Importar Handle para conexiones

const defaultNodes = [
  {
    id: "1",
    position: { x: 0, y: 0 },
    type: "default",  // Nodo predeterminado
    data: {
      label: "Products",
      schema: [
        { title: "id", type: "uuid" },
        { title: "name", type: "varchar" },
        { title: "description", type: "varchar" },
        { title: "warehouse_id", type: "uuid" },
        { title: "supplier_id", type: "uuid" },
        { title: "price", type: "money" },
        { title: "quantity", type: "int4" },
      ],
    },
  },
  {
    id: "2",
    position: { x: 350, y: -100 },
    type: "default",  // Nodo predeterminado
    data: {
      label: "Warehouses",
      schema: [
        { title: "id", type: "uuid" },
        { title: "name", type: "varchar" },
        { title: "address", type: "varchar" },
        { title: "capacity", type: "int4" },
      ],
    },
  },
  {
    id: "3",
    position: { x: 350, y: 200 },
    type: "default",  // Nodo predeterminado
    data: {
      label: "Suppliers",
      schema: [
        { title: "id", type: "uuid" },
        { title: "name", type: "varchar" },
        { title: "description", type: "varchar" },
        { title: "country", type: "varchar" },
      ],
    },
  },
];

const defaultEdges = [
  {
    id: "products-warehouses",
    source: "1",
    target: "2",
    sourceHandle: "warehouse_id",
    targetHandle: "id",
  },
  {
    id: "products-suppliers",
    source: "1",
    target: "3",
    sourceHandle: "supplier_id",
    targetHandle: "id",
  },
];

export default function Board() {
  return (
    <div className="h-full w-full">
      <ReactFlow
        nodes={defaultNodes}  // Usar los nodos estándar
        edges={defaultEdges}  // Conexiones entre los nodos
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
