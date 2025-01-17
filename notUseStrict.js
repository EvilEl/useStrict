const obj = {
  name: "obj",
  items: [1, 2, 3],
  selectedNumber: 1,
  findItem: function () {
    /**
     Если указать 'use strict' здесь,то
     метод будет исполняться в строгом режим,и внутри find возникнет ошибка
     так как this будет undefined
    */
    return this.items.find(function (value) {
      /*
       Значение `this` в данной функции будет ссылаться
       на глобальный объект (в браузере это window, в Node.js - global).
      */
      return value === this.selectedNumber; /*
       this будет сыллаться на глобальный объект,в таком случае this.selectedNumber является undefined, ошибки не будет
      */
    });
  },
};
obj.findItem();

x = 10; /* Ошибки не будет, так как x создататься в глобальном пространстве имен
 в браузере это window ,  в Node.js - global
*/
