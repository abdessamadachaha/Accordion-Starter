import { useState } from "react";

function Item(data) {
     const [visiblity, setVisibility] = useState(false);
    
    function handleContent() {
        setVisibility(content => !content)
    }

    return (
        <div className="content" onClick={ handleContent } style={{ borderTop: visiblity ? "5px solid green": "" }}>
            <div className="information">
                <p className="number"> { data.value.padStart(2, "0") } </p>
                <p className="title"> { data.trigger } </p>
                <span className="moreless">{ visiblity ? "-" : "+"}</span>
            </div>
            <p style={{ display: visiblity ? "" : "none" }}>
                { data.content }
            </p>
        </div>
    );
}

export default Item;