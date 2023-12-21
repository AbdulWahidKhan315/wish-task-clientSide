/* eslint-disable react/no-unescaped-entities */
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full container mx-auto mt-12">
            {/*      <!-- Main footer --> */}
            <div className="border-t border-slate-200 bg-purple-200 pt-16 pb-12 text-sm">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
                        <div
                            className="col-span-4 md:col-span-8 lg:col-span-4"
                            aria-labelledby="footer-header"
                        >
                            <a
                                id="WindUI-5-logo"
                                aria-label="WindUI logo"
                                aria-current="page"
                                className="mb-6 flex items-center gap-2 whitespace-nowrap text-base font-medium leading-6 text-slate-700 focus:outline-none"
                                href="javascript:void(0)"
                            >
                                <span className="text-3xl font-bold bg-gradient-to-r from-blue-500 via-emerald-600 to-purple-600 text-transparent bg-clip-text italic animate-bounce">Wish-TaSk</span>
                            </a>
                            <p>
                            This is a website for managing your task very easily. We are going to help you profoundly for managing your task without any hastle. By using this website you will get the premium services from our website.
                            </p>
                        </div>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-product-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-slate-700"
                                id="footer-product-5-logo"
                            >
                                Product
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Features
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Customers
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Why us?
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Pricing
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-docs-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-slate-700"
                                id="footer-docs-5-logo"
                            >
                                Docs & Help
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Documentation
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Training
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        System status
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        FAQ's
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Help Center
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-about-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-slate-700"
                                id="footer-about-5-logo"
                            >
                                About us
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        About us
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Careers
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Leadership
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Blog
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="javascript:void(0)"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        Events
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <nav
                            className="col-span-2 md:col-span-4 lg:col-span-2"
                            aria-labelledby="footer-get-in-touch-5-logo"
                        >
                            <h3
                                className="mb-6 text-base font-medium text-slate-700"
                                id="footer-get-in-touch-5-logo"
                            >
                                Social Links
                            </h3>
                            <ul>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="https://www.facebook.com/wkwahid315/"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        <FaFacebook className='text-3xl text-purple-600'></FaFacebook>
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="https://www.linkedin.com/in/abdul-wahid-khan-99bb802a4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        <FaLinkedin className='text-3xl text-purple-600'></FaLinkedin>
                                    </a>
                                </li>
                                <li className="mb-2 leading-6">
                                    <a
                                        href="https://github.com/AbdulWahidKhan315"
                                        className="transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600"
                                    >
                                        <FaGithub className='text-3xl text-purple-600'></FaGithub>
                                    </a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;