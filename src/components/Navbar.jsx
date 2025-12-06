import React from "react";

const Navbar = () => {
    return (
        <nav className="flex justify-end  items-center text-white w-full h-12 bg-blue-600">
            <a href="/" className="mx-4">Home</a>
            <a href="/about" className="mx-4">About</a>
            <a href="/contact" className="mx-4">Contact</a>
        </nav>
    )
}

export default Navbar;