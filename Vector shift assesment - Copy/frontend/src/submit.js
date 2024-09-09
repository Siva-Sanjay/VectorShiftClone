// submit.js
import { useState } from "react";
import { useStore } from "./store";
import axios from 'axios';
import { AlertView } from "./alertview";
export const SubmitButton = () => {

    const output = useStore((state) => ({
        nodes: state.nodes.map((item) => { return item.id }),
        edges: state.edges.map((item) => { return [item.source, item.target] })
    }));  //created a json with only the useful node and edge details

    const [see, setSee] = useState(false); //to manage the visibility of the alert
    const [alt, setAlt] = useState([]);    //Data for the alert

    const clicked = async () => {
        setSee(true);
        console.log(output);
        const response = await fetch('http://localhost:8000/pipelines/parse',
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify(output),
            });
        const result = await response.json();
        console.log(result);
        setAlt([result.num_node, result.num_edges, result.is_dag]);
    }

    const clickalert = () => {
        setSee(false);
    }

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <button className="btn-info rounded-circle p-3 m-1" type="submit"
                style={{
                    letterSpacing: "2.5px",
                    fontFamily: "Orbitron",
                    fontWeight: "600",
                    textShadow: "1px 1px 3px black"
                }}
                onClick={clicked}
            >Submit</button>
            {see ? <AlertView alt={alt} clickevent={clickalert} /> : null}
        </div>

    ); //the alert segment is conditionally rendered based on the 'see' variable state
}
