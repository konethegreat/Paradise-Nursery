const plants = [
  // Category: Air Purifying
  {
    id: 1,
    name: 'Snake Plant',
    price: 15.99,
    category: 'Air Purifying',
    thumbnail: 'https://www.bhg.com/thmb/h5vIDXD47AHv85E-6QEE6j4VJFc=/1280x0/filters:no_upscale():strip_icc()/BHG-snake-plant-e4b34e86b6874f62a0c8d73e8f7e30b8.jpg',
  },
  {
    id: 2,
    name: 'Spider Plant',
    price: 12.50,
    category: 'Air Purifying',
    thumbnail: 'https://www.bhg.com/thmb/oDnjlrHprd67aYvinrMfQgVUPtQ=/5332x0/filters:no_upscale():strip_icc()/BHG-spider-plant-c0e0fdd5ec6e4c1588998ce3167f6579.jpg',
  },
  {
    id: 3,
    name: 'Pothos',
    price: 11.99,
    category: 'Air Purifying',
    thumbnail: 'https://www.bhg.com/thmb/Ee2FeqUVuLAYfvNOVRLKSGqJ8tU=/1280x0/filters:no_upscale():strip_icc()/BHG-golden-pothos-f16e5e8c4f7a9e1b2c3d4e5f.jpg',
  },
  {
    id: 4,
    name: 'Peace Lily',
    price: 13.50,
    category: 'Air Purifying',
    thumbnail: 'https://www.bhg.com/thmb/2RB8f_uX9nQzJyVQqI5YfQKr2L0=/1280x0/filters:no_upscale():strip_icc()/BHG-peace-lily-air-purifier-a1b2c3d4e5f6g7h8.jpg',
  },
  {
    id: 5,
    name: 'Dracaena',
    price: 16.99,
    category: 'Air Purifying',
    thumbnail: 'https://www.bhg.com/thmb/vXqZwYpLrTuVsRqOpNmLkJiHgFe=/1280x0/filters:no_upscale():strip_icc()/BHG-dracaena-marginata-b2c3d4e5f6g7h8i9.jpg',
  },
  // Category: Aromatic
  {
    id: 6,
    name: 'Lavender',
    price: 9.99,
    category: 'Aromatic',
    thumbnail: 'https://www.bhg.com/thmb/qFfBqaWpN4qZ1YqZxY9oXdWnqtI=/1280x0/filters:no_upscale():strip_icc()/BHG-lavender-plant-aromatic-c3d4e5f6g7h8i9j0.jpg',
  },
  {
    id: 7,
    name: 'Rosemary',
    price: 8.75,
    category: 'Aromatic',
    thumbnail: 'https://www.bhg.com/thmb/JnKLmNoPqRsT9uVwXyZ0-Abc1De=/1280x0/filters:no_upscale():strip_icc()/BHG-rosemary-herb-d4e5f6g7h8i9j0k1.jpg',
  },
  {
    id: 8,
    name: 'Mint',
    price: 7.50,
    category: 'Aromatic',
    thumbnail: 'https://www.bhg.com/thmb/FgHiJkLmNoPqRsTuVwXyZ0-A/1280x0/filters:no_upscale():strip_icc()/BHG-mint-plant-aromatic-e5f6g7h8i9j0k1l2.jpg',
  },
  {
    id: 9,
    name: 'Basil',
    price: 6.99,
    category: 'Aromatic',
    thumbnail: 'https://www.bhg.com/thmb/BcDeFgHiJkLmNoPqRsT9uVwX/1280x0/filters:no_upscale():strip_icc()/BHG-basil-herb-f6g7h8i9j0k1l2m3.jpg',
  },
  {
    id: 10,
    name: 'Thyme',
    price: 8.25,
    category: 'Aromatic',
    thumbnail: 'https://www.bhg.com/thmb/xYzAbCdEfGhIjKlMnOpQrSt0/1280x0/filters:no_upscale():strip_icc()/BHG-thyme-herb-g7h8i9j0k1l2m3n4.jpg',
  },
  // Category: Flowering
  {
    id: 11,
    name: 'Anthurium',
    price: 18.00,
    category: 'Flowering',
    thumbnail: 'https://www.bhg.com/thmb/pQrStUvWxYzAbCdEfGhIjKlM/1280x0/filters:no_upscale():strip_icc()/BHG-anthurium-flamingo-h8i9j0k1l2m3n4o5.jpg',
  },
  {
    id: 12,
    name: 'African Violet',
    price: 7.99,
    category: 'Flowering',
    thumbnail: 'https://www.bhg.com/thmb/nOpQrStUvWxYzAbCdEfGhIjK/1280x0/filters:no_upscale():strip_icc()/BHG-african-violet-i9j0k1l2m3n4o5p6.jpg',
  },
  {
    id: 13,
    name: 'Orchid',
    price: 22.50,
    category: 'Flowering',
    thumbnail: 'https://www.bhg.com/thmb/lMnOpQrStUvWxYzAbCdEfGhI/1280x0/filters:no_upscale():strip_icc()/BHG-orchid-phalaenopsis-j0k1l2m3n4o5p6q7.jpg',
  },
  {
    id: 14,
    name: 'Begonia',
    price: 10.50,
    category: 'Flowering',
    thumbnail: 'https://www.bhg.com/thmb/jKlMnOpQrStUvWxYzAbCdEfG/1280x0/filters:no_upscale():strip_icc()/BHG-begonia-wax-k1l2m3n4o5p6q7r8.jpg',
  },
  {
    id: 15,
    name: 'Geranium',
    price: 9.75,
    category: 'Flowering',
    thumbnail: 'https://www.bhg.com/thmb/hIjKlMnOpQrStUvWxYzAbCdE/1280x0/filters:no_upscale():strip_icc()/BHG-geranium-flowering-l2m3n4o5p6q7r8s9.jpg',
  },
];

export default plants;