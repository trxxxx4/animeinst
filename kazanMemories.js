console.log("Что ты тут ищешь?");

const time = new Date();
console.log(`Время сейчас: ${time.getTime()}`);

const countTimeFromPost = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч. назад`;

    }
    else if ((time - loadTime) / 1000 / 60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000 / 60)} м. назад`;
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 < 7)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24)} д. назад`
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 / 7 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 / 7 < 4)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7)} н. назад`
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 30) && ((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 < 12)) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 10.04.24')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} мec. назад`
    }
    
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 > 365) && ((time - loadTime) /  1000 / 60 / 60 / 24  <= 365*4)) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 11.02.25')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} г. назад`
    }
    else if (((time - loadTime) /1000 / 60 / 60 / 24  > 4*365) ) {
        console.log((time - loadTime) / 1000 / 60 / 60 / 24 / 7 / 4 , 'zxc zxc zxc 11.02.25')
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24 / 7/4)} л. назад`
    }
}









const countTimeFromComment = (loadTime) => {
    if (((time - loadTime) / 1000 / 60 / 60 >= 1) && ((time - loadTime) / 1000 / 60 / 60 < 24)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60)} ч.`;

    }
    else if ((time - loadTime) / 1000 / 60 <= 59) {
        return `${Math.floor((time - loadTime) / 1000 / 60)} мин.`;
    }
    else if (((time - loadTime) / 1000 / 60 / 60 / 24 >= 1) && ((time - loadTime) / 1000 / 60 / 60 / 24 < 7)) {
        return `${Math.floor((time - loadTime) / 1000 / 60 / 60 / 24)} нед.`
    }


}


console.log('Время сейчас:', new Date());
console.log('Время когда я пытался разобраться с Date:', new Date(1709723043802));
console.log('Время когда я переделывал проект после 7 месяцев желания переделать, но избегания этого, а так же подготовки к егэ:', new Date(1737901415000));


const storiesUsers = [{
    id: 0,
    nickname: 'Ваша история',
    image: 'https://sun9-36.userapi.com/impg/FZeUb42GgMKrMafth0wX5C7HR9Pm0vlZezXgjA/fMd0p4lzuq0.jpg?size=682x718&quality=95&sign=9afffe43b80fff44c96a3b86534a5e56&type=album'
},
{
    id: 1,
    nickname: 'DAlbarn',
    
    image: 'https://sun9-1.userapi.com/impg/qtYoBJbWY2TjNm7TLYG_yQA2wmfroQTPV-djKg/KXdg0L36K-c.jpg?size=736x736&quality=95&sign=6b3d8dd28ea01dd490239ec8f8d7de83&type=album'
    
},
{
    id: 2,
    nickname: 'GitHub',
    image: 'https://sun9-77.userapi.com/impg/QbEDidhd1FakAE2J5VfmIB_5HWqklAP6yuWv1Q/CgNZB6Q-opc.jpg?size=460x460&quality=95&sign=0ce56a34ebec987fefab5b0d33a96fa1&type=album'
},
{
    id: 3,
    nickname: 'zxcVladdd',
    image: 'https://sun9-67.userapi.com/impg/2s0wbhOCkKRZozWsezo05v2zYrxBqEewTrM8tg/DYgNLMzroV4.jpg?size=485x475&quality=95&sign=6a440a6b627c68b6f0b4e5ad3cc05622&type=album'
},];




const posts = [
    {
        nickname: 'zxcToukaa',
        avatar: 'https://sun9-43.userapi.com/impg/YCE5ZlRjwhvJ0Plk3Zy8KmBfzZQM6SykjER1-A/eZNjkeaN7LE.jpg?size=1200x1199&quality=95&sign=7fd2f77548714d327742c752b6310ed5&type=album',
        media: 'https://sun9-80.userapi.com/impg/qsu-Kdxa803rnkw4J4uobGG1G9QI6TVJEoEdqg/y8eCbYbA5m8.jpg?size=1000x1000&quality=95&sign=833e86bf52d23d8d18057972c0d7f3c4&type=album',
        description: 'Я не эмо если что',
        likes: 36,
        loadTime: 1737901415000,
        id: 'bagdish__media__ended'
    
    
    },
    {
        nickname: 'infinity8',
        avatar: 'https://sun9-29.userapi.com/impg/aIMOLge0IMK-ozpch52b1oaoihWwmwHr8HaZ7Q/ePP3ZQKnbUc.jpg?size=667x633&quality=95&sign=b9995b477a650db545cceeed362a5aa2&type=album',
        media: 'https://sun9-35.userapi.com/impg/WAyWKm9Qzs2-HpYBex4RnGphTplD5gpNZJrmnw/1_efc2jn61E.jpg?size=1600x1000&quality=95&sign=c8b728f6d7268935c53a5f4dee2812f6&type=album',
        description: 'Компания может быть у нас и маленькая, но проблем от нас бесконечно много)',
        likes: 20,
        loadTime: 1737901416000,
        id: 'artem__media'
    
    
    },
    {
        nickname: 'egoist0',
        avatar: 'https://sun9-39.userapi.com/impg/qRqnQDyqDjz9vmkfSwai8w0W_Cmz6Nkbu5Kssw/rdUKbJvaG_A.jpg?size=736x736&quality=95&sign=3c0ee8ee57f925664ed07fba6370b300&type=album',
        media: 'https://sun9-54.userapi.com/impg/JbstCqTC_PGewadG86CNYUW4ljwVEULej6JM2A/2JgHwIms4uE.jpg?size=1200x855&quality=95&sign=49f08f909298dea76d262e3748580c12&type=album',
        description: 'solo mid ez mid difference isagi prime ',
        likes: 115,
        loadTime: 1737901416400,
        id: 'artem__media'
    
    
    },
    {
        nickname: 'miSsa33',
        avatar: 'https://sun9-79.userapi.com/impg/vVBl6nMdHUjI5KASbeA8xXRs30yfODDQEcAbTg/RNDgtxTEakw.jpg?size=735x703&quality=95&sign=1258aa328d7035b95607df5d8638dab4&type=album',
        media: 'https://sun9-65.userapi.com/impg/ysC_zWMF7bd3Nyh575bsir0Y28XmUbCmGls2hA/M7Fg-RytKAI.jpg?size=720x720&quality=95&sign=74097f6f1b4561def4606186ea33d6d8&type=album',
        media2: 'https://sun9-23.userapi.com/impg/1EiUI5daK7mAPvlPP5Y0isRImRRMwKVNs93ZcA/ikXzr-kgnY0.jpg?size=736x736&quality=95&sign=a16c5d47bf8fe2188c37839dccb1eb88&type=album',
        description: 'всем приветики сегодня едем съёмки рекламы нью роков',
        likes: 303,
        loadTime: 1737901416400,
        id: 'bagdish__media__ended'
    
    
    },
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-80.userapi.com/impg/6KS153Go8PtGOtB5FRyGRsyqI7WwX2sUr_QX-Q/o_i_EE-ZBAM.jpg?size=736x736&quality=95&sign=1c3437a23bc77d31dd81f3fefa6ebc0f&type=album',
    description: 'ну это на случай если это увидит кто-то кроме меня...(). ну привет (^_^). upload 8.03.24',
    likes: 24,
    loadTime: 1709897603000,
    id: 'bagdish__media__ended'


},
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun51-1.userapi.com/impg/PO2GzG5OCeIWS9wzS1Tpr_GqhqCiaCY3Jtuo9w/_C29kYtb6Ag.jpg?size=1080x771&quality=96&sign=e793293f8034966aa663f5769513a502&type=album',
    media2: 'https://sun9-59.userapi.com/impg/ARUAEBzak1v-QIKjs3IGah00BWkywT9DGDnlMw/ccotZ5c0UXI.jpg?size=735x728&quality=96&sign=7de79f69a5f7bd77465065d76bcd0ccf&type=album',
    media3: 'https://sun9-54.userapi.com/impg/KpH5N8c3epYx2XpY_OGG3XaiqjqCKd3NSyYwNA/6LhDGi3Vc6U.jpg?size=1280x512&quality=96&sign=de20110ebdb3e1ce269d34350b858e7e&type=album',
    description: 'deadinside ✓ emo ✓ drain ✓ epileptic ✓ paranoid ✓ toxic ✓ bipolar ✓ depressed ✓ tilted ✓ antisocial ✓ sad ✓ broken... 24.03.24 переделал структуру, а 27.03.24 сделал нормально свайпер',
    likes: 11,
    loadTime: 1711547168199,
    id: 'update__site__bagdish__media'


},
{
    nickname: 'trxxxx4',
    avatar: 'https://sun9-42.userapi.com/impg/S-qiKsoFqER8x44-xNd41d7BmRLmKwG4AV2cAQ/_7jTBU3zpxI.jpg?size=736x714&quality=95&sign=aa4c31f24ba1a2447ea7f279e25b81f5&type=album',
    media: 'https://sun9-30.userapi.com/impg/0sLZP_RLQ1MqGrcNBXM-NQyySJyWsfPIwb_mAQ/Ol7fetk94H8.jpg?size=736x745&quality=95&sign=5ff1e3ee1c199ca5d2c6399cd55a7ebd&type=album',
    description: '26.01.25 я что-то порешал егэ немного, поиграл кс и подумал что можно было бы поменять этот проект. где-то с конца лета я подумывал о том, чтобы поменять проект от того, что был изначально, при этом оставив основную задумку. вобщем теперь здесь поменяю немного, при этом оставлю то, что писал от своего лица в прошлом году',
    likes: 4,
    loadTime: 1737901415000,
    id: 'update__site__bagdish__media'


}
]

const likeDefault = 0;





const createPost = (index) => {
    const main = document.querySelector('.main');


    const post = document.createElement('div');
    post.classList.add('post');
    main.appendChild(post);
    const postHeadLineContainer = document.createElement('div');
    postHeadLineContainer.classList.add("post__head__line__container");
    const mediaContainer = document.createElement('div');
    mediaContainer.classList.add("media__container");
    const postFooterContainer = document.createElement('div');
    postFooterContainer.classList.add('post__footer__container');
    const postHeadLine = document.createElement('div');
    postHeadLine.classList.add('post__head__line');
    post.appendChild(postHeadLineContainer);
    post.appendChild(mediaContainer);
    post.appendChild(postFooterContainer);

    postHeadLineContainer.appendChild(postHeadLine);


    const avatarAndNickname = document.createElement('div');
    avatarAndNickname.classList.add('avatar__and__nickname');
    const settingsDiv = document.createElement('div');
    settingsDiv.classList.add('settings__div');
    settingsThreePoints = document.createElement('img');
    settingsThreePoints.src = 'settingThreePoints.svg';
    const avatar = document.createElement('img');
    avatar.classList.add('avatar');
    avatar.src = posts[index].avatar;
    const nickname = document.createElement('h2');
    nickname.classList.add('nickname');
    nickname.innerHTML = posts[index].nickname;
    postHeadLine.appendChild(avatarAndNickname);
    postHeadLine.appendChild(settingsDiv);
    avatarAndNickname.appendChild(avatar);
    avatarAndNickname.appendChild(nickname);
    settingsDiv.appendChild(settingsThreePoints);


    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    postFooterContainer.appendChild(postFooter);
    const likeCommentRepostBooksmarksLine = document.createElement('div');
    likeCommentRepostBooksmarksLine.classList.add('like__comment__repost__booksmarks__line');
    postFooter.appendChild(likeCommentRepostBooksmarksLine);
    const likeCommentRepost = document.createElement('div');
    likeCommentRepost.classList.add('like__comment__repost');
    const bookmarks = document.createElement('div');
    bookmarks.classList.add('bookmarks');
    const bookmark = document.createElement('img');
    bookmark.src = 'Bookmark.svg';
    bookmarks.appendChild(bookmark);
    likeCommentRepostBooksmarksLine.appendChild(likeCommentRepost);
    likeCommentRepostBooksmarksLine.appendChild(bookmarks);
    const like = document.createElement('img');
    like.id = 'heart';
    like.src = 'Heart.svg';
    const comment = document.createElement('img');
    comment.src = "Comment.svg";
    const plane = document.createElement('img');
    plane.src = 'https://sun9-61.userapi.com/impg/BkKnjZ8krpvg-9tRml6xnu5i41JuVMVy9Rd2HQ/S3aAGHTPoOU.jpg?size=167x157&quality=96&sign=ac11f12a912a5816565f345d2b8e6195&type=album';
    plane.id = 'plane';
    likeCommentRepost.appendChild(like);
    likeCommentRepost.appendChild(comment);
    likeCommentRepost.appendChild(plane);
    const likes = document.createElement('h2');
    likes.classList.add('likes');
    likes.innerHTML = `Нравится: ${posts[index].likes}`;
    postFooter.appendChild(likes);
    const descriptionContainer = document.createElement('div');
    descriptionContainer.classList.add('description__container');
    postFooter.appendChild(descriptionContainer);
    const description = document.createElement('p');
    description.classList.add('description');



    descriptionContainer.appendChild(description);
    const nicknameWeight = document.createElement('span');
    const descriptionText = document.createElement('span');
    nicknameWeight.id = 'nickname__weight';
    descriptionText.id = 'description__text';
    nicknameWeight.innerHTML = posts[index].nickname;
    descriptionText.innerHTML = posts[index].description;
    description.appendChild(nicknameWeight);
    description.appendChild(descriptionText);
    const addComment = document.createElement('div');
    addComment.classList.add('add__comment');
    postFooter.appendChild(addComment);
    const addCommentAvatar = document.createElement('img');
    addCommentAvatar.classList.add('add__comment__avatar');
    addCommentAvatar.src = storiesUsers[0].image;

    addComment.appendChild(addCommentAvatar);
    const buttonAndInputPole = document.createElement('div');
    buttonAndInputPole.classList.add('button__and__input__pole');
    addComment.appendChild(buttonAndInputPole);
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Добавьте комменарий...';
    input.classList.add('comment__input');
    buttonAndInputPole.appendChild(input);
    const button = document.createElement('button');
    button.classList.add('add__comment__button');
    button.classList.add('hidden');
    button.disabled = true;
    const pointer = document.createElement('img');
    pointer.src = 'Pointer.svg';
    button.appendChild(pointer);
    buttonAndInputPole.appendChild(button);

    const postData = document.createElement('div');
    postData.classList.add('post__data');

    const loadTime = document.createElement('h2');
    loadTime.innerHTML = countTimeFromPost(posts[index].loadTime);
    loadTime.classList.add('load__time');

    postData.appendChild(loadTime);
    postFooter.appendChild(postData);




    if (!posts[index].media2) {
        const media = document.createElement('img');
        media.classList.add('media__container');
        media.src = posts[index].media;
        media.setAttribute('id', posts[index].id);
        mediaContainer.appendChild(media);

    }
    else {



        mediaContainer.id = 'media__container';
        const swiperContainer = document.createElement('div');
        swiperContainer.setAttribute('class', 'swiper', 'mySwiper');
        swiperContainer.classList.add('mySwiper');
        //swiperContainer.setAttribute('class', 'mySwiper');

        mediaContainer.appendChild(swiperContainer);
        {/*media1 = document.createElement('div');
        media1.innerHTML = "Slide1";
        media2 = document.createElement('div');
        media2.innerHTML = "Slide2";*/}
        //swiperContainer.setAttribute('id', posts[index].id);

        media1 = document.createElement('img');

        media1.src = posts[index].media;
        media2 = document.createElement('img');

        media2.src = posts[index].media2;
        //swiperContainer.appendChild(media1);
        media1.classList.add('swiper-slide');
        media2.classList.add('swiper-slide');
        const swiperWrapper = document.createElement('div');
        swiperWrapper.classList.add('swiper-wrapper');
        swiperContainer.appendChild(swiperWrapper);

        
        swiperWrapper.appendChild(media1);
        swiperWrapper.appendChild(media2);
        //swiperContainer.appendChild(media2);
        const swiperPadignation = document.createElement('div');
        swiperPadignation.classList.add('swiper-pagination');
        swiperContainer.appendChild(swiperPadignation);

        if (posts[index].media3) {
            media3 = document.createElement('img');
            media3.src = posts[index].media3;
            media3.classList.add('swiper-slide');
            swiperWrapper.appendChild(media3);
        }


    }
    



}




posts.forEach((item, index) => {
    createPost(index);
})





const setComment = (inputValue, index) => {

    inputs[index].value = '';
    console.log('zxc');
    let commentContainer = document.createElement('div');
    commentContainer.classList.add('comment__container');
    let avatarContainer = document.createElement('div');
    avatarContainer.classList.add('add__comment__avatar__comment');
    let likeComment = document.createElement('div');
    likeComment.classList.add();
    let avatarImg = document.createElement('img');
    avatarImg.classList.add('add__comment__avatar__comment');
    let commentPoleContainer = document.createElement('div');
    commentPoleContainer.classList.add('comment__pole__container');
    let nickname = document.createElement('h2');
    nickname.classList.add('comment__user');
    let nicknameAndDateContainer = document.createElement('div');
    nicknameAndDateContainer.classList.add('nickname__and__data__container');
    let commentText = document.createElement('h2');
    commentText.classList.add('nickname');
    let respondButton = document.createElement('h2');
    respondButton.classList.add('load__time');
    let commentLoadTime = document.createElement('h2');
    commentLoadTime.classList.add('load__time');
    avatarImg.src = storiesUsers[0].image;
    nickname.innerHTML = 'mio17';
    commentLoadTime.innerHTML = 'Только что'
    commentText.innerHTML = inputValue;
    respondButton.innerHTML = "Ответить";
    document.querySelectorAll('.post')[index].appendChild(commentContainer);
    commentContainer.appendChild(avatarContainer);
    avatarContainer.appendChild(avatarImg);
    commentContainer.appendChild(commentPoleContainer);
    commentContainer.appendChild(likeComment);
    commentPoleContainer.appendChild(nicknameAndDateContainer);
    nicknameAndDateContainer.appendChild(nickname);
    nicknameAndDateContainer.appendChild(commentLoadTime);
    commentPoleContainer.appendChild(commentText);
    commentPoleContainer.appendChild(respondButton);




}


//inputs.forEach((item, index)=>{
//document.querySelectorAll('.add__comment__button').forEach((el, i)=>{
//   el.addEventListener('click', setComment(item.value, index))
// })
//})




//document.querySelectorAll('.add__comment__button').forEach((item, index)=>{
//  item.addEventListener('click', setComment(item.value,  index));
//})
const inputs = document.querySelectorAll('.comment__input');
const inputButtons = document.querySelectorAll('.add__comment__button');



inputButtons.forEach((item, index) => {
    item.addEventListener('click', function () {
        if (item.disabled == false) {
            setComment(inputs[index].value, index)
        }

    })
})

const flButton = () => {

    inputs.forEach((item, index) => {

        if (item.value != '') {
            //console.log(item.value);
            document.querySelectorAll('.add__comment__button')[index].classList.remove('hidden');
            document.querySelectorAll('.add__comment__button')[index].classList.add('view__animation');

            document.querySelectorAll('.add__comment__button')[index].disabled = false;

            //document.querySelectorAll('.add__comment__button')[index].addEventListener('click', setComment(item.value,  index));
            //setComment(item.value, index)
            //inputValueFunk(item.value);



        }
        else {
            document.querySelectorAll('.add__comment__button')[index].classList.remove('view__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.add('hidden__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.remove('hidden__animation');
            document.querySelectorAll('.add__comment__button')[index].classList.add('hidden');
            document.querySelectorAll('.add__comment__button')[index].disabled = true;

        }

    });
}






//let button = document.createElement('button');
//button.classList.add('add__comment__button');
//button.innerHTML = '<svg  viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 6V18M12 6L7 11M12 6L17 11" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>';
//inputsDiv[index].appendChild(button);

document.querySelectorAll('.comment__input').forEach((item) => {
    item.addEventListener('input', flButton)
});




{/*
for (let i = 0; i < document.querySelectorAll('.post').length; i++) {
    if (posts[i].media) {
        document.querySelectorAll('.avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.nickname')[i].innerHTML = posts[i].nickname;

        document.querySelectorAll('.post__media')[i].src = posts[i].media;
        document.querySelectorAll('.likes')[i].innerHTML = `Нравится: ${posts[i].likes}`;
        document.querySelectorAll('#description__text')[i].innerHTML = posts[i].description;
        document.querySelectorAll('#nickname__weight')[i].innerHTML = posts[i].nickname;
        document.querySelectorAll('.add__comment__avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.load__time')[i].innerHTML = countTimeFromPost(posts[i].loadTime);
        

    }
    else {
        document.querySelectorAll('.avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.nickname')[i].innerHTML = posts[i].nickname;


        document.querySelectorAll('.likes')[i].innerHTML = `Понравилось: ${posts[i].likes}`;
        document.querySelectorAll('#description__text')[i].innerHTML = posts[i].description;
        document.querySelectorAll('#nickname__weight')[i].innerHTML = posts[i].nickname;
        document.querySelectorAll('.add__comment__avatar')[i].src = posts[i].avatar;
        document.querySelectorAll('.load__time')[i].innerHTML = countTimeFromPost(posts[i].loadTime)

    }

}
*/}


for (let i = 0; i < storiesUsers.length; i++) {
    document.querySelectorAll('.user__image')[i].src = storiesUsers[i].image;
    document.querySelectorAll('.user__name')[i].innerHTML = storiesUsers[i].nickname;
}



console.log('<3');

