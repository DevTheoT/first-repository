//Criação de uma time line do gsap com animações sincronizadas com o scroll
var tl = gsap.timeline({
    scrollTrigger: {
        trigger: '.two',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false,
    },
});

tl.to(
    '#fanta',
    {
        top: '120%',
        left: '0%',
    },
    'orange'
); // Nomeando este trecho de animação como 'orange' para sincronização

tl.to(
    '#laranja-cortada',
    {
        top: '160%',
        left: '23%',
        rotate: "180deg",
    },
    'orange'
);

tl.to(
    '#laranja',
    {
        width: "15%",
        top: '160%',
        right: '10%',
    },
    'orange'
);

tl.to(
    '#folha',
    {
        rotate: "530deg",
        top: '110%',
        left: '70%',
    },
    'orange'
);

tl.to(
    '#folha2',
    {
        rotate: "130deg",
        top: '110%',
        left: '0%',
    },
    'orange'
);

//Criando outra time line

var tl2 = gsap.timeline({
    scrollTrigger: {
        trigger: '.three',
        start: '0% 95%',
        end: '70% 50%',
        scrub: true,
        markers: false,
    },
});

tl2.from(
    '.lemon1',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#cocacola',
    {
        rotate: '-90deg',
        left: '-100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '.lemon2',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.from(
    '#pepsi',
    {
        rotate: '90deg',
        left: '100%',
        top: '110%',
    },
    'ca'
);

tl2.to(
    '#laranja-cortada',
    {
        width: '18%',
        left: '42%',
        top: '204%',
    },
    'ca'
);

tl2.to(
    '#fanta',
    {
        width: '35%',
        left: '33%',
        top: '210%',
    },
    'ca'
);

