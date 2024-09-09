
export const AlertView = ({ alt, clickevent }) => {

    const click = (event) => {
        if (event.target === event.currentTarget)
            clickevent()
    }; //to exit alert

    return (
        <div className="alertt" onClick={click} >
            <div class="card text-center" >
                <div class="card-body" onKeyDown={() => clickevent()}>
                    <h5 class="card-title ">Here's your Summary</h5>
                    <p class="card-text">
                        Total Nodes=<b>{alt[0]}</b><br />
                        Total Edges=<b>{alt[1]}</b><br />
                        Dag: <b>{alt[2]}</b>
                    </p>
                    <button class="btn btn-primary" onClick={clickevent} autoFocus>Okay!</button>
                </div>
            </div>
        </div>
    );
}