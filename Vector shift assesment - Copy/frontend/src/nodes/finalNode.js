// outputNode.js
import {Template} from './template'
import { useState } from 'react';

export const FinalNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.outputName || id.replace('final-', 'final_'));
  const [outputType, setOutputType] = useState(data.outputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setOutputType(e.target.value);
  };

  return(
    <Template
    id={id}
    title="Final"
    sub="Name:"
    lefthandle= {1}
    righthandle ={0}
    ins={2}
    values ={[currName,outputType]}
    valueChange={[handleNameChange,handleTypeChange]}
    />
  )


}
