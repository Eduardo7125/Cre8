// components/database-schema-node.tsx
import React from "react";
import { Handle, Position } from "reactflow";

// Define the type for props
interface DatabaseSchemaNodeProps {
  data: {
    label: string;
    schema: Array<{ title: string; type: string }>;
  };
}

export const DatabaseSchemaNode: React.FC<DatabaseSchemaNodeProps> = ({ data }) => {
  return (
    <div className="database-schema-node p-4 border-2 border-gray-300 rounded-md bg-white">
      <div className="text-lg font-semibold mb-2">{data.label}</div>
      <div className="schema-table">
        <table className="w-full table-auto">
          <thead>
            <tr>
              <th className="text-left px-2 py-1">Column</th>
              <th className="text-left px-2 py-1">Type</th>
            </tr>
          </thead>
          <tbody>
            {data.schema.map((column, index) => (
              <tr key={index}>
                <td className="px-2 py-1">{column.title}</td>
                <td className="px-2 py-1">{column.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Handle type="source" position={Position.Right} id="warehouse_id" />
      <Handle type="target" position={Position.Left} id="id" />
    </div>
  );
};
