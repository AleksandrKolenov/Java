



const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
];
const ingredient = document.querySelector('#ingredients')
const navItemEl = ingredients.map((option) => {
    const item = document.createElement('li');
    item.classList.add('item');
    item.textContent = option;
    return item
})
ingredient.append(...navItemEl);

const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];
