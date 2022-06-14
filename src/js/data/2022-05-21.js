/* property
    characterData, checked, img, key, name, nonanimu, options, opts, rarity,
    series, status, sub, tooltip, trap, when
*/
/* global
    dataSet,
    dataSetVersion
*/
/* eslint-disable no-global-assign */
dataSetVersion = "2022-05-21" // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {}
dataSet[dataSetVersion].options = [
  {
    name: "Filter by Period",
    key: "period",
    tooltip: "Doesn't really make sense but ¯\\_(ツ)_/¯",
    checked: false,
    sub: [
      { name: "Medieval", tooltip: "⚔️", key: "medieval" },
      { name: "Renaissance", key: "renaissance" },
      { name: "Baroque", tooltip: "☀️", key: "baroque" },
      { name: "Classical", tooltip: "💤", key: "classical" },
      { name: "Romantic", tooltip: "🤮 (usually)", key: "romantic" },
      { name: "Modern", tooltip: "first half of 20th century(???)", key: "modern" },
      { name: "Contemporary", tooltip: "As if this actually means anything", key: "contemporary" }
    ]
  },
  {
    name: "Filter by Country",
    key: "country",
    tooltip: "Check this to restrict to certain countries.",
    checked: false,
    sub: [
      { name: "Austria", key: "at" },
      { name: "Azerbaijan", key: "az" },
      { name: "China (People's Republic)", tooltip: "great firewall land", key: "cn" },
      { name: "France", tooltip: "baguette land", key: "fr" },
      { name: "Germany", tooltip: "bier land", key: "de" },
      { name: "Hungary", key: "hu" },
      { name: "Italy", tooltip: "spaghetti land", key: "it" },
      { name: "Japan", tooltip: "anime land", key: "jp" },
      { name: "Korea (South and North)", key: "kr" },
      { name: "Netherlands", tooltip: "windmill land", key: "nl" },
      { name: "Russia", key: "ru" },
      { name: "UK", tooltip: "tea land", key: "uk" },
      { name: "USA", tooltip: "gun land", key: "us" }
    ]
  },
  {
    name: "Filter by Continent",
    key: "continent",
    tooltip: "Check this to restrict to certain countries.",
    checked: false,
    sub: [
      { name: "North America", key: "na" },
      { name: "South America", key: "sa" },
      { name: "Europe", key: "eu" },
      { name: "Asia", key: "asia" },
      { name: "Africa", key: "afr" },
      { name: "Oceania", key: "aus" }
    ]
  },
  {
    name: "Filter by Genre",
    key: "genre",
    tooltip: "Check this to restrict to certain genres.",
    checked: false,
    sub: [
      { name: "Classical", key: "classical" },
      { name: "Jazz", key: "jazz" }
    ]
  },
  {
    name: "Only good composers",
    key: "bad",
    checked: true,
    tooltip: "Completely objective and unbiased"
  }
]

dataSet[dataSetVersion].characterData = [
  // Netherlands
  {
    name: "Louis Andriessen",
    img: "https://i.imgur.com/ZpXLo2o.jpg",
    opts: {
      period: ["contemporary"],
      country: ["nl"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // France
  {
    name: "Olivier Messiaen",
    img: "https://i.imgur.com/uNlLCR6.jpg",
    opts: {
      period: ["modern", "contemporary"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Pierre Boulez",
    img: "https://i.imgur.com/4H7hOND.jpg",
    opts: {
      period: ["contemporary"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Germaine Tailleferre",
    img: "https://i.imgur.com/dvXTV55.jpg",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Gérard Grisey",
    img: "https://i.imgur.com/6SMcJp5.jpg",
    opts: {
      period: ["contemporary"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Claude Debussy",
    img: "https://i.imgur.com/Ega7VLe.png",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Maurice Ravel",
    img: "https://i.imgur.com/uOz5Cib.jpg",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Mel Bonis",
    img: "https://i.imgur.com/wBqLm6U.png",
    opts: {
      period: ["romantic"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "François Couperin",
    img: "https://i.imgur.com/9osIUUA.png",
    opts: {
      period: ["baroque"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Claude LeJeune",
    img: "https://i.imgur.com/9BdOEWj.png",
    opts: {
      period: ["renaissance"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Guillaume de Machaut",
    img: "https://i.imgur.com/QjcOqWg.jpg",
    opts: {
      period: ["medieval"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Jehan Alain",
    img: "https://i.imgur.com/Q0Sdhd2.jpg",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Sébastien de Brossard",
    img: "https://i.imgur.com/SkO1yRv.png",
    opts: {
      period: ["baroque"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Lili Boulanger",
    img: "https://i.imgur.com/FxBHKVo.jpg",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Nadia Boulanger",
    img: "https://i.imgur.com/Peh38yj.jpg",
    opts: {
      period: ["modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // Germany
  {
    name: "J.S. Bach",
    img: "https://i.imgur.com/RSBPfqz.jpg",
    opts: {
      period: ["baroque"],
      country: ["de"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // Hungary
  {
    name: "Béla Bartók",
    img: "https://i.imgur.com/bdwMRrA.jpg",
    opts: {
      period: ["modern"],
      country: ["hu"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // UK
  {
    name: "Gustav Holst",
    img: "https://i.imgur.com/BbWoFRX.png",
    opts: {
      period: ["modern"],
      country: ["uk"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Frederick Delius",
    img: "https://i.imgur.com/zFbYU7P.png",
    opts: {
      period: ["modern"],
      country: ["uk"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // USA
  {
    name: "John Adams",
    img: "https://i.imgur.com/1t3FsRu.jpg",
    opts: {
      period: ["contemporary"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  {
    name: "Henry Cowell",
    img: "https://i.imgur.com/eFv7ned.jpg",
    opts: {
      period: ["modern"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  {
    name: "Aaron Copland",
    img: "https://i.imgur.com/FZhwlKD.jpg",
    opts: {
      period: ["contemporary"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  {
    name: "John Cage",
    img: "https://i.imgur.com/j4sIvSn.jpg",
    opts: {
      period: ["contemporary"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  {
    name: "Leonard Bernstein",
    img: "https://i.imgur.com/PAmiUSF.jpg",
    opts: {
      period: ["contemporary"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  // Korea
  {
    name: "Unsuk Chin",
    img: "https://i.imgur.com/MLip8Ov.png",
    opts: {
      period: ["contemporary"],
      country: ["kr"],
      continent: ["asia"],
      genre: ["classical"]
    }
  },
  // Austria
  {
    name: "Alban Berg",
    img: "https://i.imgur.com/98R9lTc.jpg",
    opts: {
      period: ["modern"],
      country: ["at"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // China
  {
    name: "Chen Xiaoyong",
    img: "https://i.imgur.com/Y3I8fSK.png",
    opts: {
      period: ["contemporary"],
      country: ["cn"],
      continent: ["asia"],
      genre: ["classical"]
    }
  },
  {
    name: "Chen Gang",
    img: "https://i.imgur.com/TsePZiQ.jpg",
    opts: {
      period: ["contemporary"],
      country: ["cn"],
      continent: ["asia"],
      genre: ["classical"]
    }
  },
  {
    name: "Chen Qigang",
    img: "https://i.imgur.com/VXxrON1.jpg",
    opts: {
      period: ["contemporary"],
      country: ["cn"],
      continent: ["asia"],
      genre: ["classical"]
    }
  },
  // Italy
  {
    name: "Luciano Berio",
    img: "https://i.imgur.com/5WQYKEx.jpg",
    opts: {
      period: ["contemporary"],
      country: ["it"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // Azerbaijan
  {
    name: "Franghiz Ali-Zadeh",
    img: "https://i.imgur.com/qtbPiJo.jpg",
    opts: {
      period: ["contemporary"],
      country: ["az"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // Russia
  {
    name: "Nikolai Kapustin",
    img: "https://i.imgur.com/2lQpsf4.jpg",
    opts: {
      period: ["contemporary"],
      country: ["ru"],
      continent: ["eu"],
      genre: ["jazz"],
      bad: true
    },
  },
  //
  // END
  //
]
