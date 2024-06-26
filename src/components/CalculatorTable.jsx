import React from 'react';

export const CalculatorTable = () => {
    return (
        <div>
            <table className="table table-outlined table-bordered bg-transparent border-black table-sm text-uppercase table-no-top-bottom-border">
                <thead>
                    <tr>
                        <th scope="col" className="border-end-0 text-center">Num</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Pago</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Principal</th>
                        <th scope="col" className="border-start-0 border-end-0 text-center">Interés</th>
                        <th scope="col" className="border-start-0 text-center w-25">Balance del préstamo</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td/>
                        <td/>
                        <td/>
                        <td/>
                        <td>$20,000.00</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>$420.04</td>
                        <td>$261.71</td>
                        <td>$158.33</td>
                        <td>$19,738.29</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>$420.04</td>
                        <td>$261.71</td>
                        <td>$158.33</td>
                        <td>$19,738.29</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>$420.04</td>
                        <td>$261.71</td>
                        <td>$158.33</td>
                        <td>$19,738.29</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}