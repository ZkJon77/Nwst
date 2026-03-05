import React, { useState } from "react";
import { Paintbrush } from "lucide-react";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  category: string;
}

interface ProductProps extends Product {
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
    <div className="rounded-lg shadow-lg bg-white border p-4 hover:shadow-xl transition">

      <img
        src={imageUrl}
        alt={name}
        className="w-full h-48 object-cover rounded"
      />

      <div className="py-3">

        <span className="text-xs text-blue-600 font-bold uppercase">
          {category}
        </span>

        <h3 className="text-lg font-bold text-gray-800">
          {name}
        </h3>

        <p className="text-xl font-semibold mt-1">
          R$ {price.toFixed(2).replace(".", ",")}
        </p>

      </div>

      <button
        onClick={() => onAddToCart(id)}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
      >
        Adicionar ao Carrinho
      </button>

    </div>
  );
};

function App() {

  const [page, setPage] = useState("produtos");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [carCode, setCarCode] = useState("");

  const categories = [
    "Todos",
    "Tintas",
    "Vernizes",
    "Thinner",
    "Esmaltes",
    "Acessórios",
    "Ferramentas",
  ];

  const products: Product[] = [

    // TINTAS
    {
      id: 1,
      name: "Tinta PU Automotiva Preto 3,6L",
      price: 189.9,
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.4zWZc9f3nS2uR6pTj6m0UQHaHa",
      category: "Tintas",
    },
    {
      id: 2,
      name: "Primer PU Cinza 3,6L",
      price: 149.9,
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.qO6MysNn7M8jYzY2wqKz6QHaHa",
      category: "Tintas",
    },

    // VERNIZES
    {
      id: 3,
      name: "Verniz PU Auto Luks Kit Catalisador",
      price: 129.9,
      imageUrl: "https://cdn.awsli.com.br/2500x2500/1869/1869036/produto/153855114/3ca522bacc.jpg",
      category: "Vernizes",
    },
    {
      id: 4,
      name: "Verniz Alto Brilho 2K 900ml",
      price: 59.9,
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.S1A3E0wPj6q4K2fW7ZP3yAHaHa",
      category: "Vernizes",
    },

    // THINNER
    {
      id: 5,
      name: "Thinner 900ml Anjo",
      price: 19.9,
      imageUrl: "https://cdn.awsli.com.br/600x700/1347/1347540/produto/53873337/thinner-900ml-anjo.jpg",
      category: "Thinner",
    },
    {
      id: 6,
      name: "Thinner Automotivo 5L",
      price: 79.9,
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.t7f9S7YoY4-lqYh6xK-EdAHaHa",
      category: "Thinner",
    },

    // ESMALTES
    {
      id: 7,
      name: "Esmalte Sintético Branco 3,6L",
      price: 89.9,
      imageUrl: "https://m.media-amazon.com/images/I/5156f0sCGDL._AC_SX679_.jpg",
      category: "Esmaltes",
    },
    {
      id: 8,
      name: "Esmalte Sintético Preto 900ml",
      price: 39.9,
      imageUrl: "https://tse3.mm.bing.net/th/id/OIP.wLkWg5p0FZsPZt8cQh4M6QHaHa",
      category: "Esmaltes",
    },

    // ACESSORIOS
    {
      id: 9,
      name: "Lixa Seco 3M",
      price: 12.9,
      imageUrl: "https://tse1.mm.bing.net/th/id/OIP.DiVr9zcgxxO9nhRw7rS2xQHaHa",
      category: "Acessórios",
    },
    {
      id: 10,
      name: "Fita Crepe Automotiva 3M",
      price: 14.9,
      imageUrl: "https://tse2.mm.bing.net/th/id/OIP.h9V1oQeQ5KXx8kJvU9oTzwHaHa",
      category: "Acessórios",
    },
    {
      id: 11,
      name: "Espátula Plástica",
      price: 9.9,
      imageUrl: "https://tse4.mm.bing.net/th/id/OIP.6vO9X4Z9iE8vVqT5Y1C5DQHaHa",
      category: "Acessórios",
    },

    // FERRAMENTAS
    {
      id: 12,
      name: "Pistola de Pintura HVLP Pro-530",
      price: 249.9,
      imageUrl: "https://casadosoldador.com.br/files/products_images/18952/pistola-de-pintura-hvlp-pro-530-bico-13-600ml-pdr-casa-do-soldador-01.jpg",
      category: "Ferramentas",
    },
  ];

  const filteredProducts =
    selectedCategory === "Todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleAddToCart = (id: number) => {
    console.log("Produto adicionado:", id);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      {/* HEADER */}

      <header className="bg-blue-600 text-white p-6 flex justify-between">

        <div className="flex items-center gap-3">
          <Paintbrush size={32} />
          <h1 className="text-2xl font-bold">Silvertintas</h1>
        </div>

        <div className="flex gap-4">

          <button onClick={() => setPage("produtos")}>
            Produtos
          </button>

          <button onClick={() => setPage("cor")}>
            Código da Cor
          </button>

        </div>

      </header>

      {/* PAGINA PRODUTOS */}

      {page === "produtos" && (
        <section className="p-8 max-w-6xl mx-auto">

          <h2 className="text-3xl font-bold text-center mb-6">
            Produtos
          </h2>

          {/* categorias */}

          <div className="flex flex-wrap justify-center gap-3 mb-8">

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === cat
                    ? "bg-blue-600 text-white"
                    : "bg-white border"
                }`}
              >
                {cat}
              </button>
            ))}

          </div>

          {/* produtos */}

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">

            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={handleAddToCart}
              />
            ))}

          </div>

        </section>
      )}

      {/* PAGINA CODIGO DA COR */}

      {page === "cor" && (
        <section className="max-w-xl mx-auto p-10">

          <h2 className="text-3xl font-bold text-center mb-6">
            Consultar Código da Cor
          </h2>

          <div className="bg-white p-6 rounded shadow">

            <label className="block mb-2 font-semibold">
              Digite o código da peça do carro
            </label>

            <input
              type="text"
              value={carCode}
              onChange={(e) => setCarCode(e.target.value)}
              placeholder="Ex: NH731P"
              className="w-full border p-2 rounded"
            />

            <button
              className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
              onClick={() =>
                alert(
                  `Código enviado ao colorista: ${carCode}`
                )
              }
            >
              Consultar Cor
            </button>

          </div>

        </section>
      )}

    </div>
  );
}

export default App;