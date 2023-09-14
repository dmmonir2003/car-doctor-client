import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const Cheakout = () => {

    const { user } = useContext(AuthContext);

    const service = useLoaderData();

    const { service_id, price, title, img } = service;

    const handaleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const serviceId = form.serviceId.value;
        const email = user?.email;
        const phone = form.phone.value;
        const price = form.price.value;
        const date = form.date.value;

        const booking = {
            customerName: name,
            serviceId,
            email,
            phone,
            price,
            date,
            title,
            img
        }

        fetch('http://localhost:5000/booking', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success',
                        text: 'Your Service Booking Successfully Add',
                        icon: 'success',
                        confirmButtonText: 'Cool',

                    })
                    form.reset()
                }
            })

    }


    return (

        <form onSubmit={handaleBooking}>
            <div className="card-body grid grid-cols-1 md:grid-cols-2 gap-7">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" defaultValue={user?.name} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Service Id</span>
                    </label>
                    <input type="text" defaultValue={service_id} name="serviceId" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Due Price</span>
                    </label>
                    <input type="text" defaultValue={'$' + price} name="price" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Date</span>
                    </label>
                    <input type="date" name="date" className="input input-bordered" required />

                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" name="email" defaultValue={user?.email} className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Phone</span>
                    </label>
                    <input type="phone" name="phone" className="input input-bordered" required />

                </div>

            </div>
            <div className="form-control ml-16 mb-5">


                <input className="btn  bg-orange-600 w-11/12" type="submit" value="Book Now" />

            </div>
        </form>

    );
};

export default Cheakout;