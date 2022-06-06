let bars = document.querySelector('.bars'),
    header = document.querySelector('header ul');

bars.addEventListener('click', () => {
    header.classList.toggle('active');
});

// Explore button
let exploreBtn = document.querySelector('.title .btn'),
    hadithSection = document.querySelector('.hadith');

exploreBtn.addEventListener('click', () => {
    hadithSection.scrollIntoView({
        behavior: "smooth",
    });
});

let fixedNav = document.querySelector('header');
let scrollBtn = document.querySelector('.scrollBtn');
window.addEventListener('scroll', () => {
    window.scrollY > 100 ? fixedNav.classList.add('active') : fixedNav.classList.remove('active');
    window.scrollY > 500 ? scrollBtn.classList.add('active') : scrollBtn.classList.remove('active');
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Fetch Heaith API
let hadithContainer = document.querySelector('.hadith-container');
let prev = document.querySelector('.prev');
let next = document.querySelector('.next');
let number = document.querySelector('.number');

let hadithIndex = 0;

hadithChanger();

function hadithChanger() {
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
        .then(response => response.json())
        .then(data => {
            let Hadiths = data.data.hadiths;
            changeHadith();
            next.addEventListener('click', () => {
                hadithIndex == 299 ? hadithIndex = 0 : hadithIndex++;
                changeHadith();
            });
            prev.addEventListener('click', () => {
                hadithIndex == 0 ? hadithIndex = 299 : hadithIndex--;
                changeHadith();
            });
            function changeHadith() {
                hadithContainer.innerHTML = Hadiths[hadithIndex].arab;
                number.innerText = `300 - ${hadithIndex + 1}`;
            }
        });
}

let sections = document.querySelectorAll('section'),
    links = document.querySelectorAll('header li');

links.forEach((link) => {
    link.addEventListener('click', () => {
        document.querySelector('header li.active').classList.remove('active');
        link.classList.add('active');
        let target = link.dataset.filter;
        sections.forEach((section) => {
            if (section.classList.contains(target)) {
                section.scrollIntoView({
                    behavior: "smooth"
                })
            }
        });
    });
});

// surah APi

let surahsContainer = document.querySelector('.surahsContainer');

function getSurahs() {
    // Fetch Surahs Data {Name Of Surahs}
    fetch("http://api.alquran.cloud/v1/meta")
        .then(response => response.json())
        .then(data => {
            let surahs = data.data.surahs.references;
            let numberOfSurahs = 114;
            for (let i = 0; i < numberOfSurahs; i++) {
                surahsContainer.innerHTML +=
                    `
                    <div class="surah">
                        <p>${surahs[i].name}</p>
                        <p>${surahs[i].englishName}</p>
                    </div>
                `
            }
            let surahTitle = document.querySelectorAll('.surah');
            let popUp = document.querySelector('.surah-popup');
            let ayatContainer = document.querySelector('.ayat');
            surahTitle.forEach((title, index) => {
                title.addEventListener('click', () => {
                    fetch(`http://api.alquran.cloud/v1/surah/${index + 1}`)
                        .then(response => response.json())
                        .then(data => {
                            ayatContainer.innerHTML = "";
                            let ayat = data.data.ayahs;
                            ayat.forEach(aya => {
                                popUp.classList.add('active');
                                ayatContainer.innerHTML +=
                                    `
                                <p>{${aya.numberInSurah}} _ ${aya.text}</p>
                                `
                            })
                        });
                });
            });
            let closePopup = document.querySelector('.close-popup');

            closePopup.addEventListener('click', () => {
                popUp.classList.remove('active');
            });
        });
}
getSurahs();


// Pray Time API

let cards = document.querySelector('.cards');


function prayTimes() {
    fetch(' http://api.aladhan.com/v1/timingsByCity?city=Syria&country=Syria&method=8')
        .then(response => response.json())
        .then(data => {
            let times = data.data.timings;
            cards.innerHTML = "";
            for (let time in times) {
                cards.innerHTML +=
                    `
                <div class="card">
                    <div class="circle">
                        <svg>
                            <circle cx="100" cy="100" r="100"></circle>
                        </svg>
                        <div class="pray-time">${times[time]}</div>
                    </div>
                        <p>${time}</p>
                    </div>
                </div>
                `
            }
        });
}
prayTimes();