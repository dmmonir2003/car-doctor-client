import img1 from '../../../assets/images/banner/1.jpg';
import img2 from '../../../assets/images/banner/2.jpg';
import img3 from '../../../assets/images/banner/3.jpg';
import img4 from '../../../assets/images/banner/4.jpg';


const Banner = () => {
    return (
        <div className="carousel   w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full  rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className='text-white space-y-7 font-semibold pl-10 w-1/2'>
                        <h2 className='text-5xl'>Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active mr-6 btn-md btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-md bg-opacity-10 bg-black btn-warning">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle text-white bg-opacity-5 bg-black hover:bg-orange-500 mr-4">❮</a>
                    <a href="#slide2" className="btn btn-circle  text-white bg-opacity-5 bg-black hover:bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full  rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className='text-white space-y-7 font-semibold pl-10 w-1/2'>
                        <h2 className='text-5xl'>Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active mr-6 btn-md btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-md bg-opacity-10 bg-black btn-warning">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle text-white bg-opacity-5 bg-black hover:bg-orange-500 mr-4">❮</a>
                    <a href="#slide3" className="btn btn-circle  text-white bg-opacity-5 bg-black hover:bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full  rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className='text-white space-y-7 font-semibold pl-10 w-1/2'>
                        <h2 className='text-5xl'>Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active mr-6 btn-md btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-md bg-opacity-10 bg-black btn-warning">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle text-white bg-opacity-5 bg-black hover:bg-orange-500 mr-4">❮</a>
                    <a href="#slide4" className="btn btn-circle  text-white bg-opacity-5 bg-black hover:bg-orange-500">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full  rounded-lg " />
                <div className="absolute rounded-lg flex items-center h-full  top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21,0)]">
                    <div className='text-white space-y-7 font-semibold pl-10 w-1/2'>
                        <h2 className='text-5xl'>Affordable <br /> Price For Car Servicing</h2>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <button className="btn btn-active mr-6 btn-md btn-warning">Discover More</button>
                        <button className="btn btn-outline btn-md bg-opacity-10 bg-black btn-warning">Latest Project</button>
                    </div>

                </div>
                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle text-white bg-opacity-5 bg-black hover:bg-orange-500 mr-4">❮</a>
                    <a href="#slide1" className="btn btn-circle  text-white bg-opacity-5 bg-black hover:bg-orange-500">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;