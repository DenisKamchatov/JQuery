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

    // Attributes
    // Чтобы найти больше информации: https://api.jquery.com/category/selectors/
    $('h2[title|="test"]').css({'color':'red'}) // |= - css свойство применятеся на все элементы, title которых начинается на test
                                                // $= - title которых заканчивается на test
                                                // *= - title которых содержит test
})                 