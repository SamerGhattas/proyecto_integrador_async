import React from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export const Contacto = () => {
    const datosFormulario = React.useRef() //Creo la referencia
    let navigate = useNavigate() //Ubicacion actual de mi componente
    const consultarFormulario = (e) => {
        e.preventDefault()
        console.log(datosFormulario.current) //Consulto el estado actual del formulario
        const datForm = new FormData(datosFormulario.current) //Genero un objeto iterator de esos datos
        const contacto = Object.fromEntries(datForm) //Transforma en un objeto literal
        console.log(contacto)
        e.target.reset() //Reseteo el formulario
        toast.success("Consulta recibida correctamente")
        navigate("/")//Redirijo a pagina inicial
    }
  return (
    <>
    <div className="container mt-7">
        <div className="row justify-content-center py-3">
            <div className="col-6">
                <img className="img-fluid" src="https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg" alt="" />
            </div>
            <div className="col-6">
                <div className='mb-4 pb-3'>
                    <h2>Reserva con Nosotros</h2>
                    <p>¡Hola! Somos el equipo de videógrafos y fotógrafos que te ayudará a capturar los momentos más hermosos e inolvidables de tu matri. No dudes en contactarnos si tienes preguntas o deseas reservar nuestros servicios. ¡Estamos ansiosos por ser parte de tu gran día!</p>
                </div>
                <form onSubmit={consultarFormulario} ref={datosFormulario}>
                    <div className="my-3">
                        <label htmlFor="nombre1" className="form-label">Nombre del Novio/a</label>
                        <input type="text" className="form-control" name="nombre1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="nombre2" className="form-label">Nombre de la Novia/o</label>
                        <input type="text" className="form-control" name="nombre2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" name="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="celular" className="form-label">Teléfono</label>
                        <input type="number" className="form-control" name="celular" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="fechaBoda" className="form-label">Fecha del Matrimonio</label>
                        <input type="date" className="form-control" name="fecha" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="consulta" className="form-label">Cuéntanos más detalles</label>
                        <textarea className="form-control" name="consulta" rows={3} defaultValue={""} />
                    </div>

                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}