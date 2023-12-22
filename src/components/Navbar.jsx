import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Navbar = () => {

    useEffect(() => {
        AOS.init({ duration: "1000" })
    }, [])

    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }
    return (
        <div className="container mx-auto">
            {/*<!-- Header --> */}
            <header className="border-b-1 relative z-20 w-full border rounded-full border-blue-500 bg-purple-200 shadow-lg shadow-blue-300 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <p
                            id="WindUI"
                            aria-label="WindUI logo"
                            aria-current="page"
                            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"

                        >
                            <span data-aos="fade-down"
                                data-aos-easing="linear"
                                data-aos-duration="1500" className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-emerald-600 to-purple-600 text-transparent bg-clip-text italic">Wish-TaSk</span>
                        </p>
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
                  ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
                `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2000"
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to={'/'}
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isPending ? "bold" : "",
                                            color: isActive ? "blue" : "black",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8"

                                >
                                    <span>Home</span>
                                </NavLink>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <NavLink
                                    to={'/dashboard/dashboardHome'}
                                    style={({ isActive, isPending, isTransitioning }) => {
                                        return {
                                            fontWeight: isPending ? "bold" : "",
                                            color: isActive ? "green" : "black",
                                            viewTransitionName: isTransitioning ? "slide" : "",
                                        };
                                    }}
                                    role="menuitem"
                                    aria-haspopup="false"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8"

                                >
                                    <span>Dashboard</span>
                                </NavLink>
                            </li>
                            {
                                user ? '' : <li role="none" className="flex items-stretch">
                                    <NavLink
                                        to={'/signUp'}
                                        style={({ isActive, isPending, isTransitioning }) => {
                                            return {
                                                fontWeight: isPending ? "bold" : "",
                                                color: isActive ? "green" : "black",
                                                viewTransitionName: isTransitioning ? "slide" : "",
                                            };
                                        }}
                                        role="menuitem"
                                        aria-haspopup="false"
                                        className="flex items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-8"

                                    >
                                        <span>Sign Up</span>
                                    </NavLink>
                                </li>
                            }
                        </ul>
                        {/*      <!-- Actions --> */}
                        <div data-aos="fade-down"
                            data-aos-easing="linear"
                            data-aos-duration="2500" className="ml-auto flex items-center justify-end px-6 lg:ml-0 lg:flex-1 lg:p-0">
                            {
                                user ? <img className="w-14 h-14 rounded-full" src={user?.photoURL} alt="" /> :
                                    <NavLink to='/login'>
                                        <button className="btn bg-purple-600 hover:bg-purple-800 text-white font-bold ml-2 rounded-r-full">Login</button>
                                    </NavLink>
                            }
                            {
                                user && <button onClick={handleSignOut} className="btn bg-purple-600 hover:bg-purple-800 text-white font-bold ml-2 rounded-r-full">Logout</button>
                            }
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Topbar--> */}
        </div>
    );
};

export default Navbar;