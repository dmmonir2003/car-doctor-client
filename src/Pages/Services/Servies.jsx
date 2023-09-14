import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard/ServiceCard";


const Servies = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))

    }, [])






    return (
        <div className="text-center mt-20 mb-20 space-y-6">

            <h3 className="text-3xl font-semibold text-orange-500 ">Service</h3>
            <h2 className="text-5xl font-bold ">Our Service Area</h2>
            <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>

        </div>
    );
};

export default Servies;