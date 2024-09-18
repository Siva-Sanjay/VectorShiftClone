// template.js

import { Handle, Position } from 'reactflow';

export const Template = ({ id, title, sub, lefthandle, righthandle, ins, values, valueChange }) => {

  const area = document.getElementById('textbox' + id);
  let textheight = "20px";

  //set height for text box
  if (area) {
    textheight = Math.max(area.scrollHeight, 20) + "px";
  }

  //categorizing nodes
  let type = 'iso';
  if (lefthandle > 0) {
    type = 'end';
    if (righthandle > 0)
      type = 'intermediate';
  }
  else if (righthandle > 0)
    type = 'begin';

  
  return (
    <div className={`node d-flex flex-column ${title} ${type}`}>
      {lefthandle === 2 ?
        <>
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-system`}
            style={{ top: `${100 / 3}%` }}
          />
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-prompt`}
            style={{ top: `${200 / 3}%` }}
          />
        </>
        :
        lefthandle === 1 ?
          <Handle
            type="target"
            position={Position.Left}
            id={`${id}-value`}
          />
          : null}


      <div className="title-tag">
        <span>{title}</span>
      </div>

      {ins > 0 ?
        <label>
          <div className="input-group input-group-default my-1">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-default">{sub}</span>
            </div>
            <textarea
              type="text"
              id={"textbox" + id}
              style={{ height: `${textheight}` }}
              value={values[0]}
              onChange={valueChange[0]}
              className="form-control textbox"
            />
          </div>
        </label>
        : <span>{sub}</span>}

      {ins === 2 ?
        <label>
          <select className="form-control type-setter" value={values[1]} onChange={valueChange[1]}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
        : null}



      {righthandle === 1 ?
        <Handle
          type="source"
          position={Position.Right}
          id={`${id}-value`}
        />
        : null}



    </div>
  );
}
