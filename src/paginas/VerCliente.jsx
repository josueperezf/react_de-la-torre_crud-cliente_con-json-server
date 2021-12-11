import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { Spinner } from "../components/Spinner";

export const VerCliente = () => {
    const {id} = useParams();
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(false);
    const {nombre, telefono, empresa, email, notas,  } = cliente;

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
    }, []);

    return (
        <div>
            {
                (cargando)
                ? <Spinner/>
                : (
                    (Object.keys(cliente).length > 0 ) ? (
                        <div>
                            <h1 className='font-black text-4xl text-blue-900 '>Ver Cliente</h1>
                            <p className='mt-3'>Información del cliente</p>
        
                            <p className="text-4xl text-gray-600 mt-10"><span className="text-gray-800 uppercase font-bold">Cliente: </span> {nombre}</p>
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Email: </span> {email}</p>
                            {
                                (telefono) && <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Telefono: </span> {telefono}</p>
                            }
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Empresa: </span> {empresa}</p>
                            <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Cliente: </span> {nombre}</p>
                            {
                                (notas) && <p className="text-2xl text-gray-600 mt-4"><span className="text-gray-800 uppercase font-bold">Notas: </span> {notas}</p>
                            }
                        </div>
                    )
                    : (<p>No hay resultados</p>)
                )
            }
        </div>
    )
}
