import React, {useState} from 'react'

export const Form = () => {

    const {nombre, setNombre} = useState("")
    const {subject, setSubject} = useState("")

    const handleSubject = (e) => {

    }

    const handleNombre = (e) => {
        setNombre(e.target.value)
    }


    const handleSubmit = (e) => { 
    e.preventDefault()
    console.log(nombre)

    }
    return (
        <div className="container">
            <h2>Contacto</h2>
            <form onSubmit={handleSubmit}>
                <input className="form-control my-3" type="text" placeholder="Nombre" value="Nombre" onChange={handleNombre}>
                </input>
                <input className="form-control my-3" type="text" placeholder="E-mail" value="E-mail">
                </input>
                <input className="form-control my-3" type="text" placeholder="TEL/CEL" value="TEL/CEL">
                </input>
                <input className="form-control my-3" type="text" placeholder="Subject" value="Subject"value="Nombre" onChange={handleSubject}>
                </input>
                <textarea className="form-control my-3" type="text" placeholder="Ingresa tu consulta"></textarea>
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </div>
    )
}
