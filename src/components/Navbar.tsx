function Navbar() {
    return (
        <div className="navbar fixed top-0 left-0 right-0 z-50 bg-gray-900/20 backdrop-blur-md shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl text-white">Aflah Alifu</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li>
                        <a href="#education">Education</a>
                    </li>
                    <li>
                        <a href="#achievement">Achievement</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
