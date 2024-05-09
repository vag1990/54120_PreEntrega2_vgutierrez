// create array with 5 products with id, name, price and image

const products = [
  {
    id: 1,
    title: "MESA H40",
    categoryId: "fierro",
    price: 120000,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    image: "./foto1.jpg",
    stock: 12,
  },
  {
    id: 2,
    title: "MESA 3P",
    categoryId: "fierro",
    price: 140000,
    description:
      "Slim-fitting style,  light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. .",
    image:
      "./foto2.jpg",
    stock: 12,
  },
  {
    id: 3,
    title: "MESA DUALBOX",
    categoryId: "fierro",
    price: 170000,
    description:
      "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice",
    image: "./foto3.jpg",
    stock: 12,
  },
  {
    id: 4,
    title: "MESA OVAL",
    categoryId: "terrazo",
    price: 220000,
    description:
      "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
    image: "./foto4.jpg",
    stock: 12,
  },
  {
    id: 5,
    title:
      "MESA OVALBAR",
      categoryId: "terrazo",
    price: 300000,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    image: "./foto5.jpg",
    stock: 12,
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((product) => product.id === id));
    }, 2000);
  });
};
