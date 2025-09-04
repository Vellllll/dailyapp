import Button from "../components/button";

export default function Login() {
    return (
        <div className="bg-white h-screen">
            <div className="h-1/4 flex items-center justify-center">
                <h1 className="font-light text-4xl">Hi <span className="font-semibold">Arvel!</span></h1>
            </div>
            <div className="bg-lime-200 min-h-3/4 rounded-t-[50px] py-10 w-full">
                <div className="w-3/4 mx-auto">
                    <h1 className="font-bold text-3xl text-lime-900">Log In</h1>
                    <p className="font-light mb-5 text-lime-900">Please login to access features!</p>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Username</label>
                        <input type="text" className="p-2 rounded-md bg-white w-full" placeholder="Username" />
                    </div>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Password</label>
                        <input type="password" className="p-2 rounded-md bg-white w-full" placeholder="Password" />
                    </div>
                    <Button buttonName="Login"></Button>
                    <p className="text-sm text-lime-900 text-center mt-3">
                        <a href="/register">Register here!</a>
                    </p>
                </div>
            </div>
        </div>
    );
}