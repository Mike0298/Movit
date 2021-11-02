const data = [
  {
    rating: "6.6",
    likeCounter: 0,
    genres: ["action", "comedy", "crime"],
    title: "Bad Boys for Life",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/3N316jUSdhvPyYTW29G4v9ebbcS.jpg",
    description:
      "Miami detectives Mike Lowrey and Marcus Burnett must face off against a mother-and-son pair of drug lords who wreak vengeful havoc on their city.",
    releaseYear: "2020",
    country: "US",
  },
  {
    rating: "8.1",
    likeCounter: 0,
    genres: ["animation", "drama", "romance"],
    title: "Joze to tora to sakanatachi",
    imageUrl:
      "https://www.anmosugoi.com/wp-content/uploads/2019/12/tumblr_078a5946d982cd8b498a70f4b964accf_38caca85_1280-696x983.jpg",
    description:
      "Tsuneo is a university student and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a evening walk.",
    releaseYear: "2020",
    country: "Japan",
  },
  {
    rating: "8.5",
    likeCounter: 0,
    genres: ["animation", "drama", "fantasy"],
    title: "Gekijouban Violet Evergarden",
    imageUrl:
      "https://animotaku.fr/wp-content/uploads/2020/10/violet-evergarden-the-movie-France.jpeg",
    description:
      "After the aftermath of a war, a young girl who was used as a 'tool' for war learned to live. With the scars of burns, she goes back to her past to feel the true feelings of the Major's, 'I love you.'",
    releaseYear: "2020",
    country: "Japan",
  },
  {
    rating: "7.5",
    likeCounter: 0,
    genres: ["animation", "drama", "fantasy"],
    title: "Tenki no ko",
    imageUrl: "https://wallpapercave.com/wp/wp4382190.jpg",
    description:
      "A high-school boy who has run away to Tokyo befriends a girl who appears to be able to manipulate the weather.",
    releaseYear: "2019",
    country: "Japan",
  },
  {
    rating: "6.1",
    likeCounter: 0,
    genres: ["action", "adventure", "fantasy"],
    title: "Mortal Kombat",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg",
    description:
      "MMA fighter Cole Young seeks out Earth's greatest champions in order to stand against the enemies of Outworld in a high stakes battle for the universe.",
    releaseYear: "2021",
    country: "US",
  },
  {
    rating: "4.7",
    likeCounter: 0,
    genres: ["action", "adventure", "comedy"],
    title: "Vanguard",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/fX8e94MEWSuTJExndVYxKsmA4Hw.jpg",
    description:
      "Covert security company Vanguard is the last hope of survival for an accountant after he is targeted by the world's deadliest mercenary organization.",
    releaseYear: "2020",
    country: "China",
  },
  {
    rating: "6.7",
    likeCounter: 0,
    genres: ["action", "thriller"],
    title: "Extraction",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/1R6cvRtZgsYCkh8UFuWFN33xBP4.jpg",
    description:
      "Tyler Rake, a fearless black market mercenary, embarks on the most deadly extraction of his career when he's enlisted to rescue the kidnapped son of an imprisoned international crime lord.",
    releaseYear: "2020",
    country: "US",
  },
  {
    rating: "6.7",
    likeCounter: 0,
    genres: ["action", "adventure", "sci-fi"],
    title: "Venom",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/VuukZLgaCrho2Ar8Scl9HtV3yD.jpg",
    description:
      "A failed reporter is bonded to an alien entity, one of many symbiotes who have invaded Earth. But the being takes a liking to Earth and decides to protect it.",
    releaseYear: "2018",
    country: "US",
  },
  {
    rating: "6.9",
    likeCounter: 0,
    genres: ["action", "comedy", "crime"],
    title: "The Hitman's Bodyguard",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/7KsqfXDECZMryX1Rv4RKsT7SIjQ.jpg",
    description:
      "The world's top bodyguard gets a new client, a hitman who must testify at the International Criminal Court. They must put their differences aside and work together to make it to the trial on time.",
    releaseYear: "2017",
    country: "US",
  },
  {
    rating: "6.6",
    likeCounter: 0,
    genres: ["action", "adventure", "drama"],
    title: "The Tomorrow War",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/yizL4cEKsVvl17Wc1mGEIrQtM2F.jpg",
    description:
      "A family man is drafted to fight in a future war where the fate of humanity relies on his ability to confront the past.",
    releaseYear: "2021",
    country: "US",
  },
  {
    rating: "7.4",
    likeCounter: 0,
    genres: ["drama", "horror", "sci-fi"],
    title: "A Quiet Place Part II",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/z2UtGA1WggESspi6KOXeo66lvLx.jpg",
    description: "Sequel to A Quiet Place",
    releaseYear: "2020",
    country: "US",
  },
  {
    rating: "7.4",
    likeCounter: 0,
    genres: ["action", "crime", "thriller"],
    title: "John Wick: Chapter 3 - Parabellum",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
    description: "Third installment of John Wick",
    releaseYear: "2019",
    country: "US",
  },
  {
    rating: "8.3",
    likeCounter: 0,
    genres: ["animation", "action", "adventure"],
    title: "Demon Slayer -Kimetsu no Yaiba- The Movie: Mugen Train",
    imageUrl:
      "https://image.tmdb.org/t/p/w300_and_h450_bestv2/xPpXYnCWfjkt3zzE0dpCNME1pXF.jpg",
    description: "Prequel to Demon Slayer -Kimetsu no Yaiba- animation series",
    releaseYear: "2020",
    country: "Japan",
  },
];

module.exports = data;
