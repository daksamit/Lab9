# Prezentacja końcowa zamiast kolokwium — Programowanie reaktywne

## Informacja dla studentów

Osoby chętne mogą na koniec semestru przygotować **15-minutową prezentację projektu** zamiast tradycyjnego kolokwium.

Celem prezentacji jest pokazanie, że potrafisz samodzielnie zaprojektować i wykonać prostą aplikację webową, wykorzystując zagadnienia przepracowane na laboratoriach z przedmiotu **Programowanie reaktywne**.

Prezentacja powinna mieć charakter praktyczny: najważniejsze jest działające demo aplikacji oraz omówienie problemów, które pojawiły się podczas pracy.

---

## 1. Co należy przygotować?

Należy przygotować **prostą aplikację webową** oraz krótką prezentację omawiającą projekt.

Aplikacja może być wykonana jako np.:

* lista zadań / TODO app,
* prosty sklep internetowy,
* katalog produktów,
* system rezerwacji,
* dashboard z danymi,
* aplikacja do wyszukiwania i filtrowania danych,
* własny pomysł po wcześniejszym uzgodnieniu z prowadzącym.

Projekt nie musi być bardzo rozbudowany. Ważniejsze jest to, aby był przemyślany, działał poprawnie i zawierał elementy omawiane na laboratoriach.

---

## 2. Wymagane elementy projektu

Projekt powinien zawierać możliwie wiele elementów przepracowanych podczas laboratoriów.

### HTML i CSS

W projekcie powinny znaleźć się:

* poprawna struktura HTML,
* podstawowe style CSS,
* czytelny layout aplikacji,
* podstawowa responsywność lub przynajmniej uporządkowany układ strony.

### JavaScript i DOM

Projekt powinien pokazywać, że rozumiesz podstawy pracy z JavaScriptem:

* obsługa zdarzeń użytkownika, np. kliknięcie, wpisywanie tekstu, wysłanie formularza,
* manipulacja danymi,
* wykorzystanie `localStorage`, np. do zapisu ustawień, danych użytkownika lub stanu aplikacji,
* wykorzystanie `fetch` do pobierania danych albo komunikacji z API.

### React

W aplikacji powinny pojawić się elementy Reacta:

* podział aplikacji na komponenty,
* przekazywanie danych przez props,
* wykorzystanie stanu komponentów,
* renderowanie danych na podstawie stanu aplikacji,
* przynajmniej dwa widoki lub podstrony.

### Routing

Aplikacja powinna zawierać routing, np.:

* strona główna,
* lista elementów,
* szczegóły elementu,
* formularz dodawania,
* strona logowania,
* widok chroniony dostępny tylko po zalogowaniu.

### Formularze

W projekcie powinien znaleźć się przynajmniej jeden formularz, np.:

* formularz logowania,
* formularz dodawania danych,
* formularz wyszukiwania,
* formularz kontaktowy,
* formularz filtrowania danych.

Formularz powinien zawierać podstawową walidację danych.

### Pobieranie i prezentacja danych

Projekt powinien pokazywać pracę z danymi:

* pobieranie danych z API lub pliku/mocka,
* wyświetlanie listy danych,
* filtrowanie,
* sortowanie,
* paginację lub ograniczanie liczby widocznych elementów.

### Autentykacja i autoryzacja

W projekcie powinien pojawić się mechanizm logowania. Może to być uproszczona wersja, np. mock logowania.

Wymagane elementy:

* logowanie użytkownika,
* wylogowanie użytkownika,
* zapis informacji o zalogowaniu,
* widok dostępny tylko dla zalogowanego użytkownika.

Nie jest wymagane tworzenie prawdziwego systemu bezpieczeństwa po stronie backendu.

### Programowanie reaktywne i RxJS

To najważniejszy element projektu.

W aplikacji należy wykorzystać RxJS w praktycznym miejscu, np.:

* wyszukiwarka działająca na podstawie wpisywanego tekstu,
* opóźnianie zapytań przez `debounceTime`,
* przekształcanie danych przez `map`,
* anulowanie poprzednich zapytań przez `switchMap`,
* reagowanie na wiele zdarzeń użytkownika,
* obsługa strumienia danych lub zdarzeń.

Nie wystarczy samo dodanie RxJS do projektu. Trzeba umieć wyjaśnić, **po co został użyty** i jaki problem rozwiązuje.

---

## 3. Struktura prezentacji — 15 minut

Prezentacja powinna być krótka, konkretna i oparta na działającym projekcie.

### 1. Temat i cel aplikacji — około 2 minuty

Powiedz:

* jaką aplikację przygotowałeś/przygotowałaś,
* jaki problem rozwiązuje,
* kto mógłby z niej korzystać.

### 2. Omówienie architektury — około 3 minuty

Pokaż:

* z jakich komponentów składa się aplikacja,
* jakie są główne widoki,
* gdzie przechowywany jest stan,
* skąd pochodzą dane,
* gdzie wykorzystano routing,
* gdzie wykorzystano RxJS.

### 3. Demo aplikacji — około 5–6 minut

Pokaż działanie aplikacji na żywo:

* przejście między widokami,
* formularz,
* pobieranie lub wyświetlanie danych,
* filtrowanie, sortowanie lub paginację,
* logowanie i wylogowanie,
* fragment działania RxJS.

### 4. Problemy i rozwiązania — około 3–4 minuty

To bardzo ważna część prezentacji.

Omów 2–3 problemy, które pojawiły się podczas pracy nad projektem, np.:

* problem z pobieraniem danych,
* problem z aktualizacją widoku,
* problem z formularzem,
* problem z walidacją,
* problem z routingiem,
* problem z logowaniem,
* problem z wieloma zapytaniami wykonywanymi jednocześnie,
* problem z użyciem RxJS.

Przy każdym problemie wyjaśnij:

* co nie działało,
* dlaczego był to problem,
* jak udało się go rozwiązać.

### 5. Wnioski — około 1 minuta

Na koniec powiedz:

* czego nauczyłeś/nauczyłaś się podczas pracy,
* co było najtrudniejsze,
* co można byłoby poprawić lub rozbudować w przyszłości.

---

## 4. Co należy oddać lub pokazać?

Na prezentacji należy pokazać:

* działającą aplikację,
* kod źródłowy projektu,
* krótką prezentację lub uporządkowany plan wypowiedzi,
* fragment kodu, w którym wykorzystano RxJS,
* fragment kodu związany z formularzem, routingiem, pobieraniem danych lub logowaniem.

Projekt powinien być możliwy do uruchomienia lokalnie.

Zalecane jest przygotowanie repozytorium GitHub lub spakowanego projektu z krótką instrukcją uruchomienia.

---

## 5. Kryteria oceny

Projekt i prezentacja będą oceniane według następujących kryteriów:

| Kryterium                                     | Waga |
| --------------------------------------------- | ---: |
| Działający projekt                            |  30% |
| Wykorzystanie tematów z laboratoriów          |  30% |
| Poprawne i uzasadnione użycie RxJS            |  20% |
| Omówienie problemów i sposobu ich rozwiązania |  20% |

---

## 6. Warunki minimalne

Aby prezentacja mogła zastąpić kolokwium, projekt musi spełniać warunki minimalne:

* aplikacja musi się uruchamiać,
* musi być możliwe pokazanie działania projektu na żywo,
* w projekcie musi znaleźć się React,
* w projekcie musi znaleźć się RxJS,
* student/studentka musi umieć wyjaśnić własny kod,
* prezentacja musi zawierać omówienie problemów napotkanych podczas pracy.

Brak działającego demo lub brak wykorzystania RxJS znacząco ogranicza możliwą ocenę.

---

## 7. Przykładowe tematy projektów

### Aplikacja TODO z wyszukiwaniem reaktywnym

Funkcje:

* dodawanie zadań,
* oznaczanie jako wykonane,
* filtrowanie zadań,
* zapis w `localStorage`,
* wyszukiwarka z RxJS i `debounceTime`.

### Katalog produktów

Funkcje:

* pobieranie produktów z API,
* lista produktów,
* szczegóły produktu,
* sortowanie i filtrowanie,
* koszyk zapisany w `localStorage`,
* wyszukiwarka produktów oparta o RxJS.

### System rezerwacji

Funkcje:

* lista terminów,
* formularz rezerwacji,
* logowanie użytkownika,
* widok „Moje rezerwacje”,
* filtrowanie terminów,
* reaktywna obsługa formularza lub wyszukiwarki.

### Dashboard danych

Funkcje:

* pobieranie danych z API,
* prezentacja danych w tabeli,
* filtrowanie,
* sortowanie,
* paginacja,
* odświeżanie danych lub wyszukiwanie z użyciem RxJS.

---

## 8. Na co warto zwrócić uwagę?

Podczas prezentacji ważne jest nie tylko to, że aplikacja działa, ale również to, czy rozumiesz, jak działa.

Przygotuj się do odpowiedzi na pytania:

* Dlaczego podzieliłeś/podzieliłaś aplikację na takie komponenty?
* Gdzie przechowywany jest stan?
* Skąd pobierane są dane?
* Jak działa routing?
* Jak działa formularz i walidacja?
* Gdzie wykorzystano RxJS?
* Jaki problem rozwiązuje RxJS w Twoim projekcie?
* Co było najtrudniejsze?
* Co zrobiłbyś/zrobiłabyś inaczej, gdyby było więcej czasu?

---

## 9. Najważniejsza zasada

Nie chodzi o przygotowanie bardzo dużej aplikacji.

Chodzi o pokazanie, że potrafisz:

* zaplanować prostą aplikację,
* zaimplementować ją krok po kroku,
* wykorzystać React i RxJS,
* rozwiązywać problemy techniczne,
* świadomie wyjaśnić własne decyzje programistyczne.

Dobra prezentacja to taka, w której widać nie tylko efekt końcowy, ale również proces pracy i zrozumienie kodu.
