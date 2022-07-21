
const shuffle = () => {
    const champions = [
        { image: '/public/Tahm Kench.png'},
        { image: '/public/Rengar.png'},
        { image: '/public/Bard.png'},
        { image: '/public/Garen.png'},
        { image: '/public/Fiddle.png'},
        { image: '/public/Gragas.png'},
        { image: '/public/Lee Sin.png'},
        { image: '/public/Vayne.png'},
    ];
    return [...champions, ...champions]
        .sort(() => Math.random() - 0.5)
        .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;