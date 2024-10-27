const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
let breakfastMenuItemsHTML ='';
 breakfastMenu.forEach((item, index) => {
    breakfastMenuItemsHTML+=`<p>Item ${index + 1}: ${item}</p>`});
    document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;
let mainCourseItem = '';
    mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
    document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;
let dessertItem='';
dessertMenu.forEach((item,index)=>{
    dessertItem+=`<p>Item ${index+1}: ${item}</p>`;
});
document.getElementById('dessertMenuItems').innerHTML=dessertItem;