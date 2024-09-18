// outputNode.js
import {Template} from './template'
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const DualDisplayNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('display-', 'display_'));
  const [displayType, setDisplayType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setDisplayType(e.target.value);
  };

  return(
    <Template
    id={id}
    title="Dual Display"
    sub="Name:"
    lefthandle= {2}
    righthandle ={0}
    ins={1}
    values ={[currName,displayType]}
    valueChange={[handleNameChange,handleTypeChange]}
    />
  )

}
