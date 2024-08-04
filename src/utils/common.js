function createData(name, orderNo, amount, status, pic) {
  return {
    name,
    orderNo,
    amount,
    status,
    pic,
  };
}

export const rows = [
  createData(
    "Wade Warren",
    15478256,
    124.0,
    "Delivered",
    "https://shorturl.at/jYaYc"
  ),
  createData(
    "Jane Cooper",
    48965786,
    365.02,
    "Delivered",
    "https://shorturl.at/bLZXR"
  ),
  createData(
    "Guy Hawkins",
    78958215,
    45.88,
    "Cancelled",
    "https://shorturl.at/zpSi2"
  ),
  createData(
    "Kristin Watson",
    20965732,
    65,
    "Pending",
    "https://shorturl.at/yTNQN"
  ),
  createData(
    "Cody Fisher",
    95715620,
    545,
    "Delivered",
    "https://shorturl.at/heXo4"
  ),
  createData(
    "Savannah Nguyen",
    78514568,
    128.2,
    "Delivered",
    "https://shorturl.at/XXCYZ"
  ),
];

export const CustomerReviewData = [
  {
    pic: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Jenny Wilson",
    rating: 4,
    briefs:
      "The food was excellent, and so was the service. I had mushroom with some biriyani which was awesome. I had burger over greens which also was very good. Overall it was an amazing experience.",
  },
  {
    pic: "https://randomuser.me/api/portraits/men/45.jpg",
    name: "John Doe",
    rating: 5,
    briefs:
      "Absolutely wonderful! The ambiance, the food, the service, everything was perfect. The pasta was the best I've ever had.",
  },
  {
    pic: "https://randomuser.me/api/portraits/women/46.jpg",
    name: "Alice Smith",
    rating: 3,
    briefs:
      "The food was decent but the service could be better. The pizza was a bit cold when it arrived, but the dessert made up for it.",
  },
  {
    pic: "https://randomuser.me/api/portraits/men/47.jpg",
    name: "Robert Brown",
    rating: 4,
    briefs:
      "Great place for a family dinner. The kids loved the fries, and the steak was cooked to perfection. Will visit again.",
  },
  {
    pic: "https://randomuser.me/api/portraits/women/48.jpg",
    name: "Emily Davis",
    rating: 5,
    briefs:
      "A delightful experience from start to finish. The sushi was fresh and the cocktails were amazing. Highly recommended.",
  },
  {
    pic: "https://randomuser.me/api/portraits/men/49.jpg",
    name: "Michael Johnson",
    rating: 2,
    briefs:
      "Not the best experience. The wait was too long and the food was average. Might give it another try on a less busy day.",
  },
  {
    pic: "https://randomuser.me/api/portraits/women/50.jpg",
    name: "Sophia Martinez",
    rating: 4,
    briefs:
      "Loved the ambiance and the food was delicious. The seafood platter was particularly good. Service was a bit slow though.",
  },
  {
    pic: "https://randomuser.me/api/portraits/men/51.jpg",
    name: "David Lee",
    rating: 3,
    briefs:
      "The atmosphere was nice but the food didn't live up to the hype. The salad was bland but the main course was alright.",
  },
];
