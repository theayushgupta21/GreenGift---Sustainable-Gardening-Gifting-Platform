import {
    BadgeCheck,
    Truck,
    Wallet,
} from "lucide-react";

const badges = [
    {
        icon: Wallet,
        title: "Cash on Delivery",
    },
    {
        icon: Truck,
        title: "Local Fast Delivery",
    },
    {
        icon: BadgeCheck,
        title: "Easy Returns",
    },
];

export default function TrustBadges() {
    return (
        <section className="bg-green-800 text-white py-10">

            <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">

                {badges.map((badge, index) => {
                    const Icon = badge.icon;

                    return (
                        <div
                            key={index}
                            className="flex items-center justify-center gap-4"
                        >
                            <Icon className="w-10 h-10" />

                            <h3 className="text-xl font-semibold">
                                {badge.title}
                            </h3>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}