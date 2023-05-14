import { useContext } from 'react';
import { UserNameContext } from './MikaTest';

function TestContextUsername() {
    const value = useContext(UserNameContext); // souscription au contexte
    return (
        <>
            <p />
            <div>Je m'appelle {value} et je proviens d'un useContext.</div>
        </>
    );
}

export default TestContextUsername;