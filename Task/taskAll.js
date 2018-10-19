
//Task 1  **********************
/*
1. Используя метод map, составьте массив
     значений поля name гостей, в результате
     получится ['Mango', 'Poly', 'Ajax', 'Chelsey']

  2. Напишите функию getPropValues(arr, prop), принимающую
    параметры arr - массив, и prop - имя ключа в объекте.
    Функция должна возвращать массив всех значений этого ключа из arr.

    Если такого ключа нет, функция возвращает null;
    Используйте map.
*/
const guests = [
  { name: "Mango", inactiveDays: 15, isActive: true },
  { name: "Poly", inactiveDays: 8, isActive: false },
  { name: "Ajax", inactiveDays: 32, isActive: false },
  { name: "Chelsey", inactiveDays: 85, isActive: true }
];
//1.
  const names = guests.map (guests => guests.name);
  console.log (names);


  //2.
  function getPropValues(arr, key) {
    console.log(key);
    const names = arr.map(array => array[key] || null);
      console.log(names);
    }

  getPropValues(guests, "inactiveDays");



  /*
  Task 2
      1. Используя метод map, пройдите по массиву guests,
      и составьте новый массив, заменив значение
      поля isActive на противоположное.

      2. Напишите функцию setGuestState(guests, period), где
      guests - массив гостей, period - кол-во дней после
      которого считается что гость не активен.

      Если значение поля inactiveDays болше чем period,
      поставить для isActive значение false (если там еще не false)

      Если же значение inactiveDays меньше чем period,
      поставить для isActive значение true (если там еще не true)
  */

  function setGuestState(guests, period) {
    const state = guests.map(
                              obj =>
                                obj.inactiveDays < period
                                  ? {...obj, isActive : true}
                                  : {...obj, isActive : false}
                                )
    console.log(state);
  }
  setGuestState(guests, 50)


  //const names = guests.map(obj => obj.isActive ? false : true);


  /*
  Task 3

      1. Используя метод filter, пройдите по массиву guests
        и составьте массив только тех гостей, поле isActive
        которых true.

      2. Напишите функию getActiveGuests(guests), принимающую
        один параметр guests - массив объектов гостей.
        Функция должна возвращать массив объектов гостей,
        значение поля isActive которых true.

      3. Напишите функцию getGuestsOlderThan(guests, age), где
        guests - массив объектов гостей, age - предел возраста
        для сортировки. Функция возвращает массив объектов значение
        свойства age которых больше чем параметр age.
  */

  function getActiveGuests(guests) {
    const state = guests.filter(num => num.isActive)
    console.log(state);
  }
  getActiveGuests(guests)

  function getGuestsOlderThan(guests, age) {
    const state = guests.filter(num => num.inactiveDays < age)
    console.log(state);
  }
  getGuestsOlderThan(guests, 50)


  /*
  Task 5
    Используя метод reduce, посчитайте сумму
    всех значений свойств объекта order.
  */

  const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
  };

   const values = Object.values(order);
   const total = values.reduce((acc, value) => acc + value, 0);

   console.log(total);

   /*
   Task 7
       1. Напишите функию allGuestsActive(guests), принимающую
         один параметр guests - массив объектов гостей.
         Функция должна возвращать true если значение
         поля isActive всех объектов true, в противном случае false.
   */


   const guestsA = [
     {name: 'Mango', isActive: true},
     {name: 'Poly', isActive: false},
     {name: 'Ajax', isActive: true},
   ];
   const guestsB = [
     {name: 'Mango', isActive: true},
     {name: 'Poly', isActive: true},
     {name: 'Ajax', isActive: true},
   ];

   const allGuestsActive = (guest) => guest.every(guest => guest.isActive);

   console.log(allGuestsActive(guestsA));
   console.log(allGuestsActive(guestsB));
