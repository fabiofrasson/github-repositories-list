import { useEffect, useState } from 'react';

export default function ListaDeRepositorios() {
    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        async function carregaRepositorios() {
            const resposta = await fetch("https://api.github.com/users/fabiofrasson/repos")
            const repositorios = await resposta.json();

            setRepositorios(repositorios);
        }
        carregaRepositorios();
    }, [])

    return (
        <ul class="list-group">
            {repositorios.map(repositorio => (
                <li key={repositorio.id}
                    class="list-group-item">
                    {repositorio.name}
                </li>
            ))}
        </ul>
    )
}