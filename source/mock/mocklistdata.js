import images from '../Theme/Images';

export default mockdata = {

    cartdata: [
        {
            image: images.nike1,
            title: 'Nike Shoes',
            status: 'pending',
            orderstatus: 'Upload Bank Slip'
        },
        {
            image: images.nike,
            title: 'Nike Shoes',
            status: 'placed',
            orderstatus: 'Order Placed'
        },
        {
            image: images.nike1,
            title: 'Nike Shoes',
            status: 'confirm',
            orderstatus: 'Order Confirmed'
        },
        {
            image: images.nike1,
            title: 'Nike Shoes',
            status: 'cancelled',
            orderstatus: 'Order Cancelled'
        },
        {
            image: images.nike,
            title: 'Nike Shoes',
            status: 'shipped',
            orderstatus: 'Order Shipped'
        },
    ],

    homelist: [
        {
            image: images.nike1,
            title: 'Nike Shoes',
            crossprice: '40$',
            price: '20$',
            description: 'Sorry! you missed it:(',
            status: 'disabled'
        },
        {
            image: images.nike,
            title: 'Nike Shoes',
            crossprice: '40$',
            price: '20$',
            description: 'Buy in 00:59',
            status: 'active'
        },
        {
            image: images.iphone11,
            title: 'iPhone 11',
            crossprice: '700$',
            price: '600$',
            description: 'Sales in 01:58:32',
            status: 'disabled'
        }
    ]

}

