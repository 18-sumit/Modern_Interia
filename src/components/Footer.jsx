const Footer = () => {
    return (
        // <footer className="w-full bg-gray-800 text-white">
        <div className="justify-between">
            {/* Constrain the content to a max width */}
            <div className="max-w-screen-xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column 1 */}
                <div>
                    <h3 className=" text-xl font-bold ">Modern</h3>
                    <h3 className="text-secondary text-xl font-bold">Interia</h3>
                    <p className="mt-2 text-sm">
                        Creating Inspiring Spaces for Modern Living
                    </p>
                </div>

                {/* Column 2 */}
                <div>
                    <h3 className="font-bold text-lg">Our Services</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Interior Design</li>
                        <li>Outdoor Design</li>
                        <li>Office Design</li>
                        <li>Painting Work</li>
                    </ul>
                </div>

                {/* Column 3 */}
                <div>
                    <h3 className="font-bold text-lg">Contact</h3>
                    <ul className="mt-2 space-y-2 text-sm">
                        <li>Phone: 998770854</li>
                        <li>Email: moderninteria200@gmail.com</li>
                        <li>Address: Wagle Estate, Thane</li>
                    </ul>
                </div>
            </div>
        </div>
        // </footer>

    )
};

export default Footer
