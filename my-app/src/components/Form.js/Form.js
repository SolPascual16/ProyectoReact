import React, {useState} from 'react'
import './Form.scss'

export const Form = () => {

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        numero:'',
        subject: '',
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => { 
        e.preventDefault()
        console.log(values)
    }
    return (
        <div className="container my-5">
            <h2>Contacto</h2>
            <hr/>
            <form onSubmit={handleSubmit}>

                <input 
                className="form-control my-3" 
                type="text" 
                placeholder="Nombre" 
                name="nombre"
                value={values.nombre} 
                onChange={handleInputChange}
                >
                </input>

                <input 
                className="form-control my-3" 
                type="text" 
                placeholder="Email" 
                name="email"
                value={values.email}
                onChange={handleInputChange}
                >
                </input>
                <input 
                className="form-control my-3" 
                type="text" 
                placeholder="TEL/CEL" 
                name="numero"
                value={values.numero}
                onChange={handleInputChange}
                >                   
                </input>
                <input 
                className="form-control my-3" 
                type="text" 
                placeholder="Subject" 
                name="subject"
                value={values.subject}
                onChange={handleInputChange}
                >
                </input>
                <textarea 
                className="form-control my-3" 
                type="text" 
                placeholder="Ingresa tu consulta">
                </textarea>
                <hr/>
                <button className="miBtn" type="submit">Enviar</button>
            </form>
        </div>
    )
}
