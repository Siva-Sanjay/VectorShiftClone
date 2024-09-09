// toolbar.js

import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {

    return (
        <div style={{ padding: '10px', display:"flex", backgrounddColor: "rgb(210, 170, 118)" }}>
            <div className="toolbar" style={{display: 'flex', flexWrap: 'wrap'}}>
                <DraggableNode type='customInput' label='Input' />
                <DraggableNode type='llm' label='LLM' />
                <DraggableNode type='customOutput' label='Output' />
                <DraggableNode type='text' label='Text' />
                <DraggableNode type='customInput2' label='Input2' />
                <DraggableNode type='process' label='Process' />
                <DraggableNode type='display' label="Display" />
                <DraggableNode type='status'  label='Status' />
                <DraggableNode type="final" label="Final" />
            </div>
        </div>
    );
};
