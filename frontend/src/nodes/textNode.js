// textNode.js
import { Template } from './template';
import { useState } from 'react';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || 'input');

  let vars = 0;
  if (currText.indexOf("{{") > -1 && currText.indexOf("}}") > 2)
    if (currText.indexOf("{{") != currText.lastIndexOf("{{") && currText.indexOf("}}") != currText.lastIndexOf("}}"))
      vars = 2;
    else
      vars = 1

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <Template
      id={id}
      title="Text"
      sub="Text:"
      lefthandle={vars}
      righthandle={1}
      ins={1}
      values={[currText]}
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
