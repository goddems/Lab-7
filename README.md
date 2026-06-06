# Lab 7 - NestJS CRUD API

Реалізація лабораторної роботи №7 — CRUD API на Nest.js.

Запуск:

```bash
npm install
npm run start:dev
```

Приклад: сервер за замовчуванням слухає порт із змінної середовища `PORT` (див. `.env.example`).

Ендпоінти:

| Метод | URL | Статус |
|---|---|---|
| GET | /tasks | 200 |
| GET | /tasks/search?status=... | 200 |
| GET | /tasks/:id | 200 / 404 |
| POST | /tasks | 201 / 400 |
| PATCH | /tasks/:id | 200 / 400 / 404 |
| DELETE | /tasks/:id | 204 / 404 |

HTTP-перевірка:

Статичний файл `public/check.html` доступний за шляхом `/check.html` — використовується для швидкої перевірки доступності API через HTTP.

