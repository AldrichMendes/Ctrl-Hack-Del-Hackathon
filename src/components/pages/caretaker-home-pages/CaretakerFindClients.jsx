'use client'
import CaretakerApps from "./VolunteerApps"

const { default: CaretakerNavbar } = require("../../caretaker-shared-components/CaretakerNavbar")

const CaretakerFindClients = () => {
    const tempData = [
        {client:"mary", categories:[1, 2, 3, 4, 5, 6, 7, 8, 1000000000, 10000000000, 10000000000], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {client:"mary", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"},
        {client:"mary", categories:[1, 2, 3], volunteersNeeded:5, points:5, hours:"5 hours", notes:"N/A", postal:"A1A 1A1"}
    ];

    return (
        <>
            <CaretakerNavbar currentSelected={1}/>
            <div>
                {tempData.map((data, i) =>{
                    return (
                        <CaretakerApps data={data} key={i}/>
                    )
                })}
            </div>
        </>
    )
}
export default CaretakerFindClients;