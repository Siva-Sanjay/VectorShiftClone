// inputNode.js
import { Template } from './template';
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode2 = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput2-', 'loc2_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <Template
      id={id}
      title="Input2"
      sub="Location:"
      lefthandle={0}
      righthandle={1}
      ins={2}
      values={[currName, inputType]}
      valueChange={[handleNameChange, handleTypeChange]}
    />
  )



}
