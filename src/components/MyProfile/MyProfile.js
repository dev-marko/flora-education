import { useEffect, useState } from "react";
import FloraService from "../../repository/floraEducationRepository";

function MyProfile() {

    const [user, setUser] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        FloraService.fetchUser(localStorage.getItem('username'))
        .then((data) => {
            setUser(data.data);
            setLoaded(true);
        });
    }, []);

    console.log(user);

    return (
        <div>
            {
                loaded ?
                (    
                    <div className="container" style={{ marginTop: '100px' }}>
                        <div className="row justify-content-center">
                                <div className="col-md-4 p-4 rounded" style={{ backgroundColor: "#C9F0B0" }}>
                                    <h2 className="text-center mb-5">Mој профил</h2>
                                    <p><b>Email</b>: {user.email}</p>
                                    <p><b>Username</b>: {user.username}</p>
                                    <p><b>Name</b>: {user.name}</p>
                                    <p><b>Surname</b>: {user.surname}</p>
                                    <p><b>Badges</b>:</p>
                                    <ul>
                                        {
                                            user.badges.map((term) => {
                                                return (
                                                    <li>{term.badge.name}</li>
                                                );
                                            })
                                        }
                                    </ul>
                                </div>
                        </div>
                    </div>
                )
                :
                (
                    <div className="spinner">

                    </div>
                )
            }
        </div>
    );
}

export default MyProfile;