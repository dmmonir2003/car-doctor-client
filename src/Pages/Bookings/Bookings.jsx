import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";
import BookingRow from "./BookingRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Bookings = () => {

    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);
    const navigate = useNavigate();

    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(() => {

        fetch(url, {
            // access token paas bacand server
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('access-jwt-token')}`
            },


        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setBookings(data)
                }
                else {
                    navigate('/')
                }
            })
    }, [url, navigate]);

    const handaleDelete = id => {


        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                fetch(`http://localhost:5000/bookings/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                            const remaining = bookings.filter(booking => booking._id !== id);
                            setBookings(remaining)

                        }

                    })
            }

        })

    }

    const handleBookingUpdated = id => {

        fetch(`http://localhost:5000/bookings/${id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status: "confirm" })

        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updateBooking = bookings.find(booking => booking._id === id);
                    updateBooking.status = "confirm";
                    const newUpdatedBooking = [updateBooking, ...remaining];
                    setBookings(newUpdatedBooking);
                }

            })

    }


    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>


                            <th><h4 className="font-bold text-black text-xl ">Service Picture</h4></th>
                            <th><h4 className="font-bold text-xl text-black">Service Name And Id</h4></th>
                            <th><h4 className="font-bold text-xl text-black">Price</h4></th>
                            <th><h4 className="font-bold text-xl text-black">Date</h4></th>
                            <th><h4 className="font-bold text-xl text-black">Status</h4></th>


                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {
                            bookings.map(booking => <BookingRow

                                key={booking._id}
                                booking={booking}
                                handaleDelete={handaleDelete}
                                handleBookingUpdated={handleBookingUpdated}
                            ></BookingRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Bookings;