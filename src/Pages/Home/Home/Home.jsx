import Servies from "../../Services/Servies";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Servies></Servies>
        </div>
    );
};

export default Home;