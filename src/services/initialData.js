const initialState = {
  applePay: false,
  notification: {
    message: "Notification message",
    countdownTime: "2016-09-11T21:00:00.000Z"
  },
  products: [
  {
    id: 2,
    title: "product B",
    image: 'https://placehold.it/1450x450',
    launch: '2016-09-09T21:00:00.000Z',
    price: {
      amount: '45.00',
      currency: 'GBP'
    }
  },
  {
    id: 1,
    title: "product A",
    image: 'https://placehold.it/650x450',
    launch: '2016-09-08T21:00:00.000Z',
    price: {
      amount: '55.00',
      currency: 'GBP'
    }
  },
  {
    id: 3,
    title: "product C",
    image: 'https://placehold.it/650x450',
    launch: '2016-09-11T21:00:00.000Z',
    price: {
      amount: '90.00',
      currency: 'GBP'
    }
  },
  {
    id: 4,
    title: "product D",
    image: 'https://placehold.it/650x450',
    launch: '2016-09-09T21:00:00.000Z',
    price: {
      amount: '25.00',
      currency: 'GBP'
    }
  },
  {
    id: 5,
    title: "product E",
    image: 'https://placehold.it/650x450',
    launch: '2016-09-11T21:00:00.000Z',
    price: {
      amount: '70.00',
      currency: 'GBP'
    }
  }]
}

export default initialState;
