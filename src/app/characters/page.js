'use client';
/* Al tener que utilizar useEffect, useState, marco este componente como Client. */

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Characters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();
    
    /* Solicitud de datos, manejo de errores que puede mostrar un mensaje de error o un estado de carga. */
    useEffect(() => {
        const getCharacters = async () => {
            try {
                const res = await fetch('https://rickandmortyapi.com/api/character');
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setCharacters(data.results);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        getCharacters();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    const handleCharacterClick = (id) => {
        router.push(`/characters/${id}`); // Navegación hacia la página de detalles
    };

    return (
        <section>
            <h1 className='text-center mt-16 mb-5 text-lg'>All Characters Rick & Morty</h1>
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 items-center'>
                    {characters.map((item, index) => (
                        <li key={item.id}
                            className='w-52 mx-4 rounded-md shadow-lg transform hover:rotate-2 transition duration-300 cursor-pointer'
                            onClick={() => handleCharacterClick(item.id)}
                        >
                            <img src={item.image} alt={item.name} loading='lazy'/>
                            <div className='p-2 text-sm text-white bg-gray-800'>
                                <p className='text-base font-medium hover:text-blue-700'>{item.name}</p>
                                <p className='text-xs mt-2'>{item.gender} - {item.species}</p>
                                <p className='text-xs mt-2'>Origin: {item.origin.name}</p>
                            </div>
                        </li>
                    ))}
                </ul>
        </section>
    );
}