const dark_bg = document.querySelectorAll('.dark_bg');
const close = document.querySelectorAll('.close');
const introduces = document.querySelector('.introduces'); // 동아리 소개 버튼
const introduces_view = document.querySelector('.introduce_section'); // 동아리 소개 창
const picture = document.querySelector('.pictures') // 동아리 사진 버튼
const picture_view = document.querySelector('.picture_section'); // 동아리 사진 창

// 동아리 수정 창 생성
const profile_correction_text = document.querySelector('.profile_correction_text');
const profile_correction = document.querySelector('.profile_correction');

profile_correction_text.addEventListener('click', function(){
    profile_correction.classList.add('event');
})


// 동아리 소개 창 생성
introduces.addEventListener('click', function(){
    introduces_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
introduces.addEventListener('mouseover',function(){
    introduces.classList.add('event');
})
introduces.addEventListener('mouseout',function(){
    introduces.classList.remove('event');
})

// 동아리 사진 창 생성
picture.addEventListener('click', function(){
    picture_view.classList.add('event');
    for(var i = 0; i < dark_bg.length; i++){
        dark_bg[i].classList.add('event');
    }
})
for(var i = 0; i < close.length; i++){
    close[i].addEventListener('click', function(){
        // close를 누르면 화면 사라지도록 하기
        profile_correction.classList.remove('event');
        introduces_view.classList.remove('event'); 
        picture_view.classList.remove('event');
        for(var j = 0; j < dark_bg.length; j++){
            dark_bg[j].classList.remove('event');
        }
    })
}


// body에 이벤트가 생기면 위로 이동
const body = document.querySelector('body');
const profile = document.getElementById('profile');
const header_back = document.querySelector('header');
const section = document.querySelector('section');

const body_event = profile.addEventListener('click', function(){
    body.classList.toggle('event');
    section.classList.toggle('event');
})
if(body_event){
    header_back.style.opacity = .1;
}
// 동아리 가입 버튼을 누르면 사이트 이동, 동아리 전체보기 누르면 이전 사이트로 이동
const join = document.querySelector('.joins');
const all = document.querySelector('.all');
join.addEventListener('click', function(){
    location.replace('https://docs.google.com/forms/d/1sy1X48qtSN6saIMrJcVjj4v-IJcjUMLWv37v1tjw5hE/edit?usp=forms_home&ths=true');
})
all.addEventListener('click', function(){
    location.replace('http://127.0.0.1:5500/html/club_type.html');
})

// 이미지 파일 선택시 특정 지역에 선언
const reader = new FileReader();
// 프로필 지정
const profileImg= document.getElementById("profile");

const readImage_profile =  async(input) => {
    if(input.files && input.files[0]){
        reader.onload = e => {
            profileImg.src = e.target.result;
        }   
        reader.readAsDataURL(input.files[0]);
        alert("프로필 설정이 완료되었습니다.");
    }
}

const input_profile = document.getElementById("input-profile");
input_profile.addEventListener("change", e => {
    readImage_profile(e.target);
})
// 배경화면 자정
const backImg= document.getElementById("backImg");
function readImage_backImg(input){
    if(input.files && input.files[0]){
        reader.onload = e => {
            backImg.src = e.target.result;
        }
        reader.readAsDataURL(input.files[0]);
        alert("배경화면 설정이 완료되었습니다.");
    }
}
const input_backImg = document.getElementById("input-backImg");
input_backImg.addEventListener("change", e => {
    readImage_backImg(e.target);
})
// 동아리 사진 지정
const pic_section = document.querySelector(".picture_section .img");
const big_pic_contain = document.querySelector('.picture_section img.picture_section_img');
  const previewFiles = function() {
    var files   = document.querySelector('.picture_choice input[type=file]').files; // 파일 선택 부분
    function readAndPreview(file) {
      if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
        const reader = new FileReader();
        reader.addEventListener("load", function () {
          var picture_inner = document.createElement("img");
          pic_section.appendChild( picture_inner );
          picture_inner.src = reader.result;
          alert("동아리 사진이 지정되었습니다.");
          picture_inner.addEventListener('click', function(){
            big_pic_contain.classList.add('event');
            big_pic_contain.src = reader.result;
            // 이미지 클릭하면 다시 사라지는 구조로 만들기
          })
          big_pic_contain.addEventListener('click',function(){
              big_pic_contain.classList.remove('event');
          })
        }, false);
        reader.readAsDataURL(file);
      }
    }
    if (files) {
      [].forEach.call(files, readAndPreview);
    }
  }



// 초기화
const initial_value = document.querySelector('.initial_value input');
initial_value.addEventListener('click', function(){
    backImg.src = "https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"; // 배경 초기화
    profileImg.src = "https://dummyimage.com/500x500/ffffff/000000.png&text=preview+image"; // 프로필 초기화
    // hasChildNodes()는 자식노드유무 체크한다.
    while(pic_section.hasChildNodes()){ // 부모노드가 자식이 있는지 여부를 알아낸다.
        pic_section.removeChild(
            pic_section.firstChild
        );
    }
    alert('초기화되었습니다.');
})