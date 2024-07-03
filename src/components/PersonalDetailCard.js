import React, {useContext} from "react";
import avatar from "../assets/images/user.png";
import {AuthContext} from "../contexts/AuthContext";

const PersonalDetailCard = () => {
    const {user} = useContext(AuthContext);

    return (
        <div className="p-3">
            <h4>Peefir Usario</h4>
            <div className="bg-light-green p-3 rounded-4 shadow-lg border-dashed">
                <div className="d-flex">
                    <img alt="avatar" width={120} height={120} src={avatar} />
                    <div className="ms-2">
                        <div className="w-100">
                            <div className="text-white text-decoration-underline h5 mb-0">
                                Nombre de pila
                            </div>
                            <div className="h4">
                                {user.first_name}
                            </div>
                        </div>
                        <div className="w-100">
                            <div className="text-white text-decoration-underline h5 mb-0">
                                Apellido
                            </div>
                            <div className="h4">
                                {user.last_name}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-100 mt-2">
                    <div className="text-white text-decoration-underline h5 mb-0">
                        Correo electronico
                    </div>
                    <div className="h4 ms-md-5 ms-0">
                        {user.email}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalDetailCard;