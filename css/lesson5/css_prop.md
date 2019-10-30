## 1.	Animation

Комплексный метод анимирования определенных свойств элемента:

    @-webkit-keyframes MyAnimation {
    0% { left: 0; }	
    50% { left: 200px; }	
    100% { left: 20px; }	
     }
    @keyframes MyAnimation {
        0% { left: 0; }	
       50% { left: 200px; }	
      100% { left: 20px; }	
    }

    .example.is-animating {
      ...
      -webkit-animation: MyAnimation 2s; /* Chr, Saf */
                 animation: MyAnimation 2s; /* IE >9, Fx >15, Op >12.0 */
    }


## 2.	Background-image-options

Новое свойства влияющие нa background images, включая 
Background-clip, background-origin   и  background-size:

    -webkit-background-clip: text;
            background-clip: text;
          background-origin: padding-box;
            background-size: cover;

## 3.	Box-reflection

Метод отображения отражения элемента:

     -webkit-box-reflect: below 5px url(mask.png); /* Ch, Saf (+iOs +BB) */
 

## 4.	Filter

Метод наложения эффекта (фильтр) 
(like blur, grayscale, brightness, contrast ,hue
)

      -webkit-filter: grayscale(50%); /* Ch 23+, Saf 6.0+, BB 10.0+ */
              filter: grayscale(50%); /* FF 35+ */



## 5.	Flexbox

Метод позиционирования элемента вертикально или
Горизонтально (друг на друга):

     display: -webkit-box;  /* OLD - iOS 6-, Safari 3.1-6, BB7 */
     display: -ms-flexbox;  /* TWEENER - IE 10 */
     display: -webkit-flex; /* NEW - Safari 6.1+. iOS 7.1+, BB10 */
     display: flex;         /* NEW, Spec - Firefox, Chrome, Opera */



    -webkit-box-flex: 1;   /* OLD - iOS 6-, Safari 3.1-6 */
                  width: 20%;            /* For old syntax, otherwise collapses. */
        -webkit-flex: 1;       /* Safari 6.1+. iOS 7.1+, BB10 */
             -ms-flex: 1;           /* IE 10 */
                 flex: 1;               /* NEW, Spec - Firefox, Chrome, Opera */



## 6.	Font-feature-settings

Метод наложения продвинутых типологических свойств и особенностей  шрифта:

    -webkit-font-feature-settings: "liga" off, "dlig"; /* Ch 16-26, BB 10, And 18.0 */
       -moz-font-feature-settings: "liga=0, dlig=1";   /* Fx 4-21 */
            font-feature-settings: "liga", "dlig";     /* IE 10, Saf 4.0-6.0 */



## 7.	Grids

Метод использования концепции сетки.
Расположения контента
,представляет механизм для разделения свободного места. 
Разбивая сетку на ряды и колоны используя набор предсказуемого поведения
Габаритов сетки:

     display: -ms-grid; /* IE 10 */
     display:     grid; /* None yet */


## 8.	Hyphens


Метод контроля переноса строки с добавлением “-“ :

    -ms-word-break: break-all;
        word-break: break-all;
        word-break: break-word;
    -webkit-hyphens: auto; /* Saf 5.1+ */
    -moz-hyphens: auto; /* Fx 6.0+ */
      -ms-hyphens: auto; /* IE 10+ */
             hyphens: auto; /* None yet */


## 9.	Mask

Метод выведения части элемента на экран, используя выбраное изображение как маску.


    -webkit-mask-image: url(mask.png); /* Ch 4.0-16, Saf 4.0-6.0, And 2.1-4.2, BB 7.0-10.0 */




## 10.	Multicolumn

Метод распределение информации на колонки :

    -webkit-column-count: 2; /* Ch, Saf, And, BB  */
       -moz-column-count: 2; /* Fx */
            column-count: 2; /* IE 10, Op 11.1+ */

    -webkit-column-gap: 10px;
       -moz-column-gap: 10px;
            column-gap: 10px;
 
    -webkit-column-rule: 1px solid #000;
       -moz-column-rule: 1px solid #000;
            column-rule: 1px solid #000;



## 11.	Object-fit:

Это CSS свойство определяет как <img> или <video> элемент изменит свои размеры
По отношению к своему контейнеру.

    -o-object-fit: fill;
    -o-object-fit: contain;
    -o-object-fit: cover;
    -o-object-fit: scale-down;
    -o-object-fit: none;
       object-fit: fill;
       object-fit: contain;
       object-fit: cover;
       object-fit: scale-down;
       object-fit: none;




## 12.	Transforms

Метод трансформации элемента (rotating, scaling, etc) 



    -webkit-transform: rotate(30deg); /* Ch <36, Saf 5.1+, iOS < 9.2, An =<4.4.4 */
        -ms-transform: rotate(30deg); /* IE 9 */
            transform: rotate(30deg); /* IE 10, Fx 16+, Op 12.1+ */




## 13.	Appearance 

Предоставляет ограниченный контроль над внешним видом элементов управления пользовательского интерфейса, которые обычно не могут быть стилизованы с помощью CSS :

            -webkit-appearance: none;
                -moz-appearance: none;
                     appearance: none;


