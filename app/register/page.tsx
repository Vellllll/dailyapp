import Button from "../components/button";

export default function Register () {
    return (
        <div className="bg-white h-screen">
            <div className="h-1/4 flex items-center justify-center">
                <h1 className="font-light text-4xl">Hi <span className="font-semibold">Arvel!</span></h1>
            </div>
            <div className="bg-lime-200 min-h-3/4 rounded-t-[50px] py-10 w-full">
                <div className="w-3/4 mx-auto">
                    <h1 className="font-bold text-3xl text-lime-900">Register</h1>
                    <p className="font-light mb-5 text-lime-900">Please register to access features!</p>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Username</label>
                        <input type="text" className="p-2 rounded-md bg-white w-full" placeholder="Username" />
                    </div>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Email</label>
                        <input type="email" className="p-2 rounded-md bg-white w-full" placeholder="Email" />
                    </div>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Current Job</label>
                        <select name="job" id="job" className="p-2 rounded-md bg-white w-full">
                            <option value="">Please select your job</option>
                            <option value="0">Enterpreneur</option>
                            <option value="1">Software Engineer</option>
                            <option value="2">Others</option>
                        </select>
                    </div>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Password</label>
                        <input type="password" className="p-2 rounded-md bg-white w-full" placeholder="Password" />
                    </div>
                    <div className="mb-5 mx-auto">
                        <label htmlFor="username" className="block font-semibold mb-2 text-lime-900">Password Confirmation</label>
                        <input type="password" className="p-2 rounded-md bg-white w-full" placeholder="Password Confirmation" />
                    </div>
                    <Button buttonName="Register"></Button>
                    <p className="text-sm text-lime-900 text-center mt-3">
                        <a href="/login">Login here!</a>
                    </p>
                </div>
            </div>
        </div>
    );
}