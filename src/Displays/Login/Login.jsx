import '../../Styles/App.css'
import {useState} from "react";
import { Link } from 'react-router-dom';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Username submitted:', username);
        console.log('Password submitted:', password);
        // Lakukan sesuatu dengan nilai username dan password, seperti mengirim ke server, dll.

    };
    return(
        <>

            <header className="bg-orange-300 text-white p-4 w-full h-16 flex"></header>
        <div id="terluar" >

            <div id="bg-login" className=" justify-center flex w-full h-full">
                <div id="img-login" className="w-full h-full absolute">
                    <div id="logo" className="flex flex-row justify-start absolute">
                        <img src="../../assets/react.svg" alt="" className="w-16 bg-orange-300  h-9 ml-8 mt-5"/>
                        <img src="../../assets/react.svg" alt="" className="w-full bg-orange-300  h-9 mt-5"/>
                    </div>
                </div>
                <div id="login-box"
                     className="flex flex-col justify-center items-center w-1/4 mt-32 mb-16 h-fit bg-orange-300 rounded-l relative">
                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <img
                                className="mx-auto h-10 w-auto"
                                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                alt="Your Company"
                            />
                            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" action="home" method="POST">
                                <div>
                                    <label htmlFor="email"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Email address
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            autoComplete="email"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password"
                                               className="block text-sm font-medium leading-6 text-gray-900">
                                            Password
                                        </label>
                                    </div>
                                    <div className="mt-2">
                                        <input
                                            id="password"
                                            name="password"
                                            type="password"
                                            autoComplete="current-password"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <Link to="/home">
                                        <button
                                            type="submit"
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </Link>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </div>
            <footer id="footer" className="bg-orange-300 h-16 w-full static bottom-0"></footer>
        </>
    )

}

export default Login;