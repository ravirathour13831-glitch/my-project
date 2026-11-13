
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Explore", path: "/explore" },
        { name: "Profile", path: "/profile" },
        { name: "FeaturedCarousel", path: "/FeaturedCarousel" },
        {name : "image" , path : "/image"}
    ]

    return (
        <nav className="relative flex justify-between items-center bg-red-100 px-6 py-4">

            {/* Website Logo */}
            <h1 className="text-2xl font-bold text-blue-700">
                EventSphere
            </h1>

            {/* Desktop Navbar */}
            <div className="hidden md:flex items-center gap-6">
                {navLinks.map((link) => (
                    <Link
                        key={link.path}
                        to={link.path}
                        className="text-gray-700 font-semibold hover:text-blue-600 transition"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-xl bg-blue-600 text-white text-2xl shadow-md hover:bg-blue-700 transition"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? "✕" : "☰"}
            </button>

            {/* Mobile Dropdown */}
            {menuOpen && (
                <div className="absolute md:hidden top-full right-6 mt-2 w-52 bg-white rounded-xl shadow-xl border border-gray-200 p-2 z-50 flex flex-col gap-1">

                    {navLinks.map((link) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={() => setMenuOpen(false)}
                            className="px-4 py-3 rounded-lg text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
                        >
                            {link.name}
                        </Link>
                    ))}

                </div>
            )}

        </nav>
    )
}

export default Navbar
