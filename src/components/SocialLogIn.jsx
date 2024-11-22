import { FaGithub, FaGoogle } from "react-icons/fa6";
const SocialLogIn = () => {
    return (
        <div>
            <div>
                <h2 className="font-semibold mb-3">LogIn With</h2>
            </div>
            <div className="*:w-full space-y-2">
            <button className="btn"> <FaGoogle></FaGoogle>Login With Google </button>
            <button className="btn"> <FaGithub></FaGithub> Login With Github </button>
            </div>
        </div>
    );
};

export default SocialLogIn;