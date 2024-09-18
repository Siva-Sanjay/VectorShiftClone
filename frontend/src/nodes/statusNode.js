// textNode.js
import { Template } from './template';
import { useState } from 'react';

export const StatusNode = ({ id, data }) => {
  const [currText, setCurrText] = useState('Status');

  
  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return(
    <Template
    id={id}
    title="Status"
    sub="Status:"
    lefthandle= {0}
    righthandle ={0}
    ins={1}
    values ={[currText]}
    valueChange={[handleTextChange]}
    />
  )



//original return statemet below

  // return (
  //   <div style={{width: 200, height: 80, border: '1px solid black'}}>
  //     <div>
  //       <span>Text</span>
  //     </div>
  //     <div>
  //       <label>
  //         Text:
  //         <input 
  //           type="text" 
  //           value={currText} 
  //           onChange={handleTextChange} 
  //         />
  //       </label>
  //     </div>
  //     <Handle
  //       type="source"
  //       position={Position.Right}
  //       id={`${id}-output`}
  //     />
  //   </div>
  // );
}
