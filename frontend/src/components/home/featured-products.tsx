import { featuredProducts } from "@/lib/data";
import ProductCard from "../products/product-card";

export default function FeaturedProducts() {
    return (
        <section className="bg-[#eef5ea] py-16">

            <div className="max-w-7xl mx-auto px-4">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-3xl font-bold">
                            Best Selling Products
                        </h2>

                        <p className="text-gray-600 mt-2">
                            Trusted by home gardeners
                        </p>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {featuredProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            image={product.image}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
