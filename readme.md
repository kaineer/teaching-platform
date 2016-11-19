Идеи
----

  * Редактирование урока должно производиться в текстовом файле (сюрприз)
  * Формат текстового файла предусматривает части, которые надо парсить и сводить

```
# Первый пример
# chapter-x/lesson-y.txt
--- form
В первом задании мы посчитаем количество
секунд в часе. Задание несложное,
но постарайтесь его не провалить.

Нужно не просто ввести количество секунд,
нужно именно его посчитать, т.е. умножить
количество минут в часе на количество секунд в минуте.

Ваш ответ [___________(expression)
--- ast-check
// input data in `data` variable
var expressionTree = parse(data.expression);

return is.binaryOperation('*', 60, 60)(expressionTree);
```

  * Дальше необходимо преобразовывать `form`-часть в html с формой
    и включать `ast-check`-часть как javascript в отдельную функцию.
  * Вся информация должна быть преобрвзована в следующий формат:

``` javascript
var chapters = {
  '1': {
    lessons: {
      '1': {
        form: '<div class="content"><form ...>',
        astCheck: function(data) {
          var expressionTree = parse(data.expression);

          return (
            is.binaryOperation('*', 60, 60)(expressionTree)
          );
        }
      }
    }
  }
}
```
