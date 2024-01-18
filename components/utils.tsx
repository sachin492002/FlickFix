
const settings = {
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    dots: true,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
const genres = [
    {
        name: 'comedy',
        imgsrc: '/homegrid/Comedy.png'
    },
    {
        name: 'drama',
        imgsrc: '/homegrid/Comedy.png'
    },
    {
        name: 'crime',
        imgsrc: '/homegrid/Action.png'
    },
    {
        name: 'mystery',
        imgsrc: '/homegrid/Adventure.png'
    },
    {
        name: 'adventure',
        imgsrc: '/homegrid/Adventure.png'
    },
    {
        name: 'thriller',
        imgsrc: '/homegrid/Action.png'
    },
    {
        name: 'horror',
        imgsrc: '/homegrid/FamilyDrama.png'
    },
    {
        name: 'romance',
        imgsrc: '/homegrid/Comedy.png'
    },
    {
        name: 'fantasy',
        imgsrc: '/homegrid/Action.png'
    },
    {
        name: 'history',
        imgsrc: '/homegrid/Adventure.png'
    },
    {
        name: 'family',
        imgsrc: '/homegrid/FamilyDrama.png'
    },
    {
        name: 'war',
        imgsrc: '/homegrid/Action.png'
    },
    {
        name: 'kids',
        imgsrc: '/homegrid/Comedy.png'
    }
];

export {genres,settings}