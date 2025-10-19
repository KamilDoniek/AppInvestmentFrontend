'use client'
import InputField from "@/Components/auth/InputField";
import {useAuth} from "@/util/AuthContext";

export default function LoginForm() {
    const {login} = useAuth();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target)
        const authData = {
            email: formData.get("email"),
            password: formData.get("password")
        }

        try {
            await login(authData.email, authData.password);
        } catch (err) {
            throw new Error(err)
        }
    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <form onSubmit={handleSubmit}>
                {/*<AuthCard title="Welcome back" subtitle="Please enter your details to sign in">*/}
                <InputField
                    label="Email address"
                    name="email"
                    type="email"
                    // value={formData.email}
                    // onChange={handleChange}
                />
                <div className="mb-4">
                    <div className="flex justify-between items-center">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                    </div>
                    <input
                        name="password"
                        type="password"
                        // value={formData.password}
                        // onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4 transition"
                >
                    Sign in
                </button>

                <p className="text-sm text-center mt-4">
                    Don’t have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
                </p>
                {/*</AuthCard>*/}
            </form>
        </div>
    )
}