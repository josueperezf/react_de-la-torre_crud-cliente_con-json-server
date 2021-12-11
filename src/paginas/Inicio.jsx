import { useEffect, useState } from "react"
import { Cliente } from "../components/Cliente";

export const Inicio = () => {
    const [clientes, setclientes] = useState([]);

    useEffect (() => {
        const obtenerClientes = async () => {
            try {
                const url = 'http://localhost:4000/clientes';
                const respuesta = await fetch(url);
                const resultado = await respuesta.json();
                setclientes(resultado)
            } catch (error) {
                console.log(error);
            }
        }
        obtenerClientes();
    }, []);

    const hanbleEliminar = async (id) => {
        if (!confirm('Deseas eliminar este cliente')) {
            return;
        }
        try {
            const url = `http://localhost:4000/clientes/${id}`;
            const respuesta = await fetch(url, {
                method: 'DELETE'
            });
            await respuesta.json();
            setclientes(
                clientes.filter((c) => c.id !== id ) 
            );
        } catch (error) {
            console.log(error);
        }

    }

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900 '>ClienteS</h1>
            <p className='mt-3'>Administra tus clientes</p>

            <table className="w-full mt-5 table-auto shadow bg-white">
                <thead className="bg-blue-800 text-white">
                    <tr>
                        <th className="p-2">Nombre</th>
                        <th className="p-2">Contacto</th>
                        <th className="p-2">Empresa</th>
                        <th className="p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clientes.map((cliente) => (
                            <Cliente key={cliente.id} cliente={cliente} hanbleEliminar={hanbleEliminar} />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
