import Image from "next/image";

interface Props {
    name: string;
    image: string;
}

export default function CategoryCard({ name, image }: Props) {
    return (
        <div className="bg-white rounded-2xl p-4 border hover:shadow-lg transition cursor-pointer">

            <div className="relative w-full h-44">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover rounded-xl"
                />
            </div>

            <h3 className="text-xl font-semibold text-center mt-4">
                {name}
            </h3>
        </div>
    );
}
