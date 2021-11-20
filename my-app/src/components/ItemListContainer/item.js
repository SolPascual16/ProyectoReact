import React from "react";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
import {MdRemoveRedEye} from 'react-icons/md'
import './itemList.scss'

export const Item = ({id,nombre,precio,img,category}) => {

    return (
            <div className="miCard">
                <section className="section">
                    <img alt="" className="img" variant="top" src={img} />
                    <h1 className="titulo">{nombre}</h1>
                    <p className="precio">${precio}</p>
                    <Link to={`/detail/${id}`}>
                    <Button variant="primary">
                    <MdRemoveRedEye className="eyeIcon"/>    Ver producto</Button>
                    </Link>
                </section>
            </div>       
    )
}