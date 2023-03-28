let movies = [
    {
        name: "falcon and the winter soldier",
        des1:
            "2021\u00A0\u00A0•\u00A0\u00A01 Season\u00A0\u00A0•\u00A0\u00A04 Languages\u00A0\u00A0•\u00A0\u00A0U/A 13+",
        des2:
            "Following the events of “Avengers: Endgame,” Sam Wilson and Bucky Barnes team up in a global adventure that tests their abilities and their patience.",
        des3:
            "Superhero\u00A0\u00A0|\u00A0\u00A0Action\u00A0\u00A0|\u00A0\u00A0Science Fiction\u00A0\u00A0|\u00A0\u00A0Fantasy",
        image: "images/slider 2.png"
    },
    {
        name: "loki",
        des1:
            "2021\u00A0\u00A0•\u00A0\u00A01 Season\u00A0\u00A0•\u00A0\u00A02 Languages\u00A0\u00A0•\u00A0\u00A0U/A 13+",
        des2:
            "The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
        des3:
            "Superhero\u00A0\u00A0|\u00A0\u00A0Science Fiction\u00A0\u00A0|\u00A0\u00A0Action\u00A0\u00A0|\u00A0\u00A0Fantasy\u00A0\u00A0|\u00A0\u00A0Anti-hero",
        image: "images/slider 1.png"
    },
    {
        name: "wanda vision",
        des1:
            "2021\u00A0\u00A0•\u00A0\u00A01 Season\u00A0\u00A0•\u00A0\u00A0English\u00A0\u00A0•\u00A0\u00A0U/A 13+",
        des2:
            "Wanda Maximoff and Vision—two super-powered beings living idealized suburban lives—begin to suspect that everything is not as it seems.",
        des3:
            "Superhero\u00A0\u00A0|\u00A0\u00A0Science Fiction\u00A0\u00A0|\u00A0\u00A0Action\u00A0\u00A0|\u00A0\u00A0Fantasy",
        image: "images/slider 3.png"
    },
    {
        name: "raya and the last dragon",
        des1:
            "2021\u00A0\u00A0•\u00A0\u00A01h 47m\u00A0\u00A0•\u00A0\u00A04 Languages\u00A0\u00A0•\u00A0\u00A0U/A 7+",
        des2:
            "Raya, a fallen princess, must track down the legendary last dragon to stop the evil forces that have returned and threaten her world.",
        des3:
            "Animation\u00A0\u00A0|\u00A0\u00A0Fantasy\u00A0\u00A0|\u00A0\u00A0Adventure\u00A0\u00A0|\u00A0\u00A0Kids",
        image: "images/slider 4.png"
    },
    {
        name: "luca",
        des1:
            "2021\u00A0\u00A0•\u00A0\u00A01h 35m\u00A0\u00A0•\u00A0\u00A04 Languages\u00A0\u00A0•\u00A0\u00A0U/A 7+",
        des2:
            "The movie is a coming-of-age story about one young boy experiencing an unforgettable summer filled with gelato, pasta and endless scooter rides.",
        des3:
            "Animation\u00A0\u00A0|\u00A0\u00A0Fantasy\u00A0\u00A0|\u00A0\u00A0Adventure\u00A0\u00A0|\u00A0\u00A0Kids",
        image: "images/slider 5.png"
    }
];

const carousel = document.querySelector(".carousel");
let sliders = [];

let slideIndex = 0;

const createSlide = () => {
    if (slideIndex >= movies.length) {
        slideIndex = 0;
    }

    // creating DOM element
    let slide = document.createElement("div");
    var imgElement = document.createElement("img");
    let content = document.createElement("div");
    let h1 = document.createElement("h1");
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    let wnaddbtns = document.createElement("div");
    let wnbtn = document.createElement("div");
    let addbtn = document.createElement("div");

    // attaching all elements
    imgElement.appendChild(document.createTextNode(""));
    h1.appendChild(document.createTextNode(movies[slideIndex].name));
    p1.appendChild(document.createTextNode(movies[slideIndex].des1));
    p2.appendChild(document.createTextNode(movies[slideIndex].des2));
    p3.appendChild(document.createTextNode(movies[slideIndex].des3));
    wnaddbtns.appendChild(document.createTextNode(""));
    wnbtn.appendChild(document.createTextNode("Watch Now"));
    addbtn.appendChild(document.createTextNode(""));
    content.appendChild(h1);
    content.appendChild(p1);
    content.appendChild(p2);
    content.appendChild(p3);
    wnaddbtns.appendChild(wnbtn);
    wnaddbtns.appendChild(addbtn);
    content.appendChild(wnaddbtns);
    slide.appendChild(content);
    slide.appendChild(imgElement);
    carousel.appendChild(slide);

    // setting up image
    imgElement.src = movies[slideIndex].image;
    slideIndex++;

    // setting elements classname
    slide.className = "slider";
    content.className = "slide-content";
    h1.className = "movie-title";
    p1.className = "movie-des1";
    p2.className = "movie-des2";
    p3.className = "movie-des3";
    wnaddbtns.className = "wnadd-btns";
    wnbtn.className = "wn-btn";
    addbtn.className = "add-btn";

    sliders.push(slide);

    if (sliders.length) {
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)
            }px)`;
    }
};

for (let i = 0; i < 3; i++) {
    createSlide();
}

setInterval(() => {
    createSlide();
}, 4000);

//Video Cards

const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover", () => {
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave", () => {
        let video = item.children[1];
        video.pause();
    });
});

//card sliders

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener("click", () => {
        item.scrollLeft += containerWidth - 200;
    });

    preBtns[i].addEventListener("click", () => {
        item.scrollLeft -= containerWidth + 200;
    });
});