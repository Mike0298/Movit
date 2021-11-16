const data = [
  {
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
    rating: "8.3",
    releaseYear: "2020",
    country: "Japan",
    description: "Prequel to Demon Slayer -Kimetsu no Yaiba- animation series",
    content:
      "After his family was brutally murdered and his sister turned into a demon, Tanjiro Kamado's journey as a demon slayer began. Tanjiro and his comrades embark on a new mission aboard the Mugen Train, on track to despair.",
    director: "Haruo Sotozaki",
    writer: ["Koyoharu Gotouge"],
    stars: ["Natsuki Hanae", "Akari Kito", "Yoshitsugu Matsuoka"],
    likeCounter: 0,
    genres: ["animation", "action", "adventure"],
  },
  {
    title: "John Wick: Chapter 3 - Parabellum",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    releaseYear: "2019",
    country: "US",
    description: "Third installment of John Wick",
    content:
      "John Wick is on the run after killing a member of the international assassins' guild, and with a $14 million price tag on his head, he is the target of hit men and women everywhere.",
    director: "Chad Stahelski",
    writer: ["Koyoharu Gotouge", "Shay Hatten", "Chris Collins"],
    stars: ["Keanu Reeves", "Halle Berry", "Ian McShane"],
    rating: "7.4",
    likeCounter: 0,
    genres: ["action", "crime", "thriller"],
  },
  {
    title: "A Quiet Place Part II",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
    releaseYear: "2020",
    country: "US",
    description: "Sequel to A Quiet Place",
    content:
      "Following the events at home, the Abbott family now face the terrors of the outside world. Forced to venture into the unknown, they realize the creatures that hunt by sound are not the only threats lurking beyond the sand path.",
    director: "John Krasinski",
    writer: ["John Krasinski", "Bryan Woods", "Scott Beck"],
    stars: ["Emily Blunt", "Millicent Simmonds", "Cillian Murphy"],
    rating: "7.4",
    likeCounter: 0,
    genres: ["drama", "horror", "sci-fi"],
  },
  {
    title: "The Tomorrow War",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
    releaseYear: "2021",
    country: "US",
    description:
      "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
    content:
      "The world is stunned when a group of time travelers arrive from the year 2051 to deliver an urgent message: Thirty years in the future, mankind is losing a global war against a deadly alien species. The only hope for survival is for soldiers and civilians from the present to be transported to the future and join the fight. Among those recruited is high school teacher and family man Dan Forester (Chris Pratt). Determined to save the world for his young daughter, Dan teams up with a brilliant scientist (Yvonne Strahovski) and his estranged father (J.K. Simmons) in a desperate quest to rewrite the fate of the planet.",
    director: "Chris McKay",
    writer: ["Zach Dean"],
    stars: ["Chris Pratt", "Yvonne Strahovski", "J.K. Simmons"],
    rating: "6.6",
    likeCounter: 0,
    genres: ["action", "adventure", "drama"],
  },
  {
    title: "The Hitman's Bodyguard",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",
    releaseYear: "2017",
    country: "US",
    description:
      "The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.",
    content:
      "With his reputation in tatters after the painfully unsuccessful delivery of a distinguished Japanese client, the former triple-A protection agent, Michael Bryce, is now reduced to a mere second-class bodyguard for hire, two years after the disgraceful incident. Under those circumstances, Bryce would do anything to prove his worth, and, before long, he accepts an offer from Interpol to escort the international assassin, Darius Kincaid, from Manchester to the Hague. The task seems simple: Bryce needs to transport him from point A to point B; nevertheless, the trip to the Netherlands is long and hazardous, and Kincaid--as the only one with the guts and enough hard evidence to testify against a tyrannical Belarusian dictator--is an obvious target. Undoubtedly, it's a tough job, as the mismatched duo will have to put aside their grudges, and race against the clock in a non-stop concerto for bullets. Can the hitman's bodyguard carry through the most important mission in his career?",
    director: "Patrick Hughes",
    writer: ["Tom O'Connor"],
    stars: ["Ryan Reynolds", "Samuel L. Jackson", "Gary Oldman"],
    rating: "6.9",
    likeCounter: 0,
    genres: ["action", "comedy", "crime"],
  },
  {
    title: "Venom",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    releaseYear: "2018",
    country: "US",
    description:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
    content:
      "After a faulty interview with the Life Foundation ruins his career, former reporter Eddie Brock's life is in pieces. Six months later, he comes across the Life Foundation again, and he comes into contact with an alien symbiote and becomes Venom, a parasitic antihero.",
    director: "Ruben Fleischer",
    writer: ["Jeff Pinkner", "Scott Rosenberg", "Kelly Marcel"],
    stars: ["Tom Hardy", "Michelle Williams", "Riz Ahmed"],
    rating: "6.7",
    likeCounter: 0,
    genres: ["action", "adventure", "sci-fi"],
  },
  {
    title: "Extraction",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
    description:
      "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    content:
      "In an underworld of weapons dealers and traffickers, a young boy becomes the pawn in a war between notorious drug lords. Trapped by kidnappers inside one of the world's most impenetrable cities, his rescue beckons the unparalleled skill of a mercenary named Tyler Rake, but Rake is a broken man with nothing to lose, harboring a death wish that makes an already deadly mission near impossible.",
    director: "Sam Hargrave",
    writer: ["Joe Russo", "Andre Parks", "Anthony Russo"],
    stars: ["Chris Hemsworth", "Bryon Lerum", "Ryder Lerum"],
    releaseYear: "2020",
    rating: "6.7",
    country: "US",
    likeCounter: 0,
    genres: ["action", "thriller"],
  },
  {
    title: "Vanguard",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
    description:
      "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
    content:
      "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
    director: "Stanley Tong",
    writer: ["Stanley Tong", "Tiffany Alycia Tong"],
    stars: ["Jackie Chan", "Yang Yang", "Lun Ai"],
    releaseYear: "2020",
    rating: "4.7",
    country: "China",
    likeCounter: 0,
    genres: ["action", "adventure", "comedy"],
  },
  {
    title: "Mortal Kombat",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    description:
      "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    content:
      "MMA fighter Cole Young (Lewis Tan), accustomed to taking a beating for money, is unaware of his heritage-or why Outworld's Emperor Shang Tsung (Chin Han) has sent his best warrior, Sub-Zero (Joe Taslim), an otherworldly Cryomancer, to hunt Cole down. Fearing for his family's safety, Cole goes in search of Sonya Blade (Jessica McNamee) at the direction of Jax (Mehcad Brooks), a Special Forces Major who bears the same strange dragon marking Cole was born with. Soon, he finds himself at the temple of Lord Raiden (Tadanobu Asano), an Elder God and the protector of Earthrealm, who grants sanctuary to those who bear the mark. Here, Cole trains with experienced warriors Liu Kang (Ludi Lin), Kung Lao (Max Huang) and rogue mercenary Kano (Josh Lawson), as he prepares to stand with Earth's greatest champions against the enemies of Outworld in a high stakes battle for the universe. But will Cole be pushed hard enough to unlock his arcana-the immense power from within his soul-in time to save not only his family but to stop Outworld once and for all?",
    director: "Simon McQuoid",
    writer: ["Greg Russo", "Dave Callaham", "Oren Uziel"],
    stars: ["Lewis Tan", "Jessica McNamee", "Josh Lawson"],
    releaseYear: "2021",
    rating: "6.1",
    country: "US",
    likeCounter: 0,
    genres: ["action", "adventure", "fantasy"],
  },
  {
    title: "Tenki no ko",
    imageUrl: "https://wallpapercave.com/wp/wp4382190.jpg",
    description:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    releaseYear: "2019",
    rating: "7.5",
    director: "Makoto Shinkai",
    country: "Japan",
    likeCounter: 0,
    genres: ["animation", "drama", "fantasy"],
  },
  {
    title: "Gekijouban Violet Evergarden",
    imageUrl:
      "https://animotaku.fr/wp-content/uploads/2020/10/violet-evergarden-the-movie-France.jpeg",
    description:
      "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns, she goes back to her past to feel the true feelings of the Major's, 'I love you.'",
    content:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    director: "Makoto Shinkai",
    writer: ["Makoto Shinkai"],
    stars: ["Kotaro Daigo", "Nana Mori", "Tsubasa Honda"],
    releaseYear: "2020",
    rating: "8.5",
    country: "Japan",
    likeCounter: 0,
    genres: ["animation", "drama", "fantasy"],
  },
  {
    title: "Joze to tora to sakanatachi",
    imageUrl:
      "https://www.anmosugoi.com/wp-content/uploads/2019/12/tumblr_078a5946d982cd8b498a70f4b964accf_38caca85_1280-696x983.jpg",
    description:
      "Tsuneo is a university student and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a evening walk.",
    content:
      "Tsuneo is a university student and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a evening walk.",
    director: "Kôtarô Tamura",
    writer: ["Seiko Tanabe", "sayaka Kuwamura"],
    stars: ["Kaya Kiyohara", "Taishi Nakagawa", "Matsutera Chiemi"],
    releaseYear: "2020",
    rating: "8.1",
    country: "Japan",
    likeCounter: 0,
    genres: ["animation", "drama", "romance"],
  },
  {
    title: "Bad Boys for Life",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3N316jUSdhvPyYTW29G4v9ebbcS.jpg",
    description:
      "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    content:
      "Marcus and Mike have to confront new issues (career changes and midlife crises), as they join the newly created elite team AMMO of the Miami police department to take down the ruthless Armando Armas, the vicious leader of a Miami drug cartel.",
    director: "Adil El Arbi",
    writer: ["Peter Craig", "Joe Carnahan", "Chris Bremner"],
    stars: ["Will Smith", "Martin Lawrence", "Vanessa Hudgens"],
    releaseYear: "2020",
    rating: "6.6",
    country: "US",
    likeCounter: 0,
    genres: ["action", "comedy", "crime"],
  },
];

module.exports = data;
