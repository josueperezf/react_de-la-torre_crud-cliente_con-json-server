import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Formulario = ({cliente}) => {
    const navigate = useNavigate();

    const nuevoClienteSchema =  yup.object().shape({
        nombre: yup.string()
                    .trim()
                    .required('El nombre del cliente es requerido')
                    .min(3, 'El nombre es muy corto')
                    .max(40, 'El nombre es muy largo'),
        empresa: yup.string()
                    .required('El nombre de la empresa es requerido')
                    .min(2, 'El nombre de la empresa es muy corto')
                    .max(40, 'El nombre de la empresa es muy largo'),
        email: yup.string()
                    .email('El email no es valido')
                    .required('El email es requerido')
                    .min(2, 'El email es muy corto')
                    .max(40, 'El nombre de la empresa es muy largo'),
        telefono: yup.number()
                    .integer('El telefono no es valido')
                    .positive('El telefono no es valido')
                    .typeError('El telefono no es valido')
        // notas:
    });


    const handleSubmit = async (values, {resetForm}) => {
        
        try {
            let url = `${import.meta.env.VITE_API_URL}/clientes`;
            let method = 'POST';
            if (cliente?.id) {
                url = `${url}/${cliente?.id}`;
                method = 'PUT';
            }
            const respuesta = await fetch(url, {
                method,
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const resultado = await respuesta.json();
            resetForm();
            navigate('/clientes');
        } catch (error) {
            console.log(error);
        }
        
    }
    return (
        <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-sm md:w-3/4 mx-auto'>
            {/* <h1 className='text-gray-600 font-bold text-center uppercase text-xl' >Agregar Cliente</h1> */}

            <Formik
                initialValues={{
                    nombre: cliente.nombre || '',
                    empresa: cliente.empresa || '',
                    email: cliente.email ?? '',
                    telefono: cliente.telefono || '',
                    notas: cliente.notas || '',
                }}
                // la siguiente linea permite que se pueda reiniciar el Formulario, esto es por que este puede servir para crear y editar,
                // entonces al momento de crear no hay ninguna objeto cliente para llevar los valores, para ello coloca la siguiente propieda y crear y valor por default
                enableReinitialize = {true}
                onSubmit={handleSubmit}
                validationSchema={nuevoClienteSchema}
            >
                {
                    ({errors}) => {
                        // console.log(errors);
                            return (<Form >
                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='nombre'>Nombre:</label>
                                    <Field className='mt-2 block w-full p-3 bg-gray-50' id='nombre' name='nombre' placeholder='Nombre del cliente' maxLength='40'  />
                                    <ErrorMessage name='nombre' component="div" className='text-center my-4 bg-red-800 text-white' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='empresa'>Empresa:</label>
                                    <Field className='mt-2 block w-full p-3 bg-gray-50' id='empresa' name='empresa' placeholder='Empresa del cliente' maxLength='80' />
                                    <ErrorMessage name='empresa' component="div" className='text-center my-4 bg-red-800 text-white' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='email'>Email:</label>
                                    <Field className='mt-2 block w-full p-3 bg-gray-50' type='email' id='email' name='email' placeholder='Email del cliente' maxLength='80' />
                                    <ErrorMessage name='email' component="div" className='text-center my-4 bg-red-800 text-white' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='telefono'>Telefono:</label>
                                    <Field className='mt-2 block w-full p-3 bg-gray-50' id='telefono' name='telefono' placeholder='Telefono del cliente' maxLength='200' />
                                    <ErrorMessage name='telefono' component="div" className='text-center my-4 bg-red-800 text-white' />
                                </div>

                                <div className='mb-4'>
                                    <label className='text-gray-800' htmlFor='notas'>Notas:</label>
                                    <Field className='mt-2 block w-full p-3 bg-gray-50' as='textarea'  id='notas' name='notas' placeholder='Notas del cliente'  />
                                    <ErrorMessage name='notas' component="div" className='text-center my-4 bg-red-800 text-white' />
                                </div>

                                <input type='submit' value='Agregar Cliente' className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold  text-lg cursor-pointer hover:bg-blue-600 '  />
                            </Form>)
                    }
                }
            </Formik>
        </div>
    )
}
 // para colocarle valores por default a cliente, esto es para editar

 Formulario.defaultProps = {
    cliente: {}
}

export {Formulario};