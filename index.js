
    // Список курсов
    let courses = [
      { name: "Courses in England", prices: [0, 100] }, 
      { name: "Courses in Germany", prices: [500, null] }, 
      { name: "Courses in Italy", prices: [100, 200] }, 
      { name: "Courses in Russia", prices: [null, 400] },
      { name: "Courses in China", prices: [50, 250] },
      { name: "Courses in USA", prices: [200, null] },
      { name: "Courses in Kazakhstan", prices: [56, 324] },
      { name: "Courses in France", prices: [null, null] },
  ];

  // Варианты цен (фильтры), которые ищет пользователь
  let requiredRange1 = [null, 200];
  let requiredRange2 = [100, 350];
  let requiredRange3 = [200, null];


//Функция для сортировки курсов по стоимости 

function sortPrices(a, b) {
  return (a.prices[0] + a.prices[1]) - (b.prices[0] + b.prices[1])
}

// Пример использования // courses.sort(sortPrices)



// Функция фильтр
function sortCourses(myPriceArray, courses) {
  let arr = [];
  for(let cours of courses) {
    const { prices } = cours;
    let onePrice = prices[0], twoPrice = prices[1];
    let myOnePrice = myPriceArray[0], myTwoPrice = myPriceArray[1];
    
    if(!prices[0]) { onePrice = 0 }
    if(!prices[1]) { twoPrice = Infinity }
    if(!myPriceArray[0]) { myOnePrice = 0 }
    if(!myPriceArray[1]) { myTwoPrice = Infinity }
    
    if(((myOnePrice <= onePrice) && (myTwoPrice >= twoPrice)) || ((myOnePrice <= onePrice) && (myTwoPrice >= onePrice)) &&
      ((myOnePrice <= twoPrice) && (myTwoPrice >= twoPrice)))  {
      arr.push(cours)
    }
  }
  console.log(new Set(arr))
  // return (new Set(arr))
}
