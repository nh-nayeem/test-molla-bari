import React from 'react';
import ReactFlow, { Controls, Background, MarkerType} from 'reactflow';
import 'reactflow/dist/style.css';
// import './custom-style.css';
import persons from './persons.json';

const nodes = persons.map((item) => ({
  id: item.id,
  position: item.position,
  data: item.data
}));
const edges = persons.map((item) => ({
  id: item.data["father id"]+"-"+item.id,
  source: item.data["father id"],
  target: item.id,
  type: "step",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20, height: 20
  },
}));

function FamilyTree() {
    
    return (
      <div style={{ height: '100%' }}>
      <ReactFlow nodes={nodes} edges={edges}>
        <Background />
        <Controls />
      </ReactFlow>
      </div>
    );
  };
  
  export default FamilyTree;
