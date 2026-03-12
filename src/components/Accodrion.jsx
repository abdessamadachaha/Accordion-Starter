import items from "../data";
import Item from "./Item";

function Accordion() {
   
    return (
        <div className="acco">
            {items.map(item => (
                <Item key={ item.value } { ...item }  />
            ))}
        </div>
    );
}

export default Accordion;