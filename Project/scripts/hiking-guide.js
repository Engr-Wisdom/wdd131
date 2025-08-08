let hikings = [
    {img: "https://elilaw179.github.io/wdd131/project/images/ban.webp", name: "Banff National Park", description: "Explore the Canadian Rockies with stunning trails and lakes."},
    {img: "https://elilaw179.github.io/wdd131/project/images/appli.webp", name: "Appalachian Trail", description: "Trek the legendary 2,000-mile Appalachian Trail from Georgia to Maine."},
    {img: "https://elilaw179.github.io/wdd131/project/images/tor.webp", name: "Torres del Paine", description: "Iconic Patagonian landscapes with dramatic peaks."},
    {img: "https://elilaw179.github.io/wdd131/project/images/kili.webp", name: "Mount Kilimanjaro", description: "Africa's highest peak and a challenging trek."},
    {img: "https://elilaw179.github.io/wdd131/project/images/inc.webp", name: "Inca Trail to Machu Picchu", description: "Ancient trail through the Andes to Machu Picchu."},
    {img: "https://elilaw179.github.io/wdd131/project/images/milford.webp", name: "Milford Track", description: "World-renowned trek through New Zealand's Fiordland."},
    {img: "https://elilaw179.github.io/wdd131/project/images/gran.webp", name: "Grand Canyon Rim-to-Rim", description: "Epic journey across one of the world's natural wonders."},
    {img: "https://elilaw179.github.io/wdd131/project/images/ever.webp", name: "Everest Base Camp Trek", description: "Bucket-list trek to the base of the world's tallest mountain"},
    {img: "https://elilaw179.github.io/wdd131/project/images/lau.webp", name: "Laugavegur Trail", description: "Colorful mountains and geothermal springs in Iceland."},
    {img: "https://elilaw179.github.io/wdd131/project/images/wes.webp", name: "West Coast Trail", description: "Challenging coastal hike with breathtaking views."},
    {img: "https://elilaw179.github.io/wdd131/project/images/anna.webp", name: "Annapurna Circuit", description: "Scenic trek around the Annapurna massif."},
    {img: "https://elilaw179.github.io/wdd131/project/images/zio.webp", name: "Zion Narrows", description: "Unique slot canyon hike through the Virgin River."},
    {img: "https://elilaw179.github.io/wdd131/project/images/fuji.webp", name: "Mount Fuji", description: "Sacred mountain with beautiful sunrise views."},
    {img: "https://elilaw179.github.io/wdd131/project/images/dolo.webp", name: "Dolomites Alta Via 1", description: "Classic trek through Italy's stunning Dolomites."}
];

let cardConts = document.getElementById("card-cont")

if (cardConts) {
    hikings.forEach(card => {
        let div = document.createElement("div");

        div.className = "card"
        div.innerHTML = `
        <img src="${card.img}" alt="${card.name}">
        <figcaption>
            <h3>${card.name}</h3>
            <p>${card.description}</p>
            <p class="hiking">Hiking</p>
        </figcaption>
        `;
        cardConts.appendChild(div)
    });
}