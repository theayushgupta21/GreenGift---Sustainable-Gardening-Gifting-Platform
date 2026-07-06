import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

interface Props {
    name: string;
    image: string;
    price: number;
}

export default function ProductCard({
    name,
    image,
    price,
}: Props) {
    return (
        <div className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition">

            <div className="relative h-60">
                <Image
                    src={image}
                    alt={name}
                    fill
                    loading="lazy"
                    className="object-cover"
                />
            </div>

            <div className="p-5">
                <h3 className="text-xl font-semibold">{name}</h3>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-2xl font-bold text-green-700">
                        ₹{price}
                    </p>

                    <Button className="bg-green-700 hover:bg-green-800 rounded-xl">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add
                    </Button>
                </div>
            </div>
        </div>
    );
}
