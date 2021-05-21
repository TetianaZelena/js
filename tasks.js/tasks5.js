// task 1
// // Дополни код, присвоив переменной totalPrice выражение для подсчёта общей суммы заказа.Переменная pricePerItem хранит цену одной единицы товара, а orderedQuantity - количество единиц товара в заказе.
// // Объявлена переменная pricePerItem.
// // Значение переменной pricePerItem это число 3500.
// // Объявлена переменная orderedQuantity.
// // Значение переменной orderedQuantity это число 4.
// // Объявлена переменная totalPrice.
// // Значение переменной totalPrice это число 14000.
// // Использован оператор *.
// // Базовый код
// const pricePerItem = 3500;
// const orderedQuantity = 4;

// const totalPrice = (pricePerItem*orderedQuantity);
// console.log(totalPrice);

// task 2

// // Магазин по продаже ремонтных дроидов готов к открытию, осталось написать скрипт для их заказа. Объяви переменные и присвой им соответствующие значения:
// // pricePerDroid - цена одного дроида, значение 800;
// // orderedQuantity - количество дроидов в заказе, значение 6;
// // deliveryFee - стоимость доставки, значение 50;
// // totalPrice - общая сумма заказа к оплате, не забудь о стоимости доставки;
// // message - сообщение о состоянии заказа в формате; Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.
// // Тесты
// // Объявлена переменная orderedQuantity.
// // Значение переменной orderedQuantity это число 6.
// // Объявлена переменная pricePerDroid.
// // Значение переменной pricePerDroid это число 800.
// // Объявлена переменная deliveryFee.
// // Значение переменной deliveryFee это число 50.
// // Объявлена переменная totalPrice.
// // Значение переменной totalPrice это число 4850.
// // Объявлена переменная message.
// // Значение переменной message это строка 'Вы заказали дроидов на сумму 4850 кредитов. Доставка (50 кредитов) включена в сумму заказа.'
// const pricePerDroid =800;
// const orderedQuantity=6;
// let deliveryFee=50;
// const totalPrice=(pricePerDroid*orderedQuantity+deliveryFee); 
// const message=`Вы заказали дроидов на сумму ${totalPrice} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;
// console.log(message);


// tasks3
//  // Объяви функцию sayHi, внутри которой добавь console.log() со строкой 'Привет, это моя первая функция!'.

// // После объявления вызови функцию sayHi.

// // Тесты
// // Ожидается объявление Function Declaration.
// // Функции присвоено имя sayHi.
// // В теле функции sayHi есть console.log('Привет, это моя первая функция!').
// // После объявления есть вызов функции sayHi.
// function sayHi(){
//   console.log('Привет, это моя первая функция!');
// }
// sayHi();

// // task 4
// // Функция add должна уметь складывать три числа и выводить результат в консоль. Добавь функции add три параметра a, b и c, которые будут получать значения аргументов при её вызове.

// // Дополни console.log() так, чтобы он логировал строку 'Результат сложения равен <результат>', где <результат> это сумма переданных чисел.

// // Тесты
// // Объявлена функция add(a, b, c).
// // Вызов add(15, 27, 10) выводит в консоль 'Результат сложения равен 52'.
// // Вызов add(10, 20, 30) выводит в консоль 'Результат сложения равен 60'.
// // Вызов add(5, 10, 15) выводит в консоль 'Результат сложения равен 30'.
// function add(a,b,c) {
//   console.log(`Результат сложения равен ${a+b+c}`);
  
//   // Пиши код выше этой строки
// }
  
// add(15, 27, 10);
// add(10, 20, 30);
// add(5, 10, 15);
 





// // Дополни код функции add так, чтобы она возвращала результат сложения значений трёх параметров a, b и c.

// // Тесты
// // Объявлена функция add(a, b, c).
// // В функции add есть оператор return.
// // Вызов add(15, 27, 10) возвращает 52.
// // Вызов add(10, 20, 30) возвращает 60.
// // Вызов add(5, 10, 15) возвращает 30.
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.
// function add(a, b, c) {
//   //  Пиши код ниже этой строки
//   return a+b+c;
  
  
// //  Пиши код выше этой строки
// }
// let result=add(2, 5, 8);
// console.log(result);
// add(2, 5, 8); // 15

// console.log(add(15, 27, 10));
// console.log(add(10, 20, 30));
// console.log(add(5, 10, 15));


// // Функция makeMessage(name, price) составляет и возвращает сообщение о покупке. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// // name - название товара
// // price - цена товара
// // Дополни код функции так, чтобы в переменную message записывалась строка Вы выбрали <имя товара>, цена за штуку <цена товара> кредитов, где <имя товара> и <цена товара> это значения параметров name и price. Используй синтаксис шаблонных строк.

// // Внимание
// // Обрати внимание на то, что в коде нет вызовов функции makeMessage. С этого задания и дальше мы сами будем вызывать твои функции и проверять то, как они работают. Результат наших проверок ты увидишь в блоке Результаты под редактором кода.

// // Тесты
// // Объявлена функция makeMessage(name, price).
// // Вызов makeMessage('Радар', 6150) возвращает 'Вы выбрали Радар, цена за штуку 6150 кредитов'.
// // Вызов makeMessage('Сканер', 3500) возвращает 'Вы выбрали Сканер, цена за штуку 3500 кредитов'.
// // Вызов makeMessage('Реактор', 8000) возвращает 'Вы выбрали Реактор, цена за штуку 8000 кредитов'.
// // Вызов makeMessage('Двигатель', 4070) возвращает 'Вы выбрали Двигатель, цена за штуку 4070 кредитов'.
// function makeMessage (name, price) {
//   // Пиши код ниже этой строки
//    const message = `Вы выбрали ${name}, цена за штуку ${price} кредитов`;
//   // Пиши код выше этой строки
//   return message;
// };

// console.log(makeMessage('Радар', 6150))
// console.log(makeMessage('Реактор', 8000))
// console.log(makeMessage('Двигатель', 4070))

// // Функция calculateTotalPrice считает и возвращает общую сумму покупки. Она принимает два параметра, значения которых будут задаваться во время её вызова.

// // orderedQuantity - количество единиц товара в заказе;
// // pricePerItem - цена одной единицы товара.
// // Дополни код функции так, чтобы в переменную totalPrice записывалась общая сумма покупки, результат умножения кол-ва товаров на цену одного.

// // Тесты
// // Объявлена функция calculateTotalPrice (orderedQuantity, pricePerItem).
// // Вызов calculateTotalPrice(5, 100) возвращает 500.
// // Вызов calculateTotalPrice(8, 60) возвращает 480.
// // Вызов calculateTotalPrice('3, 400) возвращает 1200.
// // Вызов calculateTotalPrice(1, 3500) возвращает 3500.
// // Вызов calculateTotalPrice(12, 70) возвращает 840.
// // Вызов функции со случайными, но валидными аргументами, возвращает правильное значение.

// function calculateTotalPrice (orderedQuantity, pricePerItem) {
//   // Пиши код ниже этой строки
//   const totalPrice = (orderedQuantity*pricePerItem);

//   // Пиши код выше этой строки
//   return totalPrice;
// };

// console.log(calculateTotalPrice(5, 100));
// console.log(calculateTotalPrice(8, 60));
// console.log(calculateTotalPrice(3, 400));
// console.log(calculateTotalPrice(1, 3500));
// console.log(calculateTotalPrice(12, 70));

// // Функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) составляет и возвращает сообщение о покупке ремонтных дроидов. Она объявляет три параметра, значения которых будут задаваться во время её вызова.

// // orderedQuantity - количество дроидов в заказе
// // pricePerDroid - цена одного дроида
// // deliveryFee - стоимость доставки
// // Дополни код функции так, чтобы она возвращала сообщение о заказе в формате Вы заказали дроидов на сумму <сумма заказа> кредитов. Доставка (<цена доставки> кредитов) включена в сумму заказа.. Не забудь о цене доставки при вычислениях общей стоимости.

// // Тесты
// // Объявлена функция makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee).
// // Вызов makeOrderMessage(2, 100, 50) возвращает 'Вы заказали дроидов на сумму 250 кредитов. Доставка (50 кредитов) включена в сумму заказа.'.
// // Вызов makeOrderMessage(4, 300, 100) возвращает 'Вы заказали дроидов на сумму 1300 кредитов. Доставка (100 кредитов) включена в сумму заказа.'.
// // Вызов makeOrderMessage(10, 70, 200) возвращает 'Вы заказали дроидов на сумму 900 кредитов. Доставка (200 кредитов) включена в сумму заказа.'.

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки
  
//   const message=`Вы заказали дроидов на сумму ${orderedQuantity*pricePerDroid+deliveryFee} кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`


//   // Пиши код выше этой строки
//   return message;
// }
// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));
// console.log(makeOrderMessage(10, 70, 200));

// // Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// // available - общее количество товаров на складе
// // ordered - единиц товара в заказе
// // Используя ветвления дополни код функции так, что:

// // Если в заказе указано число, превышающее количество товаров на складе, в переменную message записывается строка 'На складе недостаточно товаров!'.
// // В противном случае записывается строка 'Заказ оформлен, с вами свяжется менеджер'.
// // Тесты
// // Объявлена функция checkStorage(available, ordered).
// // Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// // Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
//   if (available>=ordered) {
// message=(`Заказ оформлен, с вами свяжется менеджер`);
  
//   } else {
//    message=(`На складе недостаточно товаров!`);
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));



// // Станция по продаже ремонтных дроидов готова к запуску, осталось написать программное обеспечение для отдела продаж.

// // Функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits) выполняет транзакцию по продаже дроидов и возвращает сообщение о результате операции. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// // pricePerDroid - цена одного дроида;
// // orderedQuantity - кол-во заказанных дроидов;
// // customerCredits - сумма средств на счету клиента.
// // Дополни её следующим функционалом:

// // Объяви переменную totalPrice для хранения общей суммы заказа и присвой ей выражение расчёта этой суммы.
// // Добавь проверку сможет ли клиент оплатить заказ:
// // если сумма к оплате превышает количество кредитов на счету клиента, запиши в переменную message строку 'Недостаточно средств на счету!';
// // в противном случае, вычти сумму покупки со счёта клиента и запиши в переменную message сообщение: 'Вы купили <число> дроидов, на счету осталось <число> кредитов'.
// // Тесты
// // Объявлена функция makeTransaction(pricePerDroid, orderedQuantity, customerCredits).
// // Вызов makeTransaction(3000, 5, 23000) возвращает 'Вы купили 5 дроидов, на счету осталось 8000 кредитов'.
// // Вызов makeTransaction(1000, 3, 15000) возвращает 'Вы купили 3 дроидов, на счету осталось 12000 кредитов'.
// // Вызов makeTransaction(5000, 10, 8000) возвращает 'Недостаточно средств на счету!'.
// // Вызов makeTransaction(2000, 8, 10000) возвращает 'Недостаточно средств на счету!'.
// // Вызов makeTransaction(500, 10, 5000) возвращает 'Вы купили 10 дроидов, на счету осталось 0 кредитов'.
// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Пиши код ниже этой строки
// const totalPrice=pricePerDroid*orderedQuantity;
  
//   if (totalPrice<=customerCredits){
//   customerCredits-=totalPrice;
//   message=(`Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits} кредитов`);
//   } else {
//     message=(`Недостаточно средств на счету!`)
//   }
    
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeTransaction(3000, 5, 23000));
// console.log(makeTransaction(1000, 3, 15000));
// console.log(makeTransaction(5000, 10, 8000));
// console.log(makeTransaction(2000, 8, 10000));
// console.log(makeTransaction(500, 10, 5000));

// // task 19
// // Функция checkPassword(password) получает пароль пользователя в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.
 
// // Если значение параметра password равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// // Если значение параметра password совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// // Если ни одно из предыдущих условий не выполнилось, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// // Тесты
// // Объявлена функция checkPassword(password).
// // Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// // Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// // Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// // Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;

//   if (password===null) { // Дополни эту строку
//     message =  'Отменено пользователем!';
//   } else if (password===ADMIN_PASSWORD) { // Дополни эту строку
//     message = 'Добро пожаловать!';
//   } else {
//     message = 'Доступ запрещен, неверный пароль!';
//   }

//   return message;
// }

// // task 220
// // Функция checkStorage(available, ordered) проверяет возможность оформления заказа и возвращает сообщение о результате. Она объявляет два параметра, значения которых будут задаваться во время её вызова.

// // available - доступное количество товаров на складе
// // ordered - единиц товара в заказе
// // Используя ветвления дополни код функции так, что:

// // Если в заказе еще нет товаров, то есть значение параметра ordered равно 0, в переменную message присваивается строка В заказе еще нет товаров.
// // Eсли товаров в заказе больше чем доступно товаров на складе, то в переменную message присваивается строка 'Слишком большой заказ, на складе недостаточно товаров!'.
// // В противном случае в переменную message присваевается строка 'Заказ оформлен, с вами свяжется менеджер'.
// // Тесты
// // Объявлена функция checkStorage(available, ordered).
// // Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(100, 130) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// // Вызов checkStorage(70, 0)возвращает 'В заказе еще нет товаров'.
// // Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(200, 250) возвращает 'Слишком большой заказ, на складе недостаточно товаров!'.
// // Вызов checkStorage(150, 0) возвращает 'В заказе еще нет товаров'.
// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки
// if(ordered<=null){
//   message=`В заказе еще нет товаров`;
// }
//   else if (ordered>available){
//     message=`Слишком большой заказ, на складе недостаточно товаров!`
//   }
//   else {
//     message=`Заказ оформлен, с вами свяжется менеджер`;
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));

// // task 21
// // Функция isNumberInRange(start, end, number) проверяет, входит ли число в промежуток. Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// // number - число, вхождение которого проверяется
// // start - начало числового промежутка
// // end - конец числового промежутка
// // Присвой переменной isInRange выражение проверки вхождения number в числовой промеждуток от srart до end. То есть число должно быть больше либо равно start и меньше либо равно end. Результатом выражения проверки будет буль true или false.

// // Тесты
// // Объявлена функция isNumberInRange(start, end, number).
// // В выражении проверки использован оператор &&.
// // Вызов isNumberInRange(10, 30, 17) возвращает true.
// // Вызов isNumberInRange(10, 30, 5) возвращает false.
// // Вызов isNumberInRange(20, 50, 24) возвращает true.
// // Вызов isNumberInRange(20, 50, 76) возвращает false.

// function isNumberInRange(start, end, number) {
//   const isInRange = number>=start&&number<=end; // дополни эту строку

//   return isInRange;
// }

// console.log(isNumberInRange(10, 30, 17));
// console.log(isNumberInRange(10, 30, 5));
// console.log(isNumberInRange(20, 50, 24));
// console.log(isNumberInRange(20, 50, 76));


// // task 22

// // Функция checkIfCanAccessContent(subType) проверяет, может ли пользователь получить доступ к контенту. Проверка происходит по типу подписки. Получить доступ могут только пользователи с подпиской pro или vip.

// // Присвой переменной canAccessContent выражение проверки подписки. Если значение параметра subType равно строкам 'pro' или 'vip', пользователь получит доступ. Результатом выражения проверки будет буль true или false.

// // Тесты
// // Объявлена функция checkIfCanAccessContent(subType).
// // В выражении проверки использован оператор ||.
// // Вызов checkIfCanAccessContent('pro') возвращает true.
// // Вызов checkIfCanAccessContent('starter') возвращает false.
// // Вызов checkIfCanAccessContent('vip') возвращает true.
// // Вызов checkIfCanAccessContent('free') возвращает false.
// function checkIfCanAccessContent(subType) {
//   const canAccessContent = subType==='pro'||subType==='vip';
  
//   return canAccessContent;
// }

// console.log(checkIfCanAccessContent('pro'));
// console.log(checkIfCanAccessContent('starter'));
// console.log(checkIfCanAccessContent('vip'));
// console.log(checkIfCanAccessContent('free'));

// // task 23
// // Все операторы, которые мы рассматривали до этого, были бинарными. Т.е. они содержали два операнда: левый и правый. Логическое «НЕ» - это унарный оператор, выполняющий операцию над одним операндом справа.

// // !выражение
// // Оператор ! приводит операнд к булю, если необходимо, а затем делает инверсию - заменяет его на противоположный true -> false или false -> true.

// // console.log(!true); // false
// // console.log(!false); // true
// // console.log(!3); // !3 -> !true -> false
// // console.log(!'Манго'); // !'Манго' -> !true -> false
// // console.log(!0); // !0 -> !false -> true
// // console.log(!''); // !'' -> !false -> true

// // const isOnline = true;
// // const isNotOnline = !isOnline; // !isOnline -> !true -> false
// // Задание
// // Функция isNumberNotInRange(start, end, number) проверяет, не входит ли число в промежуток. То есть число должно быть меньше либо равно start и больше либо равно end. Результатом выражения проверки будет буль true или false.

// // Она объявляет три параметра, значения которых будут задаваться во время её вызова:

// // number - число, не вхождение которого проверяется
// // start - начало числового промежутка
// // end - конец числового промежутка
// // Присвой переменной isNotInRange выражение инверсии значения переменной isInRange используя оператор !.

// // Тесты
// // Объявлена функция isNumberNotInRange(start, end, number).
// // В выражении использован оператор !.
// // Вызов isNumberNotInRange(10, 30, 17) возвращает false.
// // Вызов isNumberNotInRange(10, 30, 5) возвращает true.
// // Вызов isNumberNotInRange(20, 50, 24) возвращает false.
// // Вызов isNumberNotInRange(20, 50, 76) возвращает true.

// function isNumberNotInRange(start, end, number) {
//   const isInRange = number >= start && number <= end;
//   const isNotInRange = !isInRange ; // Дополни эту строку

//   return isNotInRange;
// }

// // task 24
// // Функция getDiscount(totalSpent) определяет значение скидки в зависимости от общей суммы потраченных денег (параметр totalSpent) в магазине за всё время (партнёрская программа). Скидка записывается в переменную discount и возвращается из функции как результат её работы.

// // Используя ветвления и логические операторы, дополни код функции.

// // Если потрачено от 50000 ( включительно ) или больше кредитов - скидка 10% (золотой партнёр)
// // Если потрачено от 20000 (включительно) до 50000 кредитов - скидка 5% (серебрянный партнёр)
// // Если потрачено от 5000 (включительно) до 20000 кредитов - скидка 2% (бронзовый партнёр)
// // Если потрачено меньше чем 5000 кредитов - скидка 0 (базовый партнёр)
// // Значения скидок каждого уровня хранятся в одноимённых константах BASE_DISCOUNT, BRONZE_DISCOUNT, SILVER_DISCOUNT и GOLD_DISCOUNT.

// // Тесты
// // Объявлена функция getDiscount(totalSpent).
// // Вызов getDiscount(137000) возвращает 0.1.
// // Вызов getDiscount(46900) возвращает 0.05.
// // Вызов getDiscount(8250) возвращает 0.02.
// // Вызов getDiscount(1300) возвращает 0.
// // Вызов getDiscount(5000) возвращает 0.02.
// // Вызов getDiscount(20000) возвращает 0.05.
// // Вызов getDiscount(50000) возвращает 0.1.
// function getDiscount(totalSpent) {
//   const BASE_DISCOUNT = 0;
//   const BRONZE_DISCOUNT = 0.02;
//   const SILVER_DISCOUNT = 0.05;
//   const GOLD_DISCOUNT = 0.1;
//   let discount;
//   // Пиши код ниже этой строки
//   if(totalSpent>=50000){
//     discount=GOLD_DISCOUNT;
//   }
//   else if(totalSpent>=20000&&totalSpent<50000){
//     discount=SILVER_DISCOUNT;
//   }
//   else if(totalSpent>=5000&&totalSpent<20000){
//     discount=BRONZE_DISCOUNT;
//   }
//   else  {
//     discount=BASE_DISCOUNT ;
//   }
  
// // Пиши код выше этой строки
//   return discount;
// }

// console.log(getDiscount(137000));
// console.log(getDiscount(46900));
// console.log(getDiscount(8250));
// console.log(getDiscount(1300));
// console.log(getDiscount(5000));
// console.log(getDiscount(20000));
// console.log(getDiscount(50000));

// // task 25

// // Выполни рефакторинг решения задачи «Склад товаров», заменив инструкцию if...else тернарным оператором.

// // Тесты
// // Объявлена функция checkStorage(available, ordered).
// // Использован тернарный оператор.
// // Вызов checkStorage(100, 50) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(100, 130) возвращает 'На складе недостаточно товаров!'.
// // Вызов checkStorage(200, 20) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(200, 150) возвращает 'Заказ оформлен, с вами свяжется менеджер'.
// // Вызов checkStorage(150, 180) возвращает 'На складе недостаточно товаров!'.

// function checkStorage(available, ordered) {
//   let message;
//   // Пиши код ниже этой строки

 
//  message=ordered > available ?'На складе недостаточно товаров!':'Заказ оформлен, с вами свяжется менеджер';
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 150));
// console.log(checkStorage(150, 180));

// // task 26
// // Функция checkPassword(password) сравнивает переданный ей пароль (параметр password) с сохранённым паролем администратора (константа ADMIN_PASSWORD) и возвращает строку с сообщением о результате.

// // Используя тернарный оператор дополни функцию так, что:

// // Если значения password и ADMIN_PASSWORD совпадают, присвой переменной message строку 'Доступ разрешен'.
// // В противном случае, присвой message строку 'Доступ запрещен, неверный пароль!'.
// // Тесты
// // Объявлена функция checkPassword(password).
// // Использован тернарный оператор.
// // Вызов checkPassword('jqueryismyjam') возвращает 'Доступ разрешен'.
// // Вызов checkPassword('angul4r1sl1f3') возвращает 'Доступ запрещен, неверный пароль!'.
// // Вызов checkPassword('r3actsux') возвращает 'Доступ запрещен, неверный пароль!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
//   // Пиши код ниже этой строки
// message=password===ADMIN_PASSWORD?'Доступ разрешен':'Доступ запрещен, неверный пароль!'
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(checkPassword('jqueryismyjam'));
// console.log(checkPassword('angul4r1sl1f3'));
// console.log(checkPassword('r3actsux'));

// // task 27
// // Функция getSubscriptionPrice(type) получает строку с типом подписки пользователя (параметр type), проверяет её на совпадение с тремя возможными типами ежемесячной подписки и возвращает цену хранящуюся в переменной price.

// // Если значение параметра type это строка:

// // 'starter' - цена подписки 0 кредитов.
// // 'professional' - цена подписки 20 кредитов.
// // 'organization' - цена подписки 50 кредитов.
// // Изначально в теле функции была инструкция if...else, которая выглядела вот так.

// // if (type === 'starter') {
// //   price = 0;
// // } else if (type === 'professional') {
// //   price = 20;
// // } else if (type === 'organization') {
// //   price = 50;
// // }
// // После рефакторинга инструкция if..else была заменена на switch. Дополни код инструкции switch, чтобы функция работала правильно.

// // Тесты
// // Объявлена функция getSubscriptionPrice(type).
// // Вызов getSubscriptionPrice('professional') возвращает число 20.
// // Вызов getSubscriptionPrice('organization') возвращает число 50.
// // Вызов getSubscriptionPrice('starter') возвращает число 0.

// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//  switch (type) { // Дополни эту строку
//     case 'starter': // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case 'professional': // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case 'organization': // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }

// console.log(getSubscriptionPrice('professional'));
// console.log(getSubscriptionPrice('organization'));
// console.log(getSubscriptionPrice('starter'));

// // task 28
// // Функция checkPassword(password) получает пароль в параметр password, проверяет его на совпадение с паролем администратора в переменной ADMIN_PASSWORD и возвращает сообщение о результате сравнения, хранящееся в переменной message.

// // Если значение параметра password:

// // равно null, значит пользователь отменил операцию и в message записывается строка 'Отменено пользователем!'.
// // совпадает со значением ADMIN_PASSWORD, в переменную message присваивается строка 'Добро пожаловать!'.
// // не удобвлетворяет ни одному из предыдущих условий, в переменную message записывается строка 'Доступ запрещен, неверный пароль!'.
// // Проведи рефакторинг кода, заменив инструкцию if..else на switch, и не забудь о блоке default (аналог else).

// // Тесты
// // Объявлена функция checkPassword(password).
// // Вызов checkPassword('mangohackzor') возвращает 'Доступ запрещен, неверный пароль!'.
// // Вызов checkPassword(null) возвращает 'Отменено пользователем!'.
// // Вызов checkPassword('polyhax') возвращает 'Доступ запрещен, неверный пароль!'.
// // Вызов checkPassword('jqueryismyjam') возвращает 'Добро пожаловать!'.

// function checkPassword(password) {
//   const ADMIN_PASSWORD = 'jqueryismyjam';
//   let message;
// switch (password){
//   case null:
//   message = 'Отменено пользователем!';
//   break;
//   case ADMIN_PASSWORD:
//   message = 'Добро пожаловать!';
//   break;
//   default:
//   message = 'Доступ запрещен, неверный пароль!';
  
// }
//   return message;
// }
 
// console.log(checkPassword('mangohackzor'));
// console.log(checkPassword(null));
// console.log(checkPassword('polyhax'));
// console.log(checkPassword('jqueryismyjam'));


// // task 29
// // Функция getShippingCost(country) должна проверять возможность доставки товара в страну пользователя (параметр country) и возвращать сообщение о результате хранящееся в переменной message. Обязательно используй инструкцию switch.

// // Формат возвращаемой строки Доставка в <страна> будет стоить <цена> кредитов, где вместо <страна> и <цена> необходимо подставить соотвествующие значения.

// // Список стран и стоимость доставки:

// // Китай - 100 кредитов
// // Чили - 250 кредитов
// // Австралия - 170 кредитов
// // Ямайка - 120 кредитов
// // Из списка видно, что доставка есть не везде. Если указанной страны нет в списке, то функция должна вернуть строку 'Извините, в вашу страну доставки нет'

// // Тесты
// // Объявлена функция getShippingCost(country).
// // В теле функции использована инструкция switch.
// // Вызов getShippingCost('Австралия') возвращает 'Доставка в Австралия будет стоить 170 кредитов'.
// // Вызов getShippingCost('Германия') возвращает 'Извините, в вашу страну доставки нет'.
// // Вызов getShippingCost('Китай') возвращает 'Доставка в Китай будет стоить 100 кредитов'.
// // Вызов getShippingCost('Чили') возвращает 'Доставка в Чили будет стоить 250 кредитов'.
// // Вызов getShippingCost('Ямайка') возвращает 'Доставка в Ямайка будет стоить 120 кредитов'.
// // Вызов getShippingCost('Швеция') возвращает 'Извините, в вашу страну доставки нет'.

// function getShippingCost(country) {
//   let message;
//   let price;
//   // Пиши код ниже этой строки
//   switch (country){
//     case 'Китай':
//       price=100;
//       message=`Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//       case 'Чили':
//       price=250;
//       message=`Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     case 'Австралия':
//       price= 170;
//       message=`Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//       case 'Ямайка':
//       price= 120;
//       message=`Доставка в ${country} будет стоить ${price} кредитов`;
//       break;
//     default:
//       message='Извините, в вашу страну доставки нет';

//   }
  

//   // Пиши код выше этой строки
//   return message;
// }

// console.log(getShippingCost('Австралия'));
// console.log(getShippingCost('Германия'));
// console.log(getShippingCost('Китай'));
// console.log(getShippingCost('Чили'));
// console.log(getShippingCost('Ямайка'));
// console.log(getShippingCost('Швеция'));

// // task 30
// // Функция getNameLength(name) принимает имя (параметр name) и возвращает строку, в которой указана его длина. Дополни шаблонную строку в переменной message длиной строки из параметра name.

// // Тесты
// // Объявлена функция getNameLength(name).
// // Вызов функции getNameLength('Poly') возвращает 'Длина вашего имени 4 символа(ов)'.
// // Вызов функции getNameLength('Harambe') возвращает 'Длина вашего имени 6 символа(ов)'.
// // Вызов функции getNameLength('Billy') возвращает 'Длина вашего имени 5 символа(ов)'.
// // Вызов функции getNameLength('Joe') возвращает 'Длина вашего имени 3 символа(ов)'.

// function getNameLength(name) {
  
//   const message = `Длина вашего имени ${name.length} символа(ов)`; // Дополни эту строку

//   return message;
// }
//  console.log(getNameLength('Poly'.length));
// console.log(getNameLength('Harambe'.length));
// console.log(getNameLength('Billy'.length));
// console.log(getNameLength('Joe'.length));

// // task 32
// // Дополни код присвоив объявленным переменным выражения обращения к соответствующим элементам или свойствам строки в переменной course.

// // courseTopicLength - длина строки.
// // firstElement - первый символ строки.
// // lastElement - последний символ строки.
// // Тесты
// // Объявлена переменная courseTopic.
// // Значение переменной courseTopic это строка 'JavaSript для начинающих'.
// // Объявлена переменная courseTopicLength.
// // Значение переменной courseTopicLength это число 24.
// // Объявлена переменная firstElement.
// // Значение переменной firstElement это строка 'J'.
// // Объявлена переменная lastElement.
// // Значение переменной lastElement это строка 'х'.

// const courseTopic = 'JavaSript для начинающих';
// // Пиши код ниже этой строки

// const courseTopicLength = courseTopic.length;
// console.log(courseTopicLength);
// const firstElement = courseTopic[0];
// console.log(firstElement);
// const lastElement = courseTopic[courseTopic.length-1];
// console.log(lastElement);

// // task 32

// // Функция getSubstring(string, length) принимает строку и возвращает подстроку от начала и до length символов. Она объявляет два параметра, значения которых будут задаваться во время её вызова:

// // string - оригинальная строка
// // length - количество символов с начала строки для подстроки
// // Присвой переменной substring выражение создания подстроки длинной length символов (от начала) из строки string.

// // Тесты
// // Объявлена функция getSubstring(string, length).
// // Вызов функции getSubstring('Привет мир', 3) возвращает 'При'.
// // Вызов функции getSubstring('Привет мир', 6) возвращает 'Привет'.
// // Вызов функции getSubstring('Привет мир', 8) возвращает 'Привет м'.
// // Вызов функции getSubstring('Привет мир', 10) возвращает 'Привет мир'.
// // Вызов функции getSubstring('Привет мир', 0) возвращает ''.
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }



// console.log(getSubstring('Привет мир', 3));
// console.log(getSubstring('Привет мир', 6));
// console.log(getSubstring('Привет мир', 8));
// console.log(getSubstring('Привет мир', 10));
// console.log(getSubstring('Привет мир', 0));

// // task 33
// // Функция formatMessage(message, maxLength) принимает строку (параметр message) и форматирует её, если длина превышает значение в параметре maxLength.

// // Дополни код функции так, что если длина строки:

// // не превышает maxLength, функция возвращает её в исходном виде.
// // больше maxLength, то функция обрезает строку до maxLength символов и добавляет в конец троеточие '...', после чего возвращает укороченную версию.
// // Тесты
// // Объявлена функция formatMessage(message, maxLength).
// // Вызов функции formatMessage('Curabitur ligula sapien', 16) возвращает 'Curabitur ligula...'.
// // Вызов функции formatMessage('Curabitur ligula sapien', 23) возвращает 'Curabitur ligula sapien'.
// // Вызов функции formatMessage('Vestibulum facilisis purus nec', 20) возвращает 'Vestibulum facilisis...'.
// // Вызов функции formatMessage('Vestibulum facilisis purus nec', 30) возвращает 'Vestibulum facilisis purus nec'.
// // Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 15) возвращает 'Nunc sed turpis...'.
// // Вызов функции formatMessage('Nunc sed turpis a felis in nunc fringilla', 41) возвращает 'Nunc sed turpis a felis in nunc fringilla'.
// if (message.length<=maxLength) {
// result=message;
  
//   } else {
//    result=message.slice(0,maxLength)+'...';

//   // Пиши код выше этой строки
//   return result;
// }
// console.log(formatMessage('Curabitur ligula sapien', 16)); 
// console.log(formatMessage('Curabitur ligula sapien', 23)); 
// console.log(formatMessage('Vestibulum facilisis purus nec', 20)); 
// console.log(formatMessage('Vestibulum facilisis purus nec', 30)); 
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); 
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41));

// // task 34
// // Функция normalizeInput(input) принимает строку (параметр input) и возвращает такую же строку, но в нижнем регистре. Присвой переменной normalizedInput выражение создания строки в нижнем регистре из параметра input.

// // Тесты
// // Объявлена функция normalizeInput(input).
// // Вызов функции normalizeInput('Привет мир') возвращает 'привет мир'.
// // Вызов функции normalizeInput('Это НЕ СпаМ') возвращает 'это не спам'.
// // Вызов функции normalizeInput('Большие СКИДКИ') возвращает 'большие скидки'.

// function normalizeInput(input) {
//   const normalizedInput = input.toLowerCase(); // Дополни эту строку
//   return normalizedInput;
// }
//  console.log(normalizeInput('Привет мир'));
// console.log(normalizeInput('Это НЕ СпаМ'));
// console.log(normalizeInput('Большие СКИДКИ'));


// // task 35

// // Функция checkName(fullname, name) принимает два параметра и возвращает буль true или false - результат проверки вхождения подстроки name в строку fullname.

// // fullname - полное имя состоящее из двух слов (имени и фамилии) разделённых пробелом.
// // name - имя для проверки вхождения в полное имя.
// // Присвой переменной result выражение проверки вхождения имени (параметр name), в полное имя (параметр fullname). Пусть функция строго относится к регистру букв, то есть «Петя» и «петя» для неё разные имена.

// // Тесты
// // Объявлена функция checkForName(fullname, name).
// // Вызов функции checkForName('Егор Колбасов', 'Егор') возвращает true.
// // Вызов функции checkForName('Егор Колбасов', 'егор') возвращает false.
// // Вызов функции checkForName('Егор Колбасов', 'егОр') возвращает false.
// // Вызов функции checkForName('Егор Колбасов', 'Женя') возвращает false.
// // Вызов функции checkForName('Вадим Некрасов', 'Вадим') возвращает true.
// // Вызов функции checkForName('Вадим Некрасов', 'вадим') возвращает false.
// // Вызов функции checkForName('Вадим Некрасов', 'Дима') возвращает false.

// function checkForName(fullName, name) {
//  const result =fullName.includes(name) ; // Дополни эту строку
//   return result;
// }
// console.log(checkForName('Егор Колбасов', 'Егор'));
// console.log(checkForName('Егор Колбасов', 'егор'));
// console.log(checkForName('Егор Колбасов', 'егОр'));
// console.log(checkForName('Егор Колбасов', 'Женя'));
// console.log(checkForName('Вадим Некрасов', 'Вадим'));
// console.log(checkForName('Вадим Некрасов', 'вадим'));
// console.log(checkForName('Вадим Некрасов', 'Дима'));


// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//    const normalizedInput = message.toLowerCase();
//   if (normalizedInput.includes()){
//       result=true;
//       }
//   else {
//     result=false;
//   }
 
 
//   // Пиши код выше этой строки
//   return result;

// }


// // task 36
// // Функция checkForSpam(message) принимает строку (параметр message), проверяет её на содержание запрещенных слов spam и sale, и возвращает результат проверки. Слова в строке параметра message могут быть в произвольном регистре, например SPAM или sAlE.

// // Если нашли запрещенное слово (spam или sale) то функция возвращает буль true.
// // Если в строке нет запрещенных слов, функция возвращает буль false.
// // Тесты
// // Объявлена функция checkForSpam(message).
// // Вызов функции checkForSpam('Latest technology news') возвращает false.
// // Вызов функции checkForSpam('JavaScript weekly newsletter')возвращает false.
// // Вызов функции checkForSpam('Get best sale offers now!') возвращает true.
// // Вызов функции checkForSpam('Amazing SalE, only tonight!') возвращает true.
// // Вызов функции checkForSpam('Trust me, this is not a spam message') возвращает true.
// // Вызов функции checkForSpam('Get rid of sPaM emails. Our book in on sale!') возвращает true.
// // Вызов функции checkForSpam('[SPAM] How to earn fast money?') возвращает true.

// function checkForSpam(message) {
//   let result;
//   // Пиши код ниже этой строки
//    const normalizedInput = message.toLowerCase();
//   if (normalizedInput.includes('sale')){
//       result=true;
//       }
//  else if (normalizedInput.includes('spam')){
//       result=true;
//       }
//   else {
//     result=false;
//   }
 
 
//   // Пиши код выше этой строки
//   return result;
// }

// console.log(checkForSpam('Latest technology news'));
// console.log(checkForSpam('JavaScript weekly newsletter'));
// console.log(checkForSpam('Get best sale offers now!'));
// console.log(checkForSpam('Amazing SalE, only tonight!'));
// console.log(checkForSpam('Trust me, this is not a spam message'));
// console.log(checkForSpam('Get rid of sPaM emails. Our book in on sale!'));
// console.log(checkForSpam('[SPAM] How to earn fast money?'));

