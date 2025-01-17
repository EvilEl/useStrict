"use strict";
const obj = {
  name: "obj",
  items: [1, 2, 3],
  selectedNumber: 1,
  findItem: function () {
    return this.items.find(function (value) {
      /*
       Если "use strict" будет выключен, значение `this` в данной функции будет ссылаться
       на глобальный объект (в браузере это window, в Node.js - global).
      */
      return value === this.selectedNumber; /*
        В строгом режиме ("use strict") значение `this` внутри этой функции будет `undefined`,
        так как это обычная функция (Function Declaration), которая имеет своё собственное
        значение `this`, а не наследует его из объекта `obj`.
      */
    });
  },
};
obj.findItem();

// Переменные в use strict
x = 10; /* Возникнет ошибка ReferenceError: x is not defined */
