import bcrypt from 'bcryptjs';

const data ={
    users:[
        {
           name:'Chintan' ,
           email:'admin@gmail.com',
           password:bcrypt.hashSync('123456'),
           isAdmin: true,
        },
        {
            name:'Rishil' ,
            email:'rishil@gmail.com',
            password:bcrypt.hashSync('123456'),
            isAdmin: false,
         },

    ],
    products: [
        {
            
            name:'Nike Slim shirt',
            slug:'nike-slim-shirt',
            category:'Shirts',
            image:'/images/p1.jpg',
            price:1,
            countInStock:10,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',
        },
        {
            
            name:'Adidas Slim shirt',
            slug:'adidas-slim-shirt',
            category:'Shirts',
            image:'/images/p2.jpg',
            price:700,
            countInStock:0,
            brand:'Adidas',
            rating:4.0,
            numReviews:10,
            description:'high quality shirt',
        },
        {
            
            name:'Nike Fit Pant',
            slug:'nike-fit-pant',
            category:'Pantss',
            image:'/images/p3.jpg',
            price:300,
            countInStock:20,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality shirt',
        },
        {
            
            name:'Adidas Fit Pant',
            slug:'adida4-fit-pant',
            category:'Pantss',
            image:'/images/p4.jpg',
            price:300,
            countInStock:20,
            brand:'Puma',
            rating:4.5,
            numReviews:14,
            description:'high quality shirt',
        },
    ]
};
export default data;