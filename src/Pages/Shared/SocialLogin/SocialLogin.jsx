import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider/AuthProvider";


const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const handleGooleSign = () => {
        googleSignIn();
    }
    return (
        <div>
            <div className="divider">OR</div>
            <div className="text-center mb-5">
                <button onClick={handleGooleSign} className="btn btn-square btn-outline">
                    G
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;