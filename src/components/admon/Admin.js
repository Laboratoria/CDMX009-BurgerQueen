import React, { useEffect, useState } from 'react';
import { firebase } from '../../firebase/firebaseConfig';
import ModalAdmin from './ModalAdmin';
import Navbar from '../layout/Navbar';
import '../admon/admin.css';

const Admin = () => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const data = await firebase.firestore().collection('users').get();
                //console.log(data.docs);
                const arrayData = data.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                console.log(arrayData);
                setUser(arrayData); //Todos los usuarios
            } catch (error) {
                console.log(error);
            }
        };
        getUsers();
    }, []);

    return (
        <div className='bg'>
            <Navbar />
            <div className='container'>
                <h1 className='title-admin white-text'>Administrar accesos</h1>
                <div className='row'>
                    <div className=' table-user white'>
                        <table className='black-text'>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Estación  </th>
                                </tr>
                            </thead>

                            <tbody>
                                {
                                    user.map(item => (
                                        <tr key={item.id}>

                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>{item.workstation}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='add-personal center-align'>
                        {/*                     <button className='add-btn white-text'>Añadir personal</button>
 */}                    <ModalAdmin user={user} setUser={setUser} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
