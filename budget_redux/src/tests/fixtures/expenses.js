import moment from 'moment'

export default[{
    id: '1',
    description: 'gum',
    note: 'good',
    amount: 195,
    createdAt: 5000
}, {
    id: '2',
    description: 'Rent',
    note: 'cost',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'Credit card',
    note: 'For payments',
    amount: 7600,
    createdAt: moment(0).add(4, 'days').valueOf()
}
]