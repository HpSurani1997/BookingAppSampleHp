import { Hotel } from '../types';

const hotels: Hotel[] = [
  {
    id: '1',
    name: 'Silver SPA',
    location: 'Central district',
    price: 120,
    rating: '4.9',
    reviews: 325,
    image: require('../assets/hotel1.jpeg'),
    imageGradient: require('../assets/hotel1-gradient.jpeg'),
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit',
  },
  {
    id: '2',
    name: 'Bring Hotel',
    location: 'Yuki street',
    price: 70,
    rating: '5.0',
    reviews: 122,
    image: require('../assets/hotel2.jpeg'),
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit',
  },
  {
    id: '3',
    name: 'Aluna Hotel',
    location: 'Almond street',
    price: 90,
    rating: '4.0',
    reviews: 57,
    image: require('../assets/hotel3.jpeg'),
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit',
  },
  {
    id: '4',
    name: 'Green Hotel',
    location: 'Main street',
    price: 100,
    rating: '3.9',
    reviews: 98,
    image: require('../assets/hotel4.jpeg'),
    details:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Consequat nisl vel pretium lectus quam id leo. Velit euismod in pellentesque massa placerat duis ultricies lacus sed. Justo laoreet sit amet cursus sit',
  },
];

export default hotels;
