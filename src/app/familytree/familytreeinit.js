import React from 'react';
import ReactFlow, { Controls, Background, MarkerType, Position} from 'reactflow';
import 'reactflow/dist/style.css';
import { SmartStepEdge, SmartStraightEdge, SmartBezierEdge } from '@tisoap/react-flow-smart-edge'
// import './custom-style.css';
import persons from './persons.json';

const nodes = persons.map((item) => ({
  id: item.id,
  position: item.position,
  data: item.data,
  style: item.style,
  sourcePosition: item.sourceposition,
  targetPosition: item.targetposition,
}));

const edges = persons.map((item) => ({
  id: item.data["father id"]+"-"+item.id,
  source: item.data["father id"],
  target: (item.data["father id"] == item.id)? null:item.id,
  type: "smart",
  markerEnd: {
    type: MarkerType.ArrowClosed,
    width: 20, height: 20,
  },
}));
const edgeTypes = {
	smart: SmartStepEdge
}
const proOptions = { hideAttribution: true };
function FamilyTree() {
    return (
      <div style={{ height: '100%' }}>
        
      <ReactFlow nodes={nodes} edges={edges} edgeTypes={edgeTypes} proOptions={proOptions}>
        <Background />
        <Controls />
      </ReactFlow>
      </div>
    );
  };
  
  export default FamilyTree;
