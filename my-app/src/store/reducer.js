const initialState = {
    products: [{   id: 1,
        name: 'сыр',
        company: 'сырная',
        category: 'milk',
        poster: 'https://steamuserimages-a.akamaihd.net/ugc/1294171102394988771/21E32A5FDC780FC5FE48DC87A579A8BD1179F284/',
        review: 'люблю'
    },
    {
        id: 2,
        name: 'творог',
        company: 'творожная',
        category: 'milk',
        poster:  'https://domstrousam.ru/wp-content/uploads/2021/04/tvorog_kisliy.jpg',
        review: 'аааа'
    },
    {   id: 3,
        name: 'банан',
        company: 'фрукт',
        category: 'fruit',
        poster:  'http://lozhka-povarezhka.ru/wp-content/uploads/2020/06/banani-1.jpg',
        review: ''
    },
    {id: 4,
        name: 'балбаса',
        company: 'колбасная',
        category: 'meat',
        poster:  'https://pbs.twimg.com/media/EZ-E5CpX0AIlKQ7.jpg',
        review: ''
    },
    {   id: 5,
        name: 'сок',
        company: 'я',
        category: 'juice',
        poster: 'http://sushitori.site/wp-content/uploads/сок-я.jpg',
        review: ''
    }
    ,{id: 6,
        name: 'шоколадка',
        company: 'колбасная',
        category: 'chocolate',
        poster:  'https://www.yarcom.ru/sites/default/files/styles/400x300_crop/public/afisha/photo/2020/07/pOR6AwD-vMj9zWg.jpeg.webp?itok=QOnH1WXH',
        review: ''
    }
    ,{id: 7,
        name: 'молоко',
        company: 'валагжанка',
        category: 'milk',
        poster:  'https://pbs.twimg.com/media/D5AxNtZWwAAihJ6.jpg:large',
        review: ''
    }
    ],
    searched: [],
    product: [],
}

export default function reducer (store = initialState, action){
    switch(action.type){
        case 'ADD_PRODUCT_ON_PAGE':
            let arr = [];
            arr = store.products.filter(item => (action.payload.searchLine === item.name)||(action.payload.searchLine === item.company));
            store.searched = [];
            return{
                ...store,
                searched: arr 
        }
        case 'GIVE_INFO':
            store.product = []
            let array = [...store.product];
            array.push(action.payload);
            return{
                    ...store,
                    product: array
                }
        case 'ADD_REVIEW':
            let arrReview = [...store.products];
            let items = arrReview.findIndex(item =>  action.payload.id.id == item.id);
            arrReview[items].review = action.payload.inputValue;
            return{
                ...store,
                products: arrReview
            }
        case 'ADD_ITEM':
            let due = [...store.products];
            let item = action.payload;
            due.push(item);
            return{
                ...store,
                products: due
            }
            
    }
    return store
}