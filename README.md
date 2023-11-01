# Задание

**Создать сервер на Node.js с использование модулей Http и Fs.**

Создать http сервер, который будет запускаться по адресу `127.0.0.1:3003`.

Установить пакет [nodemon](https://www.npmjs.com/package/nodemon), настроить его запуск.

Написать обработчик входящего запроса:

- Ответом на запрос `?hello=<name>` должна быть **строка** `Hello, <name>.`, код ответа 200.
- Если параметр `hello` указан, но не передано `<name>`, то ответ **строка** `Enter a name`, код ответа 400.
- Ответом на запрос `?users` должен быть **JSON** с содержимым файла `data/users.json`, код ответа 200.
- Если никакие параметры не переданы, то ответ **строка** `Hello, World!`, код ответа 200.
- Если переданы какие-либо другие параметры, то пустой ответ, код ответа 500.


### Справочник по Content-Type

В [справочнике](https://www.iana.org/assignments/media-types/media-types.xhtml) в столбце _Name_ указывается что за тип
данных, а столбце _Template_ какой следует указывать Content-Type.

