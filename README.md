# Laboratorium 9 – Routing w ReactJS

To repo jest starterem do ćwiczenia z `react-router-dom`. Projekt działa, ale najważniejsze elementy routingu są zostawione jako `TODO`.

## Cel

Po wykonaniu zadania powinieneś umieć:

- uruchomić routing przez `<BrowserRouter>`
- dodać trasy przez `<Routes>` i `<Route>`
- nawigować przez `<Link>`, `<NavLink>` i `useNavigate()`
- odczytać parametr URL przez `useParams()`
- dodać stronę `404`

## Start

```bash
npm install
npm run dev
```

- frontend: `http://localhost:5173`
- mock API: `http://localhost:3001`

## Co masz zrobić

Uzupełnij `TODO` w tych plikach:

- `src/App.jsx` – trasy `/`, `/posts`, `/posts/:id`, `/about`, `*`
- `src/components/Navbar.jsx` – menu przez `<NavLink>`
- `src/components/Home.jsx` – przejście do `/posts` przez `useNavigate()`
- `src/components/PostsTable.jsx` – link „Szczegóły” przez `<Link>`
- `src/components/PostDetail.jsx` – `useParams()`, pobranie posta, loading/error/success, powrót przez `useNavigate()`
- `src/components/NotFound.jsx` – treść strony `404` i link powrotny
- `src/components/About.jsx` – nazwa aplikacji, autor, krótki opis

## Kolejność pracy

1. Uruchom projekt.
2. Dodaj trasy w `App.jsx`.
3. Uzupełnij nawigację w `Navbar.jsx` i `Home.jsx`.
4. Dodaj link do szczegółów w `PostsTable.jsx`.
5. Zaimplementuj `PostDetail.jsx`.
6. Uzupełnij `NotFound.jsx` i `About.jsx`.

## Jak sprawdzić wynik

- `/` pokazuje stronę główną
- `/posts` pokazuje listę
- kliknięcie „Szczegóły” otwiera `/posts/:id`
- przycisk na stronie głównej przechodzi do `/posts`
- błędny adres, np. `/abc`, pokazuje `404`
- aktywny link w menu jest wyróżniony

## API

- `GET /api/posts`
- `GET /api/posts/:id`
