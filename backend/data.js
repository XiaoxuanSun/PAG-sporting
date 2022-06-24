import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Alice',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Tony',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shrits',
      image: '/images/d1.jpg', // 679px * 829px
      price: 0.12,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality pant from Nike',
    },
    {
      // _id: '2',
      name: 'Adidas Fit Shirt',
      slug: 'adidas-fit-shirt',
      category: 'Shrits',
      image: '/images/p2',
      price: 0.25,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.2,
      numReviews: 10,
      description: 'high quality shirt from Adidas',
    },
    {
      // _id: '3',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p3',
      price: 0.52,
      countInStock: 5,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 14,
      description: 'high quality shirt from Nike',
    },
    {
      // _id: '4',
      name: 'Adidas Fit Pant',
      slug: 'adidas-fit-pant',
      category: 'Pants',
      image: '/images/p4',
      price: 0.65,
      countInStock: 8,
      brand: 'Puma',
      rating: 4.5,
      numReviews: 12,
      description: 'high quality pant from Puma',
    },
  ],
};
export default data;
