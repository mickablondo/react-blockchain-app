import './MikaTest.css';
import React from 'react';
import TestContextUsername from './TestContextUsername';

const user = {
    name: 'MiK@',
    imageUrl: 'https://babel.coop/wp-content/uploads/2022/09/Mickael-Blondeau.jpg',
    imageSize: 90,
  };

// création d'un contexte pour le userName
export const UserNameContext = React.createContext();

function MikaTest() {
    return (
        <>
            <div class="alignement">
                <div class="one">
                    <h1>Hello world, welcome to {user.name}'s home !</h1>
                </div>
                <div class="two"></div>
                <div class="three">
                    <a href="https://babel.coop" target="_blank" rel="noopener noreferrer">
                        <img
                            className="avatar"
                            src={user.imageUrl}
                            alt={'La photo de ' + user.name}
                            style={{
                            width: user.imageSize,
                            height: user.imageSize
                            }}
                        />
                    </a>
                </div>
            </div>
            <UserNameContext.Provider value={user.name}>
                <TestContextUsername />
            </UserNameContext.Provider>
        </>
    )
}

export default MikaTest;