import React, { Fragment } from 'react';

const Formulario = () => {
    return (
        <Fragment>
            <h2>Crear cita</h2>
            <form>
                <label>Nombre Mascotas</label>
                <input
                    type="text"
                    name="mascota"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                />
                <label>Nombre Dueño</label>
                <input
                    type="text"
                    name="propietario"
                    className="u-full-width"
                    placeholder="Nombre Dueño de la Mascota"
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="fecha"
                    className="u-full-width"
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="hora"
                    className="u-full-width"
                />
                <label>Sintomas</label>
                <textarea
                    className="u-full-width" 
                    name="sintomas" 
                    cols="30" 
                    rows="10">
                </textarea>
                <button
                    type="button"
                    className="u-full-width button-primary"
                >Agregar cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;