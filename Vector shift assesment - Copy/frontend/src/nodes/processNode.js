import { Template } from './template';

export const ProcessNode = ({ id, data }) => {


  return(
    <Template
    id={id}
    title="Process"
    sub="Processing inside"
    lefthandle= {1}
    righthandle ={1}
    ins={0}
   
    />
  )
}