import React from 'react';
import ReactFlow, { Background, Handle, Position } from 'reactflow'; // Importar ReactFlow y Handle

import 'reactflow/dist/style.css';  // Asegúrate de importar los estilos de ReactFlow

const defaultNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    type: 'default',
    data: {
      label: 'Products',
      schema: [
        { title: 'id', type: 'uuid' },
        { title: 'name', type: 'varchar' },
        { title: 'description', type: 'varchar' },
        { title: 'warehouse_id', type: 'uuid' },
        { title: 'supplier_id', type: 'uuid' },
        { title: 'price', type: 'money' },
        { title: 'quantity', type: 'int4' },
      ],
    },
    // Renderizado del nodo con Handles para las conexiones
    render: (
      <div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
        <div>{'Products'}</div>
        <Handle type="source" position={Position.Right} id="warehouse_id" />
        <Handle type="source" position={Position.Right} id="supplier_id" />
      </div>
    ),
  },
  {
    id: '2',
    position: { x: 350, y: -100 },
    type: 'default',
    data: {
      label: 'Warehouses',
      schema: [
        { title: 'id', type: 'uuid' },
        { title: 'name', type: 'varchar' },
        { title: 'address', type: 'varchar' },
        { title: 'capacity', type: 'int4' },
      ],
    },
    render: (
      <div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
        <div>{'Warehouses'}</div>
        <Handle type="target" position={Position.Left} id="id" />
      </div>
    ),
  },
  {
    id: '3',
    position: { x: 350, y: 200 },
    type: 'default',
    data: {
      label: 'Suppliers',
      schema: [
        { title: 'id', type: 'uuid' },
        { title: 'name', type: 'varchar' },
        { title: 'description', type: 'varchar' },
        { title: 'country', type: 'varchar' },
      ],
    },
    render: (
      <div style={{ padding: '10px', border: '1px solid black', borderRadius: '5px' }}>
        <div>{'Suppliers'}</div>
        <Handle type="target" position={Position.Left} id="id" />
      </div>
    ),
  },
];

const defaultEdges = [
  {
    id: 'products-warehouses',
    source: '1',
    target: '2',
    sourceHandle: 'warehouse_id',
    targetHandle: 'id',
  },
  {
    id: 'products-suppliers',
    source: '1',
    target: '3',
    sourceHandle: 'supplier_id',
    targetHandle: 'id',
  },
];

export default function Board() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <ReactFlow
        nodes={defaultNodes.map((node) => ({
          ...node,
          data: { label: node.data.label }, // Asegúrate de que el data del nodo esté correctamente mapeado
          // Usar la propiedad "render" para el contenido del nodo
          children: node.render,
        }))}
        edges={defaultEdges}
        fitView
      >
        <Background />
      </ReactFlow>
    </div>
  );
}
