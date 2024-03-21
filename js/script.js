let reviews = [
    {
        image: './assets/review1.jpeg',
        text: 'Благодарю за грамотно проведенную консультацию! Все подробно объяснили, был составлен пакет необходимых документов, который был подан в суд.',
        name: 'Александра Шеман',
        profession: 'Аналитик'
    },
    {
        image: './assets/review2.jpeg',
        text: 'Успешно завершилось наше сотрудничество, суд принял решение в мою пользу, чему я очень рада! с удовольствие буду рекомендовать "Мам в праве"!',
        name: 'Сафроненко Наталья',
        profession: 'Журналист'
    },
    {
        image: './assets/review3.jpeg',
        text: 'Выражаю огромную благодарность юристам за оказанную квалифицированную помощь! Работа была выполнена на 100%',
        name: 'Петр Егоров',
        profession: 'Блогер'
    },
    {
        image: './assets/review4.jpeg',
        text: 'Обращалась к юристам Мамы в Праве по вопросу бракоразводного процесса с последующим разделом имущества.  Спасибо специалистам, с их квалифицированной помощью я осталась с большей половиной нажитого за всю совместную жизнь в браке. Юристы постарались и отсудили в мою пользу по-максимуму! Спасибо!',
        name: 'Анна',
        profession: 'Косметолог'
    },
    {
        image: './assets/review5.jpeg',
        text: 'Сколько нервов вымотал бракоразводный процесс - не передать словами. Решила обратиться за помощью специалиста сюда. Большое спасибо - помогли мне решить все сопутствующие вопросы максимально быстро и безболезненно. Это касается как самих нюансов расторжения брака, так и раздела совместно нажитого имущества. Профессиональная помощь опытного юриста оказалась очень кстати.',
        name: 'Анастасия',
        profession: 'Бухгалтер'
    },
    {
        image: './assets/review6.jpeg',
        text: 'Нам пришлось столкнуться с взысканием алиментов, помогли грамотно составить исковое заявление, проконсультировали как и что лучше сделать. чтобы ускорить процесс и получить честную адекватную сумму, а не жалкие копейки. Юристы "Мамы в праве" отлично справились со своими задачами, алименты мы теперь получаем, наше дело быстро рассмотрели и исход у дела был очевиден. Спасибо!',
        name: 'Марина',
        profession: 'Врач'
    },
    {
        image: './assets/review7.jpeg',
        text: 'Обращался за помощью к данным юристам для решения конфликта с моим прошлым начальником, который категорически отказывался выплатить мне задолженность. Я встретился с юристом этого бюро и изложил свою проблему, которую она через суд помогла мне её решить и даже отсудил мне ещё компенсацию. Благодарю вас, за хорошо проделанную работу.',
        name: 'Сергей',
        profession: 'Прораб'
    },
]
/*
let index = 0

let arrowLeft_button = document.querySelector('#arrow_left')
let arrowRight_button = document.querySelector('#arrow_right')
let imageNode = document.querySelector('#reviews_image')
let nameNode = document.querySelector('#reviews_name')
let textNode = document.querySelector('#reviews_text')
let professionNode = document.querySelector('#reviews_profession')

arrowLeft_button.addEventListener('click', function () {
   if (index == 0) {
       index = reviews.length - 1
   }
   else {
       index--
   }
    imageNode.src = reviews[index].image
    nameNode.innerHTML = reviews[index].name
    textNode.innerHTML = reviews[index].text
    professionNode.innerHTML = reviews[index].profession
})

arrowRight_button.addEventListener('click', function () {
    if (index == reviews.length-1) {
        index = 0
    }
    else {
        index++
    }
    imageNode.src = reviews[index].image
    nameNode.innerHTML = reviews[index].name
    textNode.innerHTML = reviews[index].text
    professionNode.innerHTML = reviews[index].profession
})
 */

const button = document.querySelector('#scroll_down');
const form = document.querySelector('#form_scroll');
button.addEventListener('click', function () {
    form.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    });
});

$('.slider').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
});