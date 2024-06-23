import React from 'react';
import ReactFlow, { Controls, Background, MarkerType, getMarkerEnd} from 'reactflow';
import 'reactflow/dist/style.css';
import persons from './persons.json';
import relations from './relations.json';

const nodes = persons;
const initedges = relations;
const edges = initedges.map((item) => ({
  ...item,
  markerEnd: {
    type: MarkerType.ArrowClosed,
    ...item.markerEnd,
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
  }
  
  export default FamilyTree;
