import React, { useState, useEffect } from 'react';
import { databases, DATABASE_ID, COLLECTION_ID_USUARIOS } from '../appwriteConfig'

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        getUsuarios()
    }, [])

    const getUsuarios = async () => {
        try {
            const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID_USUARIOS)
            console.log(response)
            setUsuarios(response.documents)
        } catch (error) {
            console.error("Error al obtener usuarios:", error)
        }
    }

    return (
        <div>
            <div>
                <h3>Usuarios</h3>
                <div style={{width:'100%', padding:'2%'}}>
                    <table style={{width:'100%'}}>
                    <thead>
                        <th style={{textAlign:'center'}}>Nombre</th>
                        <th style={{textAlign:'center'}}>Correo</th>
                        <th>Creado en</th>
                    </thead>
                    {usuarios.map(usuario => (
                        <tr key={usuario.$id}>
                            <td style={{textAlign:'center'}}>{usuario.nombre}</td>
                            <td style={{textAlign:'center'}}>
                            {usuario.correo}
                            </td>
                            <td style={{textAlign:'center'}}>
                            {usuario.$createdAt}
                            </td>
                        </tr>
                    ))}
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Usuarios;
