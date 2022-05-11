import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";

const BusData = props => {
    return(
        <div className="row">
            <div className="col">{props.unidad}</div>
            <div className="col">{props.chofer}</div>
            <div className="col">{props.company}</div>
        </div>
    )
}

const Buses = () => {
    const [items, setItems] = useState([])

    useEffect(() => {
        async function getBuses() {
            const response = await fetch(`http://localhost:8083/buses/getBuses`)
            if (!response.ok) {
                const message =`Se produjo un error: ${response.statusText}`
                window.alert(message)
                return
            }
            const buses = await response.json()
            setItems(buses)
            console.log(items)
        }
        getBuses()
        return
    }, [items.length])

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col">Unidad</div>
                <div className="col">Chofer</div>
                <div className="col">Empresa</div>
            </div>
            {items.map(i => <BusData unidad={i.unidad} chofer={i.chofer}  />)}
        </div>
    )
}


export default Buses;