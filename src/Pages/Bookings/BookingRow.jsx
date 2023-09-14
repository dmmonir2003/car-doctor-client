import Swal from "sweetalert2";


const BookingRow = ({ booking, handaleDelete, handleBookingUpdated }) => {

    const { _id, price, title, img, date, serviceId, status } = booking;




    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handaleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>

                <div className="avatar">
                    <div className="w-32 rounded">
                        {
                            img && <img src={img} />
                        }
                    </div>

                </div>
            </td>
            <td>
                <h3 className="font-bold text-lg"> {title}</h3> <br />
                <p className="font-semibold">Service-Id:  {serviceId} </p>
            </td>
            <td>
                <p className="text-lg font-medium text-orange-500"> {price}</p>
            </td>
            <td>{date}</td>
            <th>
                {
                    status === "confirm" ? <span>confirmed</span> : <button onClick={() => handleBookingUpdated(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;