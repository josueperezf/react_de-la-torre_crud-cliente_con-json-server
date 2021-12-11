import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Formulario } from "../components/Formulario";
import { Spinner } from "../components/Spinner";

export const EditarCliente = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const showCliente = async () => {
            try {
                setCargando(true);
                const url = `http://localhost:4000/clientes/${id}`;
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setCliente(resultado);
            } catch (error) {
                console.log(error);
            }
            setCargando(false);
        };
        showCliente();
    }, [])
    
    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 '>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este formulario para editar un cliente</p>
            {
                (cargando)
                    ? <Spinner/>
                    : (
                        (cliente?.id ) ? <Formulario cliente={cliente} /> : (<p>No hay resultados</p>)
                    )
            }
        </>
    )
}
