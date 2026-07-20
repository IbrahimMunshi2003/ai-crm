interface Props {
  search: string;
  setSearch: (value: string) => void;

  product: string;
  setProduct: (value: string) => void;

  sentiment: string;
  setSentiment: (value: string) => void;

  products: string[];
}

export default function FollowupFilters({
  search,
  setSearch,
  product,
  setProduct,
  sentiment,
  setSentiment,
  products,
}: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5">

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        {/* Search */}

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Doctor..."
          className="border border-gray-300 rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Product */}

        <select
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="border border-gray-300 rounded-lg p-3"
        >
          <option value="">All Products</option>

          {products.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>

        {/* Sentiment */}

        <select
          value={sentiment}
          onChange={(e) => setSentiment(e.target.value)}
          className="border border-gray-300 rounded-lg p-3"
        >
          <option value="">All Sentiments</option>
          <option value="Positive">Positive</option>
          <option value="Neutral">Neutral</option>
          <option value="Negative">Negative</option>
        </select>

        {/* Reset */}

        <button
          onClick={() => {
            setSearch("");
            setProduct("");
            setSentiment("");
          }}
          className="rounded-lg bg-slate-800 text-white px-4 py-3 hover:bg-slate-700 transition"
        >
          Clear Filters
        </button>

      </div>

    </div>
  );
}