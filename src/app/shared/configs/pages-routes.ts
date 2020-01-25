export const CONFIG = {
    home: { name: 'home', route: '/home' },
    products: {
        name: 'products', route: '/products',
        children: {
            list: { name: 'list', route: '/products/list' },
            details: { name: 'details/:id', route: '/products/details:id' }
        }
    },
    shoppingCart: { name: 'shoppingCart', route: '/shoppingCart' }
};
