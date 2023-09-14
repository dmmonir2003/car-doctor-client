import { IoArrowForwardSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {

    const { title, _id, img, price } = service;


    return (
        <div className="card w-80 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-lg font-bold">{title}</h2>
                <p className="w-28 text-orange-500 font-medium ">Price: ${price}</p>
                <div className="card-actions justify-end">
                    <Link to={`/cheakout/${_id}`} > <button className="btn hover:bg-orange-600 btn-square ">
                        <IoArrowForwardSharp></IoArrowForwardSharp>
                    </button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;