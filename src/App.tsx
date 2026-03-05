import React from "react";
import { Paintbrush } from "lucide-react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
  onAddToCart: (id: number) => void;
}

const ProductCard: React.FC<ProductProps> = ({
  id,
  name,
  price,
  imageUrl,
  category,
  onAddToCart,
}) => {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 p-4 hover:shadow-2xl transition-all">
      
      <img
        className="w-full h-48 object-cover rounded-md"
        src={imageUrl}
        alt={name}
      />

      <div className="py-4">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mt-1">
          {name}
        </h3>

        <p className="text-2xl font-semibold text-gray-900 mt-2">
          R$ {price.toFixed(2).replace(".", ",")}
        </p>
      </div>

      <button
        onClick={() => onAddToCart(id)}
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
      >
        Adicionar ao Carrinho
      </button>

    </div>
  );
};

function App() {

  const products = [
    {
      id: 1,
      name: "esmalte sintetico branco 3,6L",
      price: 89.9,
      imageUrl:
        "https://m.media-amazon.com/images/I/5156f0sCGDL._AC_SX679_.jpg",
      category: "Tintas Automotivas",
    },
    {
      id: 2,
      name: "Verniz Automotivo ",
      price: 129.9,
      imageUrl:
        "https://images.unsplash.com/photo-1581093458791-9d15482442f8",
      category: "Vernizes",
    },
    {
      id: 3,
      name: "Lixa Automotiva Grão 1200",
      price: 12.9,
      imageUrl:
        "https://images.unsplash.com/photo-1598300053653-d7d0c4d0d79f",
      category: "Acessórios Funilaria",
    },
    {
      id: 4,
      name: "Pistola de Pintura Profissional",
      price: 249.9,
      imageUrl:
        "https://images.unsplash.com/photo-1581092919534-8f5fda9f61d1",
      category: "Ferramentas",
    },
  ];

  const handleAddToCart = (id: number) => {
    console.log(`Produto ${id} adicionado ao carrinho!`);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Header */}
      <header className="bg-blue-600 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">

          <div className="flex justify-center mb-6">
            <Paintbrush className="w-16 h-16" />
          </div>

          <h1 className="text-4xl font-bold mb-4">
            Silvertintas
          </h1>

          <p className="text-xl text-blue-100">
            Sua parceira em tintas e acessórios para funilaria
          </p>

        </div>
      </header>

      {/* Produtos */}
      <section className="max-w-6xl mx-auto p-8">

        <h2 className="text-3xl font-bold mb-8 text-center">
          Produtos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              category={product.category}
              onAddToCart={handleAddToCart}
            />
          ))}

        </div>

      </section>

    </div>
  );
}

export default App;