'use client'
import InputField from "@/Components/auth/InputField";
import {useState} from "react";
import {useAuth} from "@/util/AuthContext";
import Link from "next/link";

export default function RegisterForm() {
    const {register} = useAuth();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [error, setError] = useState("")
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prevState) => ({...prevState, [name]: value}))
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("")
        if (!formData.email.includes("@")) {
            setError("Podaj poprawny adres email");
            return;
        }

        if (formData.password.length < 6) {
            setError("Hasło musi mieć co najmniej 6 znaków");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setError("Hasła muszą być takie same");
            return;
        }
        register(formData.email, formData.password, formData.firstName, formData.lastName)

    }
    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
            <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <InputField label="First Name" name="firstName" value={formData.firstName}
                                onChange={handleChange}/>
                    <InputField label="Last Name" name="lastName" value={formData.lastName}
                                onChange={handleChange}/>
                </div>
                <InputField label="Email address" name="email" type="email" value={formData.email}
                            onChange={handleChange}/>
                <InputField label="Password" name="password" type="password" value={formData.password}
                            onChange={handleChange}/>
                <InputField label="Confirm Password" name="confirmPassword" type="password"
                            value={formData.confirmPassword} onChange={handleChange}/>
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}

                <button type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 mt-4 transition">
                    Create Account
                </button>
                <p className="text-sm text-center mt-4">
                    Already have an account? <Link href="/login" className="text-blue-600 hover:underline">Sign
                    in</Link>
                </p>
            </form>
        </div>
    )
}