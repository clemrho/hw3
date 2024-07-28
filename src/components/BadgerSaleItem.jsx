import { useState } from "react"
import './BadgerSaleItem.css'


export default function BadgerSaleItem(props) {
    const [itemnum, setitemnum] = useState(0)

    let decreaseq = () =>{
        setitemnum(itemnum => itemnum > 0 ? itemnum - 1 : itemnum)
    }
    
    let increaseq = () =>{
        setitemnum(itemnum => itemnum + 1)
    }

    
    return <div className={props.featured ? "b_special" : "b_ordinary"}>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{props.price}</p>
            <div className="undertype">
                <button className="inline" onClick={decreaseq} disabled={itemnum <= 0}>-</button>
                <p className="inline">{itemnum}</p>
                <button className="inline" onClick={increaseq}>+</button>
            </div>
    </div>
}