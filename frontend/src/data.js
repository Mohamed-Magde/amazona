const data = {
  categories: ['Shirts', 'Pants', 'Shoes'],
  products: [
    {
      _id: '1',
      name: 'Nike Slim Shirt',
      category: 'shirt',
      image: '/images/p1.jpg',
      images: ['/images/p2.jpg', '/images/p3.jpg'],
      reviews: [
        { name: 'Jaedon', comment: 'It is great', rating: 4.5 },
        { name: 'Basir', comment: 'It is good', rating: 3.5 },
      ],
      price: '60',
      brand: 'Nike',
      rating: 4.5,
      numReviews: 12,

      countInStock: 10,
      seller: {
        _id: 's1',
        seller: { name: 'Seller 1' },
      },
      description: 'sample description',
    },
    {
      _id: '2',
      name: 'Adidas Fit Shirt',
      category: 'shirt',
      image: '/images/p2.jpg',
      images: [],
      price: 70,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 123,
      countInStock: 10,
      seller: {
        _id: 's1',
        seller: { name: 'Seller 1' },
      },
      description: 'sample description',
    },
    {
      _id: '3',
      name: 'Lacoste Free Size Shirt',
      category: 'shirt',
      image: '/images/p3.jpg',
      images: [],
      price: '610',
      brand: 'Lacoste',
      rating: 4.1,
      numReviews: 133,
      countInStock: 10,
      seller: {
        _id: 's1',
        seller: { name: 'Seller 1' },
      },
      description: 'sample description',
    },
    {
      _id: '4',
      name: 'Nike Slim Pants',
      category: 'pants',
      image: '/images/p4.jpg',
      images: [],
      price: '600',
      brand: 'Nike',
      rating: 3.5,
      numReviews: 124,
      countInStock: 10,
      seller: {
        _id: 's2',
        seller: { name: 'Seller 2' },
      },
      description: 'sample description',
    },
    {
      _id: '5',
      name: 'Lacoste Fit Pants',
      category: 'pants',
      image: '/images/p5.jpg',
      images: [],
      price: '64',
      brand: 'Lacoste',
      rating: 4.7,
      numReviews: 125,
      countInStock: 10,
      seller: {
        _id: 's2',
        seller: { name: 'Seller 2' },
      },
      description: 'sample description',
    },
    {
      _id: '6',
      name: 'Under Armour Pants',
      category: 'Pants',
      image: '/images/p6.jpg',
      images: [],
      price: '68',
      brand: 'Under Armour',
      rating: 4.6,
      numReviews: 126,
      countInStock: 0,
      seller: {
        _id: 's2',
        seller: { name: 'Seller 2' },
      },
      description: 'sample description',
    },
  ],
};

export default data;
