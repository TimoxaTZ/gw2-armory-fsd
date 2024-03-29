# Архитектура

>Слой app: инициализация приложения.

>Слой service: отдельные логические реализации.
>+ Все сервисы должны наименоваться с маленькой буквы в файле index.tsx 
>+ structure: изначальное состояние slice
>+ store: настройка slice и actions
>+ thunks: для каждой thunk свой файл, закидываются в io, а далее сами подцепляются
>+ api: (Data Access Layer)
>+ container: реализация логики
>+ lib: utility функции, типизация
>+ selectors (Реселекты для мемоизации бизнес логики)

>Слой widget отдельные куски приложения:
>+ Все виджеты должны именоваться с большой буквы в файле index.tsx
>+ container/useContainer.ts (все side effects для ui, мемоизация логики)
>+ ui (чистая компонента, отвечающая только за отрисовку)
>+ templates (декомпозиция UI для более простого масштабирования приложения в будущем)
>+ lib: utility функции
>+ store: (необязательно) обычно используется для локального состояния загрузки или других процессов, которые зависят от других thunks
>+ structure: (необязательно) изначальное состояние slice
>

>Слой layouts: верстка каркасов приложения

>Слой pages: верстка страницы, объединяющая отдельные логические реализации

> #useActions
> hook для выполнения dispatch
> 
> const {} = useActions(sample.Actions)
> 
> где action импортируются через чей-то index.tsx

> #useAppSelector
> вместо useSelector используется типизированный useAppSelector

> Для создания новых сущностей просто копируйте папку _sample/_Sample
> 
>+ не забывайте импортировать slice в store index/store/reducers
>+ каждый slice и thunk должны иметь уникальный: name (slice), typePrefix (thunk)
