const products = [
  {
    id: 1,
    name: "Crimson Velvet Bridal Lehenga",
    category: "Barat",
    price: 185000,
    originalPrice: 220000,
    image: "/1pic.PNG",
    images: [
      "/1pic.PNG",
    ],
    description:
      "A regal crimson velvet bridal lehenga adorned with intricate zardozi and kora work. Heavy dupatta with scalloped borders. Perfect for barat ceremony.",
    details: ["Velvet fabric", "Hand-embroidered zardozi", "Includes dupatta", "Semi-stitched", "Weight: 4.5 kg"],
    rating: 4.9,
    reviews: 12,
    inStock: true,
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Ivory Pearl Sharara Set",
    category: "Walima",
    price: 145000,
    originalPrice: 175000,
    image: "/pic2.PNG",
    images: [
      "/pic2.PNG",
    ],
    description:
      "Elegant ivory sharara set with pearl and sequin embellishments. Flowing silhouette with intricate handwork on the neckline and sleeves.",
    details: ["Chiffon fabric", "Pearl embellishments", "Includes sharara + kameez", "Stitched to measure", "Weight: 3.2 kg"],
    rating: 4.8,
    reviews: 8,
    inStock: true,
    badge: "New Arrival",
  },
  {
    id: 3,
    name: "Maroon Gotta Patti Lehenga",
    category: "Mehndi",
    price: 125000,
    originalPrice: 155000,
    image: "/pic3.PNG",
    images: [
      "/pic3.PNG",
    ],
    description:
      "Vibrant maroon lehenga with traditional gotta patti work. Colorful thread embroidery with mirror work accents. Ideal for mehndi celebrations.",
    details: ["Silk fabric", "Gotta patti work", "Mirror work accents", "Semi-stitched", "Weight: 3.8 kg"],
    rating: 4.7,
    reviews: 15,
    inStock: true,
    badge: "Trending",
  },
  {
    id: 4,
    name: "Gold Tilla Work Bridal Gown",
    category: "Barat",
    price: 210000,
    originalPrice: 250000,
     image: "/pic4.PNG",
    images: [
      "/pic4.PNG",
    ],
    description:
      "Magnificent gold bridal gown featuring elaborate tilla and dabka work. Floor-length design with trailing veil. A showstopper for your barat.",
    details: ["Organza fabric", "Tilla & dabka work", "Floor-length gown", "With trailing veil", "Weight: 5.2 kg"],
    rating: 5.0,
    reviews: 6,
    inStock: true,
    badge: "Premium",
  },
  {
    id: 5,
    name: "Dusty Rose Net Lehenga",
    category: "Walima",
    price: 165000,
    originalPrice: 195000,
    image: "/pic5.PNG",
    images: [
      "/pic5.PNG",
    ],
    description:
      "Soft dusty rose net lehenga with crystal and sequin work. Delicate floral patterns cascading down the skirt. Dreamy walima look.",
    details: ["Net fabric", "Crystal embellishments", "Includes dupatta", "Semi-stitched", "Weight: 3.5 kg"],
    rating: 4.9,
    reviews: 11,
    inStock: true,
    badge: "Popular",
  },
  {
    id: 6,
    name: "Emerald Green Velvet Suit",
    category: "Mehndi",
    price: 95000,
    originalPrice: 120000,
    image: "/pic6.PNG",
    images: [
      "/pic6.PNG",
    ],
    description:
      "Rich emerald green velvet kurta with gold thread embroidery. Paired with straight pants and a contrasting dupatta.",
    details: ["Velvet fabric", "Gold thread work", "Kurta + pants + dupatta", "Stitched to measure", "Weight: 2.8 kg"],
    rating: 4.6,
    reviews: 9,
    inStock: true,
    badge: "",
  },
 
];

export const categories = ["All", "Barat", "Walima", "Mehndi"];

export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}

export function getProductsByCategory(category) {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}

export function formatPrice(price) {
  return new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export default products;
