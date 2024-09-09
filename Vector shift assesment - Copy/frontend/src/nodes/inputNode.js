// inputNode.js
import { Template } from './template';
import { useState } from 'react';
import { Handle, Position } from 'reactflow';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return(
    <Template
    id={id}
    title="Input"
    sub="Name:"
    lefthandle= {0}
    righthandle ={1}
    ins={2}
    values ={[currName,inputType]}
    valueChange={[handleNameChange,handleTypeChange]}
    />
  )



  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Input</span>
  //     </div>
  //     <div>
  //       <label>
  //         Name:
  //         <input 
  //           type="text" 
  //           value={currName} 
  //           onChange={handleNameChange} 
  //         />
  //       </label>
  //       <label>
  //         Type:
  //         <select value={inputType} onChange={handleTypeChange}>
  //           <option value="Text">Text</option>
  //           <option value="File">File</option>
  //         </select>
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-value`}
  //     />
  //   </div>
  // );
}
