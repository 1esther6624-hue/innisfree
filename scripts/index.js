/* 이니스프리 js */


// ================================================================ 헤더 배경
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
        header.classList.add('blur');
    } else {
        header.classList.remove('blur');
    }
});

// ============================================================================ 피부고민별 섹션
const tabs = document.querySelectorAll('.tabs .tab');
const concernList = document.querySelector('#concernList');

const products = {
    // 수분 · 보습
    '수분 · 보습': [
        {
            img: './images/concern1_1.png',
            name: '그린티 세라마이드 미스트 90mL',
            desc: '손건조부터 촉촉하게 채워주는 데일리 수분 미스트',
            price: '11,500원',
            oldPrice: '16,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern1_2.png',
            name: '그린티 히알루론산 스킨 170mL',
            desc: '손건조부터 촉촉하게 채워주는 데일리 수분 세럼',
            price: '13,300원',
            oldPrice: '19,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern1_3.png',
            name: '그린티 판테놀 수분 젤 크림 50mL',
            desc: '산뜻한 보습막 형성 겉은 보송하고 속은 촉촉한 마무리',
            price: '16,200원',
            oldPrice: '27,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern1_4.png',
            name: '그린티 아미노 수분 폼 클렌징 250g',
            desc: '클렌징 후에도 속당김 없이 촉촉하게, 부드럽게',
            price: '13,680원',
            oldPrice: '19,000원',
            rating: '4.9 · +999'
        }
    ],

    // 트러블 · 진정
    '트러블 · 진정': [
        {
            img: './images/concern2_1.png',
            name: '레티놀 PDRN 스킨부스터 앰플 25mL',
            desc: 'PDRN™과 레티놀의 시너지로 모공결과 속광을 동시에 관리',
            price: '28,800원',
            oldPrice: '40,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern2_2.png',
            name: '레티놀 시카 모공 흔적 앰플 50mL',
            desc: '피부과·하이포알러지 테스트를 완료한 저자극 포뮬러',
            price: '45,460원',
            oldPrice: '55,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern2_3.png',
            name: '비자 트러블 폼 클렌징 150g',
            desc: '논코메도제닉 테스트 완료 여드름성 피부도 안심하고 사용',
            price: '10,000원',
            oldPrice: '12,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern2_4.png',
            name: '비자 트러블 토너 170mL',
            desc: '청량한 워터 제형이 잔여감 없이 흡수되어 매끈한 결을 선사',
            price: '13,000원',
            oldPrice: '19,000원',
            rating: '4.9 · +999'
        }
    ],

    // 모공 · 피지
    '모공 · 피지': [
        {
            img: './images/concern3_1.png',
            name: '레티놀 시카 모공 흔적 크림 50mL',
            desc: '레티놀 리포좀에 캡슐화된 트리플 레티놀 시스템',
            price: '21,450원',
            oldPrice: '33,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern3_2.png',
            name: '화산송이 파하 모공 매끈결 토너 170mL',
            desc: '화산송이 파우더와 PHA가 함유된 듀얼 모공 케어 토너',
            price: '10,000원',
            oldPrice: '20,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern3_3.png',
            name: '슈퍼 화산송이 모공팩 블랙헤드 모공팩 80g',
            desc: '화산송이 캡슐로 모공 속 과다 피지·노폐물을 정돈',
            price: '16,200원',
            oldPrice: '27,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern3_4.png',
            name: '블랙 화산송이 파하 모공 클렌징 오일 200mL',
            desc: '제주 화산송이와 숯 파우더가 과다 피지·블랙헤드를 흡착',
            price: '12,600원',
            oldPrice: '18,000원',
            rating: '4.9 · +999'
        }
    ],

    // 잡티 · 톤
    '잡티 · 톤': [
        {
            img: './images/concern4_1.png',
            name: '비타민C 캡슐 세럼 30mL',
            desc: '겔 멜라닌 개선 효과를 통해 칙칙한 피부를 정밀 타겟팅',
            price: '26,600원',
            oldPrice: '38,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern4_2.png',
            name: '비타민C 브라이트닝 아이세럼 10mL',
            desc: '4주 사용 후 다크서클 밝기 1.3배 개선',
            price: '16,800원',
            oldPrice: '24,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern4_3.png',
            name: '비타민C 엔자임 잡티 토닝 크림 50mL',
            desc: '비타민C 캡슐이 톡톡 터지며 빠르게 흡수되는 산뜻한 제형',
            price: '20,000원',
            oldPrice: '32,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern4_4.png',
            name: '비타민C 브라이트닝 팩투폼 120g',
            desc: '클렌징 오일 성분을 담아 피부 유분 52% 세정력 99.8%',
            price: '18,680원',
            oldPrice: '21,000원',
            rating: '4.9 · +999'
        }
    ],

    // 주름 · 탄력
    '주름 · 탄력': [
        {
            img: './images/concern5_1.png',
            name: '꽃송이버섯 바이탈 로션 160mL',
            desc: '매끄럽고 밝은 피부톤과 탄탄한 피부결에 효과',
            price: '29,000원',
            oldPrice: '32,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern5_2.png',
            name: '콜라겐 그린티 세라마이드 탄력장벽 크림 50mL',
            desc: '손상 피부 장벽 73.8% 개선과 피부 속 탄력정책 18% 강화',
            price: '27,400원',
            oldPrice: '39,000원',
            rating: '4.8 · +999'
        },
        {
            img: './images/concern5_3.png',
            name: '퍼펙트 9 인텐시브 세럼 50mL',
            desc: '주름 고민인 피부를 실크처럼 매끄러운 피부로 만드는 세럼',
            price: '16,200원',
            oldPrice: '27,000원',
            rating: '4.9 · +999'
        },
        {
            img: './images/concern5_4.png',
            name: '그린티 아미노 수분 폼 클렌징 250g',
            desc: '클렌징 후에도 속당김 없이 촉촉하게, 부드럽게',
            price: '13,680원',
            oldPrice: '19,000원',
            rating: '4.9 · +999'
        }
    ]
};

function showProducts(category) {
    concernList.innerHTML = '';
    for (let product of products[category]) {
        concernList.innerHTML += `
            <div class="product_card">
                <p class="concern_thumb">
                    <img src="${product.img}" alt="">
                </p>
                <div class="campaign_content">
                    <h3>${product.name}</h3>
                    <p class="desc">${product.desc}</p>
                    <div class="price">
                        ${product.price}
                        <span class="old_price">
                            ${product.oldPrice}
                        </span>
                    </div>
                    <div class="rating">
                        <span>★</span>
                        ${product.rating}
                    </div>
                </div>
            </div>
        `;
    }
}

// 탭 클릭
for (let tab of tabs) {
    tab.addEventListener('click', () => {
        for (let t of tabs) {
            t.classList.remove('active');
        }
        tab.classList.add('active');
        const category = tab.textContent.trim();
        showProducts(category);
    });
}

// 처음 화면
const activeTab = document.querySelector('.tabs .active');
showProducts(activeTab.textContent.trim());

// ================================================================================== 제품종류별섹션

const shopCats = document.querySelectorAll('.shop_cats .cat_pill');
const shopProducts = document.querySelector('#shopProducts');

const shopData = {
    '스킨케어': [
        {
            img: './images/shop1_1.png',
            name: '블랙티 앰플 대용량 스페셜 세트',
            desc: '블랙티 펩타이드 & 블랙티 효능 성분 3종 함유',
            price: '41,300원',
            oldPrice: '59,000원',
            rating: '4.9 · 후기 900+'
        },
        {
            img: './images/shop1_2.png',
            name: '그린티 수분 세럼 마카롱 에디션 130mL',
            desc: '캡슐 히알루론산과 너를 생각한 수를 통해 피부 수분 전달',
            price: '33,750원',
            oldPrice: '45,000원',
            rating: '4.9 · 후기 900+'
        },
        {
            img: './images/shop1_3.png',
            name: '블랙티 유스 인핸싱 트리트먼트 에센스 75g',
            desc: '항산화 포뮬러로, 어느 각도에서도 빛나는 투명광피부 완성',
            price: '20,880원',
            oldPrice: '29,000원',
            rating: '4.9 · 후기 900+'
        }
    ],

    '메이크업': [
        {
            img: './images/shop2_1.png',
            name: '스키니 꼼꼼카라 Zero',
            desc: '번짐과 처짐 없이 깔끔한 눈매를 연출하는 워터프루프 마스카라',
            price: '13,000원',
            oldPrice: '',
            rating: '4.8 · 후기 999+'
        },
        {
            img: './images/shop2_2.png',
            name: '포어 블러 파우더',
            desc: '미세 입자가 고르게 밀착되어 매끈하고 보송한 피부결 완성',
            price: '14,400원',
            oldPrice: '18,000원',
            rating: '4.8 · 후기 2,924'
        },
        {
            img: './images/shop2_3.png',
            name: '에어리 매트 틴트',
            desc: '가볍게 밀착되어 보송한 마무리를 선사하는 매트 틴트',
            price: '13,600원',
            oldPrice: '17,000원',
            rating: '4.6 · 후기 3,234'
        }
    ],

    '남성': [
        {
            img: './images/shop3_1.png',
            name: '포레스트 포맨 올인원 에센스 100mL',
            desc: '피지·모공부터 진정과 탄력까지 올인원 에센스',
            price: '29,000원',
            oldPrice: '',
            rating: '4.8 · 후기 999+'
        },
        {
            img: './images/shop3_2.png',
            name: '포레스트 포맨 쉐이빙 폼 클렌징 150g',
            desc: '쉐이빙과 클렌징을 한 번에 해결하고 쿨링감을 선사하는 듀얼 클렌저',
            price: '13,000원',
            oldPrice: '',
            rating: '4.8 · 후기 4,410'
        },
        {
            img: './images/shop3_3.png',
            name: '포레스트 포맨 프리미엄 스킨케어 세트',
            desc: '탄력 저하와 칙칙한 피부톤 케어 고보습 안티에이징 2종 세트',
            price: '38,500원',
            oldPrice: '55,000원',
            rating: '4.8 · 후기 1,082'
        }
    ],

    '헤어·바디·소품': [
        {
            img: './images/shop4_1.png',
            name: '마이 헤어 레시피 스트렝스 샴푸 330mL',
            desc: '식물유래 계면활성제로 두피 부담을 줄이고 개운하게 클렌징',
            price: '13,000원',
            oldPrice: '',
            rating: '4.8 · 후기 999+'
        },
        {
            img: './images/shop4_2.png',
            name: '패들 헤어 브러시',
            desc: '넓은 면적으로 모발을 부드럽게 정리하고 편안하게 빗어주는 브러시',
            price: '6,500원',
            oldPrice: '',
            rating: '4.8 · 후기 999+'
        },
        {
            img: './images/shop4_3.png',
            name: '아일 넘버 바디케어 듀오 세트 [씨즈더모먼트]',
            desc: '풍성한 향과 보습을 담은 바디워시와 바디로션 듀오 세트',
            price: '19,800원',
            oldPrice: '22,000원',
            rating: '4.7 · 후기 164'
        }
    ],
};

function showShopProducts(category) {
    shopProducts.innerHTML = '';
    for (let product of shopData[category]) {
        shopProducts.innerHTML += `
            <div class="product_card">
                <div class="product_thumb">
                    <img src="${product.img}" alt="">
                </div>
                <div class="campaign_content">
                    <h3>${product.name}</h3>
                    <p class="desc">
                        ${product.desc}
                    </p>
                    <div class="price">
                        ${product.price}
                        <span class="old_price">
                            ${product.oldPrice}
                        </span>
                    </div>
                    <div class="rating">
                        <span>★</span>
                        ${product.rating}
                    </div>
                </div>
            </div>
        `;
    }
}

for (let cat of shopCats) {
    cat.addEventListener('click', () => {
        for (let c of shopCats) {
            c.classList.remove('active');
        }
        cat.classList.add('active');

        const category = cat.dataset.category;
        showShopProducts(category);
    });
}

const activeCat = document.querySelector('.shop_cats .active');
showShopProducts(activeCat.dataset.category);

// ============================================================================= 스크롤트리거 시작

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger);

const heroSwiper = new Swiper('.hero_swiper', {
    slidesPerView: 1,
    rewind: true,

    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    on: {
        init: function () {
            gsap.to('.swiper-slide-active .hero_text', {
                opacity: 1,
                y: -20,
                duration: 2.5,
            });
        },
        slideChangeTransitionStart: function () {
            gsap.set('.hero_text', {
                opacity: 0,
                y: 20,
            });
        },
        slideChangeTransitionEnd: function () {
            gsap.to('.swiper-slide-active .hero_text', {
                opacity: 1,
                y: -20,
                duration: 2.5,
            });
        }
    }
});
