import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";

export default function MyProfile() {

    const user = {
        name: "Ratul Islam",
        email: "abc@gmail.com",
        avatar: "https://i.postimg.cc/tTrkryQT/fd740456-d67d-4dfd-b94b-c27fea73af5b.png",
        joined: "Jan 2019",
    };


    const handleBtn = () => {
        toast.error("Cooming soon")
    }

    return (


        <motion.div
            className="w-full min-h-screen bg-base-100 py-10 px-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
        >

            <Helmet>
                <title>AppStore | MyProfile</title>
            </Helmet>

            {/* Header Section */}
            <div className="max-w-5xl mx-auto bg-base-200 p-8 rounded-2xl shadow-lg">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img
                        src={user.avatar}
                        alt="User Avatar"
                        className="w-36 h-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 shadow-md"
                    />
                    <div>
                        <h1 className="text-3xl font-bold text-primary">{user.name}</h1>
                        <p className="text-gray-500">{user.email}</p>
                        <p className="mt-1">Member since: <span className="font-medium">{user.joined}</span></p>

                        <div className="mt-4 flex flex-wrap gap-3">
                            <button onClick={handleBtn} className="btn btn-primary btn-sm">Edit Profile</button>
                            <button onClick={handleBtn} className="btn btn-outline btn-sm">Change Password</button>
                            <button onClick={handleBtn} className="btn btn-error btn-sm">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="max-w-5xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="bg-primary text-white rounded-xl p-6 shadow hover:scale-105 transition">
                    <h3 className="text-2xl font-bold">16</h3>
                    <p className="text-sm">Uploaded Apps</p>
                </div>
                <div className="bg-secondary text-white rounded-xl p-6 shadow hover:scale-105 transition">
                    <h3 className="text-2xl font-bold">5</h3>
                    <p className="text-sm">Favorites</p>
                </div>
                <div className="bg-accent text-white rounded-xl p-6 shadow hover:scale-105 transition">
                    <h3 className="text-2xl font-bold">3</h3>
                    <p className="text-sm">Reviews Given</p>
                </div>
            </div>
        </motion.div>
    );
}
