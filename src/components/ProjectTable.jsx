import React from 'react';

export const ProjectTable = () => {
    return (
        <div>
            <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                <thead>
                    <tr>
                        <th scope="col" className="text-decoration-underline">Descripción</th>
                        <th scope="col" className="text-decoration-underline">Fecha Inicio</th>
                        <th scope="col" className="text-decoration-underline">Fecha Fin</th>
                        <th scope="col" className="text-decoration-underline">Gasto RD$</th>
                        <th scope="col" className="text-decoration-underline">Cuenta/Banco</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>-Compra de meseta</td>
                        <td>11-06-24</td>
                        <td>11-06-24</td>
                        <td>20,000.00</td>
                        <td>Tarjeta de credito</td>
                    </tr>
                    <tr>
                        <td>-instalación de meseta</td>
                        <td>12-06-24</td>
                        <td>12-06-24</td>
                        <td>1,000.00</td>
                        <td>Cuenta de ahorro</td>
                    </tr>
                    <tr>
                        <td>-Compra de meseta</td>
                        <td>11-06-24</td>
                        <td>11-06-24</td>
                        <td>20,000.00</td>
                        <td>Tarjeta de credito</td>
                    </tr>
                    <tr>
                        <td>-instalación de meseta</td>
                        <td>12-06-24</td>
                        <td>12-06-24</td>
                        <td>1,000.00</td>
                        <td>Cuenta de ahorro</td>
                    </tr>
                    <tr>
                        <td>-Compra de meseta</td>
                        <td>11-06-24</td>
                        <td>11-06-24</td>
                        <td>20,000.00</td>
                        <td>Tarjeta de credito</td>
                    </tr>
                    <tr>
                        <td>-instalación de meseta</td>
                        <td>12-06-24</td>
                        <td>12-06-24</td>
                        <td>1,000.00</td>
                        <td>Cuenta de ahorro</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}