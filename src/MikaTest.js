import './MikaTest.css';

const user = {
    name: 'MiK@',
    imageUrl: 'https://babel.coop/wp-content/uploads/2022/09/Mickael-Blondeau.jpg',
    imageSize: 90,
  };

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
        </>
    )
}

export default MikaTest;