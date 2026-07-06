import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-[#2d3a2f] text-white mt-20">

            <div className="max-w-7xl mx-auto px-4 py-14 grid md:grid-cols-4 gap-8">

                <div>
                    <h2 className="text-2xl font-bold">
                        Green Nursery
                    </h2>

                    <p className="mt-4 text-gray-300">
                        Bringing nature closer to every home.
                    </p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>

                    <div className="space-y-2">
                        <Link href="/">Home</Link><br />
                        <Link href="/shop">Shop</Link><br />
                        <Link href="/about">About</Link>
                    </div>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">Contact</h3>

                    <p>+91 98765 43210</p>
                    <p>support@greennursery.com</p>
                </div>

                <div>
                    <h3 className="font-semibold mb-4">
                        WhatsApp Orders
                    </h3>

                    <button className="bg-green-600 px-5 py-3 rounded-xl font-semibold">
                        Chat on WhatsApp
                    </button>
                </div>
            </div>
        </footer>
    );
}