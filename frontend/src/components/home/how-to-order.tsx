import { Search, ShoppingCart, Truck } from "lucide-react";

const steps = [
    {
        icon: Search,
        title: "Choose",
        text: "Browse plants and gardening items",
    },
    {
        icon: ShoppingCart,
        title: "Order",
        text: "Add items and place your order",
    },
    {
        icon: Truck,
        title: "Receive",
        text: "Get delivery at your doorstep",
    },
];

export default function HowToOrder() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-16">

            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">How to Order</h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {steps.map((step, index) => {
                    const Icon = step.icon;

                    return (
                        <div
                            key={index}
                            className="bg-white border rounded-2xl p-8 text-center"
                        >
                            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center">
                                <Icon className="w-8 h-8 text-green-700" />
                            </div>

                            <h3 className="text-2xl font-semibold mt-5">
                                {step.title}
                            </h3>

                            <p className="text-gray-600 mt-3">
                                {step.text}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}