const main = document.getElementById("mainContent");
const links = document.querySelectorAll(".nav-link");

// Quotes
const quotes = [
  {
        text: "Impossible is a word to be found only in the dictionary of fools.",
        author: "Napoleon Bonaparte"
    },
    {
        text: "Come and see how a Marshal of France dies!",
        author: "Marshal Michel Ney"
    },
    {
        text: "In war, character is more important than intellect.",
        author: "Archduke Charles of Austria"
    },
    {
        text: "The hardest thing of all for a soldier is to retreat.",
        author: "Arthur Wellesley, Duke of Wellington"
    },
    {
        text: "A soldier without discipline is a mere bandit.",
        author: "Marshal Louis-Nicolas"
    },
    {
        text: "I hope this harsh and useful example will work for the troops.",
        author: "Marshal Louis-Nicolas"
    },
];

// Corps Data
const corpsList = [{
        name: "Garde Imperiale/Imperial Guard (AS/EU/NA)",
        img: "Garde.png",
        desc: "Founded in March 2020, the Garde Imperiale has stood as the Emperor's elite vangaurd and one of the most skilled, enduring forces in its field. But beyond being just a Roblox military group, the Guard takes pride in the strong sense of community it has built, uniting people from all backgrounds, promoting camaraderie, and ensuring everyone enjoys their time while striving for excellence in everything we do.",
        regiments: [
            "Regt. des Grenadiers-a-Pied/Regiment of Foot Grenadiers",
            "Regt. des Chasseurs-a-Pied/Regiment of Foot Chasseurs (Light Infantrymen)",
            "Regt. des Grenadiers-Hollandais/Regiment of Dutch Grenadiers",
            "Regt. des Chasseurs-Hollandais/Regiment of Dutch Chasseurs",
            "Regt. des Fusiliers-Grenadiers/Regiment of Fusilier-Grenadiers",
            "Bat. des Velites de Florence/Battalion of the Velites of Florence",
            "Regt. des Tirailleurs-Grenadiers/Regiment of Tirailleur-Grenadiers (Skirmisher-Grenadiers)",
            "Regt. des Voltigeurs/Regiment of Voltigeurs (Light Skirmishers)"
        ]
    },
    {
        name: "Premier Corps/First Corps (EU/NA)",
        img: "Premier.png",
        desc: "The First Corps of the Grandee Armee is the renowned for its bold and relentless advance on the battlefield. Throughout its history, it has earned numerous victories, proudly carrying its banners in triumph.",
        regiments: [
            "84e Régiment d'Infanterie de Ligne/84th Line Infantry Regiment",
            "7e Régiment de Légère/7th Light Infantry Regiment",
            "2. Infanterie-Regiment 'Kronprinz'/2nd Infantry Regiment 'Crown Prince'"
        ]
    },
    {
        name: "Deuxieme Corps/Second Corps (AS)",
        img: "Deuxieme.png",
        desc: "Forged in fire and strengthened by countless victories, the Deuxieme Corps stands as the largest and most formidable force within French Asia. Renowed for its strict discipline, exceptional skill in battle, and steadfast unity, the corps upholds and embodies the highest standards of excellence.",
        regiments: [
            "18e Régiment d'Infanterie de Ligne/18th Line Infantry Regiment",
            "57e Régiment d'Infanterie de Ligne/57th Line Infantry Regiment",
            "9e Légiment de Légère/9th Light Infantry Regiment",
            "Irish Legion/Foreign Regiments of the Irish Legion"
        ]
    },
    {
        name: "Troisieme Corps/Third Corps (EU/NA)",
        img: "Trosieme.png",
        desc: "Community lies at the very core of the Troisieme. It is home to some of France's longest-serving veterans alongside a growing generation of new soldiers. The corps operates across all major time zones, hosting events for members in Europe, North and South America, and the Middle East. In the Troisieme, there's a place for everyone.",
        regiments: [
            "45e Régiment d'Infanterie de Ligne/45th Line Regiment",
            "15e Régiment de Légère/15th Light Infantry",
            "1. Infantrie-Regiment/1st Infantry Regiment",
        ]
    },
    {
        name: "Quatrieme Corps/Fourth Corps (EU/NA)",
        img: "Quatrieme.png",
        desc: "The Quatrieme Corps takes great pride in the skill, discipline, and professionalism of its soldiers, making them a formidable presence in every engagement. Known for their decisive flanks, powerful chargesm and precivse coordinated volleys, the corps consistently demonstrates tactical excellence on the battlefield. Above all, the Quatrieme values camaraderie and enjoyment, with its four regiments led by dedicated staff who work to foster a strong, welcoming community for all members.",
        regiments: [
            "112e Régiment d'Infanterie de Ligne/112th Line Infatry Regiment",
            "25e Régiment de Légère/25th Light Infantry Regiment",
            "Garde Municipale de Paris/1st Regiment of the Municipal Guard of Paris",
            "3° Reggimento di Fanteria di Linea/3rd Infantry Regiment of the Line (Italian)",
        ]
    },
    {
        name: "Cinquieme Corps/Fifth Corps (EU/NA)",
        img: "Cinquieme.png",
        desc: "The Fifth Corps of Napoleon's Grande Armee was among the most important corps formations during the Napoleonic Wars. Formed as part of Napoleon's military reorganization after proclaiming himself Emperor in 1804, it embodied his vision of creating self-sufficient corps capable of independent action. Each corps combined infantry, cavalry, and artillery units, enabling them to move swiftly and operate with remarkable efficiency on the battlefield.",
        regiments: [
            "21e Régiment d'Infanterie de Ligne/21st Regiment",
            "6e Régiment d'Infanterie de Ligne/6th Regiment",
            "2e Régiment d'Infanterie de Ligne/2nd Regiment",
            "5e Régiment d'Infanterie de Ligne/5th Regiment",
        ]
    },
    {
        name: "Neuvieme Corps/Ninth Corps (AS)",
        img: "Neuvieme.png",
        desc: "The Neuvieme Corps was born from the Emperor's call to raise new banners for France's expansion into Asia. Backed by the oldest French Asian unit, it carries a proud legacy of enduring hardships and celebrating triumphs. The corps welcomes the bold and the determined to take up the mantle and leave their mark in history, all while fostering deep bonds of brotherhood in times of challenges. United in purpose, they march forward with unwavering resolve toward one shared goal: victory.",
        regiments: [
            "30e Régiment d'Infanterie de Ligne/30th Line Infantry Regiment",
            "36e Régiment d'Infanterie de Ligne/36th Line Infantry Regiment",
            "10e Régiment d'Infanterie de Legere/10th Light Infantry Regiment",
            "Polish Legion/Foreign Regiments of the Polish Legions",
        ]
    }
];

// Page Templates 
const pages = {
    home: `
    <h1>Welcome to the Grand Armée</h1>
    <p>Step into the age of conquest and courage. Explore Napoleon’s words that shaped empires and inspired generations.</p>
    <div class="quotes-grid">
      ${quotes.map(q => `
        <div class="quote-card">
          <p class="quote-text">“${q.text}”</p>
          <div class="quote-author">— ${q.author}</div>
        </div>
      `).join("")}
    </div>
    <!-- Videos Section with Your Specified Videos -->
    <div class="videos-section">
      <h2>VALEUR ET DISCIPLINE.</h2>
      <p>Watch epic trailers and recreations of the Napoleonic Wars</p>
      <div class="videos-grid">
        <div class="video-card">
          <iframe src="https://www.youtube-nocookie.com/embed/ZENddN7_ohM?rel=0" 
                  title="Waterloo Trailer | 3,000 Player Napoleonic Battles" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                  loading="lazy">
          </iframe>
          <h3>Waterloo Trailer | 3,000 Player Napoleonic Battles</h3>
        </div>
        <div class="video-card">
          <iframe src="https://www.youtube-nocookie.com/embed/srV_Zuxq2_I?rel=0" 
                  title="Napoleonic Wars Campaigns" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                  loading="lazy">
          </iframe>
          <h3>Napoleonic Wars Campaigns</h3>
        </div>
        <div class="video-card">
          <iframe src="https://www.youtube-nocookie.com/embed/XG5tUhuEND4?rel=0" 
                  title="Napoleonic Wars Roblox | Unofficial Trailer" 
                  frameborder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowfullscreen 
                  loading="lazy">
          </iframe>
          <h3>Napoleonic Wars Roblox | Unofficial Trailer</h3>
        </div>
      </div>
    </div>
  `,
    history: `
    <h1>History</h1>
    <p>Empire Frаnçаis (English: French Empire), is regarded as the largest, and most successful nation within the Napoleonic Wars community. Its Emperor, Gory, is the main programmer & developer of the Napoleonic Wars community, having contributed the majority of its assets. The nation's Grande Armée comprise of six actively serving corps, each being led by their own respective Maréchal or a Général. Empire Frаnçаis has approximately (as of October 19th, 2024), 210,000+ unique members within its Roblox group.</p>
    <div class="history-video-section">
      <h2>Our Legacy</h2>
      <p>Our memories and dedication will always strive us further.</p>
      <div class="history-video-card">
        <iframe src="https://www.youtube-nocookie.com/embed/pyxd9tD6LRw?rel=0" 
                title="5 Years of a Roblox Community" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
                loading="lazy">
        </iframe>
        <h3>5 Years of a Roblox Community</h3>
      </div>
    </div>
  `,
    battles: `
    <h1>Our Campaigns</h1>
    <p>Relive the epic Roblox events that echo the glory of the Grand Armee:</p>
    <ul>
      <li><strong>Second Great Battle of Waterloo (January 21, 2021):</strong> Following a series of crucial refinements and enhancements to the Waterloo campaign, word spread swiftly across the ranks: the armies of France would once again gather for the Second Great Battle of Waterloo. This announcement stirred a wave of anticipation and patriotic fervor throughout the Empire. Soldiers and citizens alike understood the magnitude of the moment, for such a monumental clash, every man and woman of France was called upon to answer the Emperor's calls. On that day, more than any other, the spirit of France stood tall to march once again into history.</li>
      <li><strong>Grand Battle of Wagram (June 24, 2023):</strong> Six proud corps of the Grande Armee gathered, their banners uniting under the Emperor's command as the drums of war echo once more. Arrayed against them are the combined forces of five major coalition powers and their lackeys, an alliance vast and determined. The stage is set: the French Empire vs the Coalition Powers. With an estimated 3,200 to 4,300 players expected to take the field, the coming clash will test the mettle of even the finest soldiers. Among our adversaries, the disciplined British and the well-led Austrians stand as formidable foes. Each may be overcome alone, but should they unite, their strength will become perilous. Thus, preparation is paramount. The fate of France depended on it.</li>
      <li><strong>The Austrian Campaign (March 16, 2024):</strong> The grand finale was near. Honors were bestowed upon those who have distinguished themselves in this campaign, 15 Gold Campaign Medals personally awarded by the Emperor's hand, and 100 Silver Medals to be presented by regimental commanders. Every soldier who had taken part in battle has received a Bronze Medal, a mark for their valor and service to France. Across the field, Austria has swelled its ranks fromm 400 to an astonishing 700 men, now boasting two full divisions of grenadiers and elite torops. France, too, can summon many more to the cause, yet this final clash promises to be among the most demanding ever faced. Make no mistake, it was a true test of strength and spirit. The finale may not guarantee victory, and the very fate of the campaign hanged delicately in the balance.</li>
      <li><strong>The Italian Campaign (March 21, 2025):</strong> After a hard-fought advance into Austrian soil, our thrust has been checked and the army grinded to a tense standstill along the enemy border. Dispatches from the front bring cautious optimism: the end of this content may be near, and a single, decisive push could tip the scales and determine Europe's fate. By imperial command, we have marched once more, ordered to pierce the deadlock and drive our foes back across their lines. In the measured light of history, this moment is remembered as the last costly effort to break a stalemate: equal parts gamble and necessity, where the courage of many and the fortunes of nations hang on one final, resolute strike.</li>
      <li><strong>The North German Campaign (June 18, 2025):</strong> In a striking reversal of fortunes, the British forces have been driven from the Prussian capital, which now sits in French hands. Berlin, taken as a hard-won trophy of war, stands as a potent symbol of the Grande Armee's advance and a tangible sign of shifting balance on the continent. Meanwhile, the defense of Munich has held firm against the Coalition's assaults, a bulward that has blunted their momentum and preserved a crucial foothold for the cause in the Germanic heartland. With these gains secured, the army turns its attention to one final, decisive blow, a concerted effort inteded to break the Coalition's grip and end their domination of the Germanic states.</li>
      <li><strong>The Russian Campaign (July 31, 2025):</strong> Borodino lies silent and scarred, a bleak testament to the cost of our relentless advance toward Moscow. The once-proud jewel of Russia now smolders its ruin, its glory reduced to ash. Along the road east, the bodies of the fallen stretch endlessly, our own among theirs, a grim reminder of the price paid for every mile gained. Yet, despite the victory, there is only silence. No emissaries, no dignitaries have come forth from the Russian ranks; the city waits in uneasy stillness. All eyes now turn eastward, uncertain and wary, as we await the next move of an enemy who seems willing to sacrifice everything rather than yield.</li>
    </ul>
  `,
    corps: `
    <h1>The Corps of the Grand Armée</h1>
    <p>Explore the proud divisions that carried the Eagle across europe.</p>
    <div class="corps-grid">
      ${corpsList.map((c, index) => `
        <div class="corps-card" data-corps-index="${index}">
          <img src="${c.img}" alt="${c.name}">
          <div class="corps-card-content">
            <h3>${c.name}</h3>
            <p>${c.desc}</p>
          </div>
        </div>
      `).join("")}
    </div>
  `,
    join: `
  <h1>Enlist Now!</h1>
  <p>Enlist in the Grand Armée today and join our ranks of historians, enthusiasts, and strategists.</p>
  <div class="join-section">
    <form id="joinForm">
      <div class="form-field">
        <label for="name">Name:</label>
        <input type="text" id="name" required>
      </div>
      <div class="form-field">
        <label for="discord">Discord (Username#Tag):</label>
        <input type="text" id="discord" placeholder="e.g., YourName#1234" required>
      </div>
      <button type="submit" class="button">Enlist Now</button>
    </form>
  </div>
`

};

//Render Page
function renderPage(page) {
    main.style.opacity = 0;
    setTimeout(() => {
        main.innerHTML = pages[page];
        main.style.opacity = 1;

        const form = document.getElementById("joinForm");
        if (form) {
            form.addEventListener("submit", e => {
                e.preventDefault();
                const name = document.getElementById("name").value;
                const discord = document.getElementById("discord").value;
                alert(`Welcome to the ranks, ${name}! We'll reach out on Discord: ${discord}.`);
                form.reset();
            });
        }

        // Interactivity to the Corps Page
        if (page === 'corps') {
            const corpsCards = document.querySelectorAll('.corps-card');
            corpsCards.forEach((card, index) => {
                card.style.cursor = 'pointer'; 
                card.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    const corpsData = corpsList[index];
                    const content = card.querySelector('.corps-card-content');
                    const isExpanded = card.classList.contains('expanded');

                    if (isExpanded) {
                        
                        const regimentsSection = content.querySelector('.regiments-section');
                        if (regimentsSection) {
                            regimentsSection.remove();
                        }
                        card.classList.remove('expanded');
                        console.log(`${corpsData.name} collapsed.`); 
                    } else {
                        
                        const regimentsHtml = `
              <div class="regiments-section">
                <h4>Regiments:</h4>
                <ul>
                  ${corpsData.regiments.map(regiment => `<li>${regiment}</li>`).join('')}
                </ul>
              </div>
            `;
                        content.insertAdjacentHTML('beforeend', regimentsHtml);
                        card.classList.add('expanded');
                        console.log(`${corpsData.name} expanded. Showing ${corpsData.regiments.length} regiments.`); // Optional debug
                    }
                });
            });
        }
    }, 200);
}

// Navigation
links.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");

        const page = link.getAttribute("href").substring(1);
        renderPage(page);
    });
});

// Default Load
renderPage("home");

