import React from 'react';

export const LoanTable = ({hasCuota = true, title}) => {
    return (
        <div>
            <h5 className="text-uppercase">*{title}</h5>
            <table className="table bg-transparent no-border table-responsive-sm table-hover table-sm text-uppercase">
                <thead>
                <tr>
                    <th scope="col" className="text-decoration-underline">Descripción</th>
                    <th scope="col" className="text-decoration-underline">Monto RD$</th>
                    {hasCuota && <th scope="col" className="text-decoration-underline">Cuota</th>}
                    <th scope="col" className="text-decoration-underline">Ultima Pago</th>
                    <th scope="col" className="text-decoration-underline">Metodo De Pago</th>
                    <th scope="col" className="text-decoration-underline">Proximo Pago</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>- Prestomo del apartamento</td>
                        <td>5,000.00</td>
                        {hasCuota && <td>2/10</td>}
                        <td>15-11-24</td>
                        <td>Banpreservas</td>
                        <td>15-11-24</td>
                    </tr>
                    <tr>
                        <td>- Prestomo Personal scotibank</td>
                        <td>6,000.00</td>
                        {hasCuota && <td>3/8</td>}
                        <td>15-11-24</td>
                        <td>Scotibank</td>
                        <td>15-11-24</td>
                    </tr>
                    <tr>
                        <td>- Prestomo informal a pedro</td>
                        <td>2,000.00</td>
                        {hasCuota && <td>6/7</td>}
                        <td>15-11-24</td>
                        <td>Pedro perez</td>
                        <td>15-11-24</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}