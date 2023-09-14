import parson from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 pt-10 pb-20">
            <div className="hero-content flex-col lg:flex-row ">
                <div className='lg:w-1/2 ml-12 relative'>
                    <img src={parson} className="w-3/4 rounded-lg h-[450px] shadow-2xl" />
                    <img src={parts} className=" w-2/4 rounded-lg -bottom-16 absolute right-14 shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-3 sm:text-center lg:text-left pt-20'>
                    <h3 className='text-2xl font-bold text-orange-500'>About Us</h3>
                    <h1 className="text-5xl font-bold">We are qualified <br /> & of experience <br /> in this field</h1>
                    <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                    <p className="py-6">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                    <button className="btn hover:bg-orange-600 btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;