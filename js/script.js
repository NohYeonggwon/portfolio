/*--------------------------------------------------------------*/
/*스킬 list 클릭*/
const iconItems = document.querySelectorAll('.icons li');
const textItems = document.querySelectorAll('.texts li');

iconItems.forEach(icon => {
    icon.addEventListener('click', () => {
        // 1. 모든 아이콘에서 on 제거
        iconItems.forEach(i => i.classList.remove('on'));

        // 2. 클릭한 아이콘에 on 추가
        icon.classList.add('on');

        // 3. 모든 텍스트에서 active 제거
        textItems.forEach(text => text.classList.remove('active'));

        // 4. 클릭한 아이콘 클래스 이름으로 매핑된 텍스트에 active 추가
        const classList = icon.classList;
        let matchedClass = '';

        // 'html', 'css', 'js' 등 중에서 실제 클래스명 찾기
        classList.forEach(cls => {
            if (['html', 'css', 'js', 'ps', 'ai', 'figma'].includes(cls)) {
                matchedClass = cls;
            }
        });

        // 매핑: html → p1, css → p2, ..., figma → p6
        const mapping = {
            html: 'p1',
            css: 'p2',
            js: 'p3',
            ps: 'p4',
            ai: 'p5',
            figma: 'p6'
        };

        const targetClass = mapping[matchedClass];
        const targetText = document.querySelector(`.texts .${targetClass}`);
        if (targetText) {
            targetText.classList.add('active');
        }
    });
});
/*--------------------------------------------------------------*/


/*--------------------------------------------------------------*/
/*슬라이드 hover*/
const targets = document.querySelectorAll('.swiper-slide');

targets.forEach(target => {
    const box = target.querySelector('.img-inner');

    target.addEventListener('mouseenter', () => {
        box.style.display = 'block';
    });

    target.addEventListener('mouseleave', () => {
        box.style.display = 'none';
    });
});
/*--------------------------------------------------------------*/


/*--------------------------------------------------------------*/
/* Design Project 팝업 */
// SlideShow 요소와 popup 요소 선택
const slideShows = document.querySelectorAll('#sec3 .SlideShow');
const popup = document.querySelector('.popup');
const popupInner = document.querySelector('.popup_inner');
const popupContents = document.querySelectorAll('.popup_inner > div');

// 각 SlideShow에 클릭 이벤트 등록
slideShows.forEach((slide, index) => {
    slide.addEventListener('click', () => {
        console.log()
        // 모든 popup 내부 콘텐츠 숨김
        popupContents.forEach(content => content.style.display = 'none');

        // 해당 index에 맞는 콘텐츠만 보이기
        if (popupContents[index]) {
            popupContents[index].style.display = 'block';
        }

        // popup 보여주기
        popup.style.display = 'flex';

        // 스크롤 맨 위로 초기화
        popupInner.scrollTop = 0;
    });
});

// popup 영역 바깥 클릭 시 닫기
popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});
/*--------------------------------------------------------------*/


/*--------------------------------------------------------------*/
// Design Project css 부분 표현
const slideImages = [
    'cont1.jpg',
    'cont2_1.jpg',
    'cont3.jpg',
    'cont4.jpg',
    'cont5.jpg',
    'cont6.jpg',
    'cont7.jpg',
    'cont8.jpg',
    'cont9_1.jpg',
    'cont10_1.jpg',
    'cont11.jpg'
];

const slides = document.querySelectorAll('#sec3 .Slides .SlideShow');

slides.forEach((slide, index) => {
    const imgDiv = slide.querySelector('.img');
    if (imgDiv && slideImages[index]) {
        imgDiv.style.backgroundImage = `url(img/design/${slideImages[index]})`;
    }
});
/*--------------------------------------------------------------*/


/*--------------------------------------------------------------*/
//Top 버튼 클릭
const topBtn = document.getElementById("topBtn");

// 스크롤 시 버튼 표시 여부 판단
window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});

// 버튼 클릭 시 맨 위로 부드럽게 이동
topBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
/*--------------------------------------------------------------*/


/*--------------------------------------------------------------*/
// full_page
/* const menus = document.querySelectorAll("nav li a");
const pages = document.querySelectorAll("header, section, footer");
let currentIndex = 0;
let isScrolling = false;

// menu 클릭 시 천천히 스크롤 이동
menus.forEach(item => {
    item.addEventListener("click", (e) => {
        e.preventDefault(); // a 태그의 기본 이동 막기

        const targetId = item.getAttribute("href"); // #sec1, #sec2 등
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth"
            });
        }
    });
});

function scrollToPage(index) {
    if (index < 0 || index >= pages.length) return;
    isScrolling = true;

    pages[index].scrollIntoView({ behavior: "smooth" });

    // 현재 스크롤 중임을 짧은 시간만 유지 (애니메이션보다 짧게)
    setTimeout(() => {
        isScrolling = false;
        currentIndex = index;
    }, 600); // 이 시간은 scrollIntoView 속도와 일치시켜야 부드럽고 안정적입니다.
}

// 마우스 휠 이벤트
window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToPage(currentIndex + 1);
    } else if (e.deltaY < 0) {
        scrollToPage(currentIndex - 1);
    }
});

// nav 클릭 시 currentIndex 업데이트
document.querySelectorAll("nav li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").replace("#", "");
        const targetIndex = pageIds.indexOf(targetId);
        if (targetIndex !== -1) {
            scrollToPage(targetIndex);
        }
    });
}); */
/*--------------------------------------------------------------*/

const pages = document.querySelectorAll("header, section, footer");
let currentIndex = 0;
let isScrolling = false;

// 각 페이지의 ID를 배열로 추출
const pageIds = Array.from(pages).map(page => page.id || "header");

// 스크롤 함수
function scrollToPage(index) {
    if (index < 0 || index >= pages.length) return;
    isScrolling = true;

    pages[index].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => {
        isScrolling = false;
        currentIndex = index;
    }, 600); // 스크롤 중복 방지 시간
}

// 휠 이벤트
window.addEventListener("wheel", (e) => {
    if (isScrolling) return;

    if (e.deltaY > 0) {
        scrollToPage(currentIndex + 1);
    } else if (e.deltaY < 0) {
        scrollToPage(currentIndex - 1);
    }
});

// nav 클릭 시 currentIndex 업데이트
document.querySelectorAll("nav li a").forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href").replace("#", "");
        const targetIndex = pageIds.indexOf(targetId);
        if (targetIndex !== -1) {
            scrollToPage(targetIndex);
        }
    });
});