import {useEffect, useState} from "react"
import {citas_db} from "../data/citas_db.js"
import { list } from "postcss"

export default function useCitas(){
    
    const [listaCitas,setListaCitas] = useState(()=>{
        const guardarCitas = localStorage.getItem('listaCitas') 
        return guardarCitas ? JSON.parse(guardarCitas) : citas_db
    })

    const [seleccionarCita, setSeleccionarCita] = useState('')
    
    const selectCita = (id) =>{
        const citaSelect = listaCitas.find(cita => cita.id === id)
        setSeleccionarCita(citaSelect)
    }

    const actualizarCitas = (id, available) =>{
        const updatedCitas = listaCitas.map(cita => cita.id === id ? {...cita,available} : cita)
        setListaCitas(updatedCitas)
    }

    const reservarCita = (id) =>{
        actualizarCitas(id, false)
    } 

    const cancelarCita = (id) =>{
        actualizarCitas(id,true)
    }

    const resetForm = () =>{
        setListaCitas(citas_db)
        setSeleccionarCita('')
    }

    useEffect(()=>{
        localStorage.setItem('listaCitas',JSON.stringify(listaCitas))
    },[listaCitas])

    return {
        listaCitas,
        seleccionarCita,
        selectCita,
        reservarCita,
        cancelarCita,
        resetForm
    }
} 