// $()       Одна и та же конструкция
// JQuery()  Без разницы что писать

// $(document).ready(function () {  // Это старая форма записи
//     $('h3').css({'color':'red'}) // Здесь мы к заголовкам h3 применили стиль css. Смена цвета на красный
// })                               // Вместо h3 можно писать классы и id как они пишутся в css
$(function() { // Это новая форма записи

    // // data-(id) .data()
    // id = $('h1').data('id')         // .data - обращается к данным в HTML-коде. id - это название в HTML-коде после data- ()
    // myName = $('#name').data('name')
    // console.log(`${id} - ${myName}`)

    // // Attributes
    // // Чтобы найти больше информации: https://api.jquery.com/category/selectors/
    // $('h2[title|="test"]').css({'color':'red'}) // |= - css свойство применятеся на все элементы, title которых начинается на test
                                                // $= - title которых заканчивается на test
                                                // *= - title которых содержит test
    // // Selectors
    // $('*').css({'color':'red'}) // * - применяется ко всем элементам страницы
    // $('h1, h2').css({'color':'red'}) // Селекторы можно перечислять через запятую

    // // Селекторы фильтрации: :first, second, etc...; :contains(); odd/even; :empty; :parent; :has; :nth-child()
    // $('ul li:first').css({'color':'red'}) // Обращение к эелементам списка. Odd/Even - Четные/Нечетные
    // $('h2:contains("Hello")').css({'color':'red'})


    // EVENTS  

    // click, dblclick, mouseenter, mouseleave
    // keypress, keydown, keyup
    // change, submit, focus
    // hide(), show(), delay() / спрятать, показать, задержка (обрезают блоки, не уменьшают непрозрачность)
    // fadeIn, fadeOut - то же что и выше, но не обрезают блоки, а уменьшают непрозрачность
    // animate()
    // attr() - Получить любой атрибут элемента
    // resize(), scroll()
    // addClass(), removeClass(), toggleClass()
    // hover() - не работает через on
    // text(), html() - text меняет только текст в элементе, а html можно работать с глубокими тэгами, менять код
    // append(), prepend() - append добавляет в конец html-кода элементы, а prepend добавляет в начало
    // remove(), empty() - remove удаляет элемент из html-кода, а empty очищает элемент, но не удаляет
    // after(), before() - добавляют элемент перед или после другого элемента
    // wrap(), unwrap() - wrap обрамляет элемент в какой-то тэг, а unwrap наоборот удаляет тэг в который обрамлен элемент

    // ПРИМЕРЫ
    // $('button').click(function() { // Лучше использовать второй способ
    //     console.log(1)
    // })
    // $('button').on('click', function() { // on - универсальный способ вызова Event. Лучше использовать его, потому что он работает с динамическими элементами
    //     console.log(1)
    // })

    // $('input[name="text"]').on('change', function() { 
    //     let value = $(this).val() // this - Образаемся к значению input[name="text"]. val() - берем(получаем) значение value из input[name="text"]
    //     $('input[name="submit"]').val(value) // Меняем значение value на другое
    // })

    // $('form').hide(1000).delay(3000).show(1000)

    // $('#animation').animate({'width':'300px'}, 3000)

    // $('input[name="submit"]').attr('value')

    // $(window).on('resize', function() { // scroll записывается так же
    //     // width, height
    //     let width = $(this).width()
    //     console.log(width)
    // })

    // $('h1').addClass('red')
    // $('h1').hover(function() {
    //     $(this).addClass('blue')
    //     $(this).on('click', function () {
    //         $(this).removeClass('blue')
    //     })
    // })
    // $('h1').addClass('red')
    // $('h1').click(function() {
    //     $(this).toggleClass('blue') // toggleClass - включает и отключает класс
    // })

    // let text = $('.hello').text() // Вывод текста, который содержится в элементе
    // console.log(text)
    // $('.hello').text('Я Денис') // Меняем текст элемента 
    // let newHTML = '<li>HoDaFakIsThatGuy</li><li>Second</li><li>Third</li><li>Fourth</li>'
    // $('ul').html(newHTML)

    // $('ul').append('<li>Новая li</li>')

    // $('ul').before('<span>Hello</span>')

    // $('form').wrap('<div></div>')
})                 