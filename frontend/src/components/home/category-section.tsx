import { categories } from "@/lib/data";
import CategoryCard from "../products/category-card";

export default function CategorySection() {
    return (
        <section className="max-w-7xl mx-auto px-4 py-14">

            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold">Shop by Category</h2>
                <p className="text-gray-600 mt-2">
                    Everything you need for your garden
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
                {categories.map((category) => (
                    <CategoryCard
                        key={category.id}
                        name={category.name}
                        image={category.image}
                    />
                ))}
            </div>
        </section>
    );
}
