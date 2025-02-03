
export default function SelectorCitas({listaCitas, seleccionarCita, selectCita, reservarCita, resetForm}){
    return(
        <>
        <div>
        <div className=" bg-rose-400 m-10 p-4 rounded-lg">
                <div>
                    <label htmlFor="citas" className="block text-center font-semibold text-gray-800 mb-5">
                        Seleccione una cita:
                    </label>
                    <select 
                        id="citas" className=" block mx-auto px-3 py-2 border-gray-300 bg-white rounded-md shawdow-sm focus:outline-none
                        focus:ring-indigo-500 focus:border-indigo-500
                        sm:text-sm"
                        value={seleccionarCita}
                        onChange={(e) => selectCita(Number(e.target.value))}>
                        <option value="">Seleccione...</option>
                        {listaCitas.map (cita=>(
                            <option 
                            key={cita.id}
                            value={cita.id}
                            disabled={!cita.available}>
                                {`${cita.date},${cita.time} ${cita.available ? '(Disponible)' : '(No Disponible)'}`}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="bg-green-400 m-10 p-4 rounded-lg">
                <button 
                onClick={()=> reservarCita(seleccionarCita.id)}
                className="bg-slate-500 px-2 py-1 ml-4 text-white rounded">
                    Reservar Cita
                </button>
                <button 
                    onClick={resetForm}
                    className="bg-slate-500 px-2 py-1 ml-4 text-white rounded">
                    Resetear Formulario
                </button>
            </div>

        </div>
            
        </>
        
    )
}