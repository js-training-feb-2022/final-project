# Getting Started with Pokedex 2022 App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Decsription

Pokedex 2022 app displays a variety of pokemons, which can be caught and released afterwards.
Also, every pokemon card can be viewed in details by clicking on it. Moreover, you can view a list of caught pokemons on a separate page.

App is published at https://zaymaria.github.io/final-project/

## Installation

In order to run this app do the following steps:

1. Install the dependencies by running `npm install`.
2. Run the `npm start` to view it in your browser on http://localhost:3000


## Additional data

Additioal libraries used: axios, moment
LocalStorage was used for caught pokemon data storage.
Pokemons data is taken from the following API: https://pokeapi.co/


## Final project task

Необходимо создать приложение pokedex.

Это последнее задание в курсе. Дедлайн - 17.03!

Для того, чтобы вашу работу можно было проверить, необходимо выполнить следующие шаги:
Делаете форк от репозитория

Клонируете форкнутый репозиторий

Делаете коммит(ы) в форкнутый репозиторий

Создаете пулл-реквест в основной репозиторий

Имя пулл-реквеста должно соответствовать следующему шаблону: FirstName LastName. Например, Ivan Ivanov

Для выполнения этого ДЗ Вам понадобятся следующие npm-пакеты:
react
react-dom
react-router-dom
Выше описаны только самые необходимые пакеты, вы всегда можете добавить что-то еще, например, prop-types или axios. Для создания react-проекта разрешено пользоваться create-react-app.

Требования:
Главная страница. Здесь должен выводиться список покемонов карточками. В каждой карточке должен быть id покемона, его имя и кнопка "Catch" (поймать). При нажатии на кнопку покемон "ловится". У пойманных покемонов кнопка должна быть disabled. При нажатии на карточку покемона - нужно переходить на страничку покемона.

Страница покемона. Здесь должна выводиться более подробная информация по указанному покемону: id, имя, картинка, названия его способностей (abilities), названия его типов (types), вес (weight), текущий статус (пойман или нет). Если покемон пойман, то необходимо показывать дату его поимки.

Пойманные покемоны. Здесь логика точно такая же, как и на главной странице, за исключением того, что должны выводиться только пойманные покемоны.

Общие требования:
Пагинация. Может быть реализована любым способом:

Кнопка "Load more", которая подгружает следующую страницу в общий список
Endless scroll. Принцип тот же, что и у load more, за исключением того, что следующая порция должна подгружаться автоматически при достижении конца страницы.
Традиционная пагинация с номерами страниц
Навигация. Может быть реализована в хедере, футере или же в боковом меню. Позволяет переключаться между главной страницей и страницей пойманных покемонов, а также возвращаться на эти страницы со страницы покемона.

Адаптивный дизайн. desktop, tablet, mobile.

Кросс-браузерность. Должны поддерживаться последние версии современных браузеров.

Работа с данными:
Данные по покемонам мы будем получать с помощью PokeAPI:

Чтобы получить общую информацию по всем покемонам: GET https://pokeapi.co/api/v2/pokemon. Мы получим JSON следующего формата:
{
   "count": 1118,
   "next": "https://pokeapi.co/api/v2/pokemon?offset=719&limit=399",
   "previous": null,
   "results": [
      {
         "name": "bulbasaur",
         "url": "https://pokeapi.co/api/v2/pokemon/1/"
      },
      {
         "name": "ivysaur",
         "url": "https://pokeapi.co/api/v2/pokemon/2/"
      },
      ...
   ]
}
Покемоны в массиве уже отсортированы, т.е. индексы элементов массива results соответствуют id покемонов

Чтобы получить информацию по нужному количеству покемонов, добавьте к запросу параметр limit. Например, GET https://pokeapi.co/api/v2/pokemon?limit=12 вернет информацию по первым 12 покемонам

Чтобы получить информацию по следующей партии покемонов, выполните запрос к URL из поля next. Для предыдущей партии, выполните запрос к URL из поля previous. Это поможет вам при реализации пагинации

Чтобы получить более подробную информацию по одному покемону, необходимо сделать запрос GET "https://pokeapi.co/api/v2/pokemon/:id", где id - это индекс объекта нужного покемона в массиве results(данная ссылка также доступна в поле url каждого покемона). Мы получим JSON следующего формата:

{
   "abilities": [
      {
         "ability": {
            "name": "overgrow",
            "url": "https://pokeapi.co/api/v2/ability/65/"
         },
         "is_hidden": false,
         "slot": 1
      },
      {
         "ability": {
            "name": "chlorophyll",
            "url": "https://pokeapi.co/api/v2/ability/34/"
         },
         "is_hidden": true,
         "slot": 3
      },
      ...
   ],
   ...
   "types": [
      {
         "slot": 1,
         "type": {
            "name": "grass",
            "url": "https://pokeapi.co/api/v2/type/12/"
         }
      },
      {
         "slot": 2,
         "type": {
            "name": "poison",
            "url": "https://pokeapi.co/api/v2/type/4/"
         }
      }
   ],
   "weight": 69,
   "sprites": {
      "other": {
         "official-artwork": {
            "front-default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png"
         },
      },
      ...
   }
}
Путь к картинке покемона находится здесь: pokemon.sprites.other['official-artwork'].front_default
Для страницы покемона нам потребуется следующая информация: abilities, types, weight. Обратите внимание, что для abilities и для types нам необходимо выводить только поле name.
Рекомендации:
Используйте css-framework, чтобы верстка заняла минимум времени.

Постарайтесь построить хорошую архитектуру приложения. Как минимум, стоит отделить бизнес-логику приложения от ее презентационного слоя (деление на "умные" и "глупые" компоненты).

Nice to have, задания со звездочкой:
Мы приветствуем инициативу. При желании, в дополнение к обязательным и общим требованиям:

Если есть опыт работы с дополнительными пакетами, не указанными в списке - не стесняйтесь их использовать (redux, MobX, styled-components, css-modules, и т.д.)

Приветствуется создание доступного интерфейса.

Реализация дополнительного функционала: при поимке покемона кнопка "Catch" не становится disabled, а меняется на "Release", что позволяет отпустить пойманного покемона.

Любые другие улучшения, не противоречащие обязательным и общим требованиям :)

Не забудьте продемонстрировать все реализованные "задания со звёздочкой" на финальном собеседовании, которое состоит из защиты проекта и технического интервью! Желаем удачи!

Если не любите покемонов:
Если есть особая нетерпимость к покемонам, то можно воспользоваться любым понравившимся API и реализовать все фичи из задания (функциональность по поимке покемона можно заменить закладками, лайками и т.п.)