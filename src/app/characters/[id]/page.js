'use client';
/* Al tener que utilizar useEffect, useState, marco este componente como Client. */

import { useEffect, useState } from 'react';
import styles from './detailCharacter.module.css'

/* Los parámetros dinámicos se pasan a la función del componente como un argumento */
export default function CharacterDetail({ params }) {
    const { id } = params; // Obtener el 'id' de los parámetros de la ruta
    const [character, setCharacter] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (id) {
            const fetchCharacter = async () => {
                try {
                    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
                    if (!res.ok) {
                        throw new Error('Failed to fetch character details');
                    }
                    const data = await res.json();
                    setCharacter(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            };
            fetchCharacter();
        }
    }, [id]);

    if (loading) return <p className={styles.loading}>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    if (!character) return <p>No character found</p>;

    return (
        <section className={styles.container}>
            <h1 className={styles.title}>{character.name}</h1>
            <img src={character.image} alt={character.name} className={styles.image}/>
            <div className={styles.content}>
                <p className={styles.detail}><strong>Status: </strong> {character.status}</p>
                <p className={styles.detail}><strong>Species: </strong> {character.species}</p>
                <p className={styles.detail}><strong>Gender: </strong> {character.gender}</p>

                <p className={styles.detail}><strong>Origin: </strong> {character.origin.name}</p>
                <p className={styles.detail}><strong>Location: </strong> {character.location.name}</p>
            </div>
        </section>
    );
}