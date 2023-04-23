import './MikaTest.css';

const user = {
    name: 'MiK@',
    imageUrl: 'https://babel.coop/wp-content/uploads/2022/09/Mickael-Blondeau.jpg',
    imageSize: 90,
  };

function MikaTest() {
    return (
        <>
            <table>
                <tr>
                    <td><h1>Hello world, welcome to {user.name}'s home !</h1></td>
                    <td>
                        <img
                            className="avatar"
                            src={user.imageUrl}
                            alt={'La photo de ' + user.name}
                            style={{
                            width: user.imageSize,
                            height: user.imageSize
                            }}
                        />
                    </td>
                </tr>
            </table>
        </>
    )
}

export default MikaTest;