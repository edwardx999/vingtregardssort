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
    checked: true,
    sub: [
      { name: "Medieval", tooltip: "⚔️", key: "medieval" },
      { name: "Baroque", key: "baroque" },
      { name: "Classical", tooltip: "💤", key: "classical" },
      { name: "Romantic", tooltip: "🤮", key: "romantic" },
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
      { name: "China (People's Republic)", tooltip: "great firewall land", key: "cn" },
      { name: "France", tooltip: "baguette land", key: "fr" },
      { name: "Germany", tooltip: "bier land", key: "de" },
      { name: "Japan", tooltip: "anime land", key: "jp" },
      { name: "Korea (South and North)", key: "kr" },
      { name: "Russia", key: "ru" },
      { name: "Netherlands", tooltip: "windmill land", key: "nl" },
      { name: "UK", tooltip: "tea land", key: "uk" },
      { name: "USA", tooltip: "gun land", key: "us" },
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
    checked: false,
    tooltip: "Completely objective and unbiased"
  }
]

dataSet[dataSetVersion].characterData = [
  // Netherlands
  {
    name: "Louis Andriessen",
    img: "https://i.imgur.com/ZpXLo2o.jpg",
    opts: {
      period: [ "contemporary" ],
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
      period: [ "modern", "contemporary" ],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Pierre Boulez",
    img: "https://i.imgur.com/4H7hOND.jpg",
    opts: {
      period: [ "contemporary"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Germaine Tailleferre",
    img: "https://i.imgur.com/dvXTV55.jpg",
    opts: {
      period: [ "modern"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  {
    name: "Gérard Grisey",
    img: "https://i.imgur.com/6SMcJp5.jpg",
    opts: {
      period: [ "contemporary"],
      country: ["fr"],
      continent: ["eu"],
      genre: ["classical"]
    }
  },
  // USA
  {
    name: "John Adams",
    img: "https://i.imgur.com/1t3FsRu.jpg",
    opts: {
      period: [ "classical"],
      country: ["us"],
      continent: ["na"],
      genre: ["classical"]
    }
  },
  // Russia
  {
    name: "Nikolai Kapustin",
    img: "https://i.imgur.com/2lQpsf4.jpg",
    opts: {
      period: [ "contemporary" ],
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
