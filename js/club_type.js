// 캠퍼스 마다 다르게 나오게 하기
const chungu = document.querySelector('.chungu button');
const chungu_list = document.querySelector('.chungu .chungu_list');
const jeungpyeong = document.querySelector('.jeungpyeong button');
const jeungpyeong_list = document.querySelector('.jeungpyeong .jeungpyeong_list');
const Uiwang = document.querySelector('.Uiwang button');
const Uiwang_list = document.querySelector('.Uiwang .Uiwang_list');

// 동아리 종류
const chungu_club = document.querySelector('.chungu_kinds');
const jeungpyeong_club = document.querySelector('.jeungpyeong_kinds');
const Uiwang_club = document.querySelector('.Uiwang_kinds');

chungu.addEventListener('click', function(){    
    chungu_list.classList.add('event');
    jeungpyeong_list.classList.remove('event');
    Uiwang_list.classList.remove('event');
    chungu_club.classList.add('event');
    jeungpyeong_club.classList.remove('event');
    Uiwang_club.classList.remove('event');

    for(var i = 0; i < sport.length; i++){
        sport[i].classList.remove('event');
    }
    for(var j = 0; j < music.length; j++){
        music[j].classList.remove('event');
    }
    for(var z = 0; z < volunteer.length; z++){
        volunteer[z].classList.remove('event');
    }
})
jeungpyeong.addEventListener('click', function(){
    chungu_list.classList.remove('event');
    jeungpyeong_list.classList.add('event');
    Uiwang_list.classList.remove('event');
    chungu_club.classList.remove('event');
    jeungpyeong_club.classList.add('event');
    Uiwang_club.classList.remove('event');

    for(var i = 0; i < sport.length; i++){
        sport[i].classList.remove('event');
    }
    for(var j = 0; j < music.length; j++){
        music[j].classList.remove('event');
    }
    for(var z = 0; z < volunteer.length; z++){
        volunteer[z].classList.remove('event');
    }
})
Uiwang.addEventListener('click', function(){
    chungu_list.classList.remove('event');
    jeungpyeong_list.classList.remove('event');
    Uiwang_list.classList.add('event');
    chungu_club.classList.remove('event');
    jeungpyeong_club.classList.remove('event');
    Uiwang_club.classList.add('event');

    for(var i = 0; i < sport.length; i++){
        sport[i].classList.remove('event');
    }
    for(var j = 0; j < music.length; j++){
        music[j].classList.remove('event');
    }
    for(var z = 0; z < volunteer.length; z++){
        volunteer[z].classList.remove('event');
    }
})

/* 분과별 나오는 프로필 제한*/
// 분과 별로 변수 생성
const sport_li = document.querySelectorAll('.sport_li');
const music_li = document.querySelectorAll('.music_li');
const volunteer_li = document.querySelectorAll('.volunteer_li');

// 분과 별로 보여지는 프로필 변수 생성
const sport = document.querySelectorAll('.sport');
const music = document.querySelectorAll('.music');
const volunteer = document.querySelectorAll('.volunteer');

// 체육분과 클릭 시
for(var i = 0; i< sport_li.length; i++){
    sport_li[i].addEventListener('click', function(){
        for(var j = 0; j < music.length; j++){
            music[j].classList.add('event');
        }
        for(var z = 0; z < volunteer.length; z++){
            volunteer[z].classList.add('event');
        }
        for(var e = 0; e < sport.length; e++){
            sport[e].classList.remove('event');
        }
    }) 
}
// 음악분과 클릭 시
for(var i = 0; i < music_li.length; i++){
    music_li[i].addEventListener('click', function(){
        for(var j = 0; j < sport.length; j++){
            sport[j].classList.add('event');
        }
        for(var z = 0; z < volunteer.length; z++){
            volunteer[z].classList.add('event');
        }
        for(var e = 0; e < music.length; e++){
            music[e].classList.remove('event');
        }
    })
}
// 봉사문과 클릭 시
for(var i = 0; i < volunteer_li.length; i++){
    volunteer_li[i].addEventListener('click', function(){
        for(var j = 0; j < sport.length; j++){
            sport[j].classList.add('event');
        }
        for(var z = 0; z < music.length; z++){
            music[z].classList.add('event');
        }
        for(var e = 0; e < volunteer.length; e++){
            volunteer[e].classList.remove('event');
        }
    })
}


// campus_list부분 특정 위치에 스크롤 되면 화면에 fixed(고정)되도록 하기.
// 스크롤 이벤트
document.addEventListener('scroll',function(){
    const campus_list = document.querySelector('.campus_list');
var currentScrollValue = document.documentElement.scrollTop;
    console.log('currentScrollValue : ' + currentScrollValue);
    if(currentScrollValue > 500){
        campus_list.classList.add('event');
        up_arrow.classList.add('event');
    }
    else{
        campus_list.classList.remove('event');
        up_arrow.classList.remove('event');
    }
})

// 화살표 누르면 사이트 상단으로 이동
const up_arrow = document.querySelector('.up_arrow');
up_arrow.addEventListener('click', function(){
    window.scrollBy(0, -10000);
})

// 동아리 누르면 프로필로 이동
const club = document.querySelectorAll('.club');
for(var i = 0; i < club.length; i++){
    club[i].addEventListener('click',function(){
        location.href = 'http://127.0.0.1:5500/html/club_profile.html';
    })
}

