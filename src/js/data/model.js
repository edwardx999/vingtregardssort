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
    name: "Filter by Series",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: true,
    sub: [
      { name: "Original", tooltip: "feat. salt", key: "kirara" },
      { name: "Hidamari Sketch", tooltip: "aka nutbladder grills", key: "wide" },
      { name: "Gakkou Gurashi", tooltip: "spoiler: there is (no) hope", key: "gg" },
      { name: "A Channel", tooltip: "suki tooru~~", key: "achan" },
      { name: "Yuyushiki", tooltip: "yui's harem", key: "yys" },
      { name: "Kin`iro Mosaic", tooltip: "dess", key: "km" },
      { name: "New Game!", tooltip: "ganbaruzoi", key: "ng" },
      { name: "Stella no Mahou", tooltip: "notNewGame, also Teru being Teru", key: "snm" },
      { name: "Urara Meirochou", tooltip: "feat. bellies and Nono being bullied(?)", key: "urara" },
      { name: "Kill Me Baby", tooltip: "the most philosophical slapstick of all time", key: "kmb" },
      { name: "Sakura Trick", tooltip: "me: *drunk on dat gay shit*", key: "gay" },
      { name: "Blend S", tooltip: "a reminder that Hideri's CV is essentially Nico and you are gay", key: "blends" },
      { name: "Slow Start", tooltip: "for once it's not a protag's harem", key: "ss" },
      { name: "Yuru Camp", tooltip: "camp s h i y o", key: "yc" },
      { name: "Yumekui Merry", tooltip: "wait this is Kirara?!", key: "merry" },
      { name: "Ha na ya ma ta", tooltip: "paato paato the dramafes", key: "hana" },
      { name: "Comic Girls", tooltip: "abababa", key: "comiga" },
      { name: "Anne Happy", tooltip: "the kirara that describes you", key: "anhapi" },
      { name: "Haruka na Recieve", tooltip: "haikyu, but fappable and always beach episode", key: "haruka" },
      { name: "K-ON!", tooltip: "KyoAni cashcow about cute girls not trying to do band things", key: "htt" },
      { name: "Koufuku Grafitti", tooltip: "Souma's grandma", key: "foodgasm" },
      { name: "Acchi Kocchi", tooltip: "This animu gave me diabetes", key: "acchi" },
      { name: "Gochuumon Usagi desu ka?", tooltip: "civil war: cawfee VS gween tea", key: "rabbits" },
      { name: "Wakaba＊Girl", tooltip: "ping pong grils", key: "wakaba" },
      { name: "Anima Yell", tooltip: "not love live sunshine, mc is also not bakachika", key: "anima" },
      { name: "Sansha Sanyou", tooltip: "everyone's dying grandma feat. ex-ojou-chan", key: "3leaves" },
      { name: "GA: Geijutsuka Art Design Class", tooltip: "hidasketch, but with souless eyes that seep into your soul", key: "ga" },
      { name: "Hitsugi Katsugi no Kuro. ~Kaichuu Tabi no Wa~", tooltip: "also known as Kuro. or nothing because you're not a mangafag.", key: "kuro" },
      { name: "Machikado Mazoku", tooltip: "It's almost like GabDrop, but Satania is the MC.", key: "machi" },
      { name: "Harumination", tooltip: "If Nagato became funny and liked curry.", key: "harumi" },
      { name: "Koisuru Asteroid", tooltip: "Hinata grew, is now on high school, has a yuri OTP, and is two-timing 2 interests. Also stars.", key: "koias" },
      { name: "Tamayomi", tooltip: "Baseballlllllllllllllll Jun Maeda would be proud!", key: "tamayomi" },
      { name: "Dropout Idol Fruit Tart", tooltip: "Poor man's Hanayamata? Or Poor man's Zombieland Saga?", key: "fruit_tart" },
      { name: "Power of Smile.", tooltip: "Kirara reaching with these \"scriptures\"; I don't even know what this manga is about!", key: "pos" },
      { name: "Koharu Hiyori.", tooltip: "Not to be confused with Koharu Biyori, the OVA anime series from 2008.", key: "koharu" }
    ]
  },
  {
    name: "Filter by Availability",
    key: "when",
    tooltip: "Check this to restrict to characters that appear in the game.",
    checked: false,
    sub: [
      { name: "In-Game", key: "in" },
      { name: "Soon.tm", tooltip: "aka datamined", key: "soon" },
      { name: "Never.tm", key: "never" }
    ]
  },
  {
    name: "Filter by Importance",
    key: "status",
    tooltip: "Okay, seriously, I have an actual standard for this.",
    checked: true,
    sub: [
      {
        name: "Main Cast",
        key: "main",
        tooltip: "By definition, she appears in at least 33% of all chapters after his/her debut."
      },
      {
        name: "Game Cast",
        key: "game",
        tooltip: "She'd normally be less than a recurring character, " +
                 "but if she's in the game, she has to be either a fan favorite or an important character!"
      },
      {
        name: "Rival",
        key: "anta",
        tooltip: "She appears in at least one major arc as a foil / rival / enemy."
      },
      {
        name: "Recurring",
        key: "recur",
        tooltip: "She appears in at least 10% of all chapters after his/her debut."
      },
      {
        name: "Non-Recurring",
        key: "side",
        tooltip: "She only appears in one arc after debut, and for the rest of the manga / anime," +
                 " she is absent. Also, all characters that do not fit the criteria for recurring also fit here.",
        checked: false
      }
    ]
  },
  {
    name: "Filter by Events",
    key: "rarity",
    tooltip: "(WIP) Filter only based on specific SSRs that were released for that event/s",
    checked: false,
    sub: [
      {
        name: "Christmas (2017)",
        key: "christmas_2017",
        tooltip: "The first Christmas."
      },
      {
        name: "Swimsuit (2018)",
        key: "swimsuit_2018",
        tooltip: "ngl people were shaking when this thing was first released..."
      },
      {
        name: "Christmas (2018)",
        key: "christmas_2018",
        tooltip: "Unending Christmas!"
      },
      {
        name: "Sports Festival (2019)",
        key: "sports_2019",
        tooltip: "Because we always needed more Sports Fes cards."
      },
      {
        name: "New Years (2020)",
        key: "newyears_2020",
        tooltip: "Because we always have New Years seasonal charas."
      },
      {
        name: "Valentines (2020)",
        key: "valentines_2020",
        tooltip: "The first Valentines event with an actual OTP!"
      },
      {
        name: "Hinamatsuri (2020)",
        key: "hinamatsuri_2020",
        tooltip: "3 flats 1 big boba."
      },
      {
        name: "Maids (2020)",
        key: "maid_2020",
        tooltip: "You know what we really needed, more maids. Also Tsubaki best grill."
      },
      {
        name: "Sports Festival (2020)",
        key: "sports_2020",
        tooltip: "DID WE REALLY NEED SHAMIKO TO PARTICIPATE?!"
      },
      {
        name: "Tanabata (2020)",
        key: "tanabata_2020",
        tooltip: "Did ... Did we really need this event to happen for the 3rd time? But hey, at least there's Lamp."
      },
      {
        name: "Swimsuit / Summer (2020)",
        key: "swimsuit_2020",
        tooltip: "Do Yu No who are in this event? I don't wanna know."
      },
      {
        name: "Sanrio (2020)",
        key: "sanrio_2020",
        tooltip: "Why did we have this collab again?"
      },
      {
        name: "Halloween (2020)",
        key: "halloweeen_2020",
        tooltip: "Totally not a Milky Holmes collab event."
      },
      {
        name: "Christmas (2020)",
        key: "christmas_2020",
        tooltip: "Christmas until the end of time baby!"
      }
    ]
  },
  {
    name: "No Traps",
    key: "trap",
    checked: false,
    tooltip: "Check this to remove Hideri (and others?), because (s)he's ranked ??? in your heart."
  },
  {
    name: "No Non-Anime charas",
    key: "nonanimu",
    checked: true,
    tooltip: "Check this to remove characters that haven't appeared in anime."
  },
  {
    name: "Manga-Exclusive charas",
    key: "manga_exclusive",
    checked: true,
    forced_inclusive: true,
    tooltip: "Uncheck this to exclude manga-exclusive characters added into the game."
  }
]

dataSet[dataSetVersion].characterData = [
  // Hidamari Sketch
  {
    name: "Yuno",
    img: "https://i.imgur.com/5l2Ekoc.jpg",
    alts: {
      names: {
        "jp": "ゆの"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2018)",
            "jp": "クリスマス【2018】"
          },
          url: "https://i.imgur.com/iuFMTWH.png"
        },
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/4Y6kaik.png"
        }
      ]
    },
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2018", "swimsuit_2020"]
    }
  },
  {
    name: "Miyako",
    img: "https://i.imgur.com/ftrtMk5.jpg",
    opts: {
      series: [ "wide" ],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2019"]
    }
  },
  {
    name: "Hiro",
    img: "https://i.imgur.com/OSFkRR3.png",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Sae",
    img: "https://i.imgur.com/TUVJgMh.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Nori",
    img: "https://i.imgur.com/F0ToNFe.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Nazuna",
    img: "https://i.imgur.com/chPqUyM.jpg",
    opts: {
      series: ["wide"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Yoshinoya",
    img: "https://i.imgur.com/HQ585oP.png",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Matsuri",
    img: "https://i.imgur.com/sbKhIbT.jpg",
    opts: {
      series: ["wide"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  //
  // Yuyushiki
  //
  {
    name: "Yuzuko Nonohara",
    img: "https://i.imgur.com/L0NW5TO.jpg",
    alts: {
      names: {
        "jp": "野々原 ゆずこ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/mfVvuth.png"
        }
      ]
    },
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018"]
    }
  },
  {
    name: "Yui Ichii",
    img: "https://i.imgur.com/2sKr5MG.png",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Yukari Hinata",
    img: "https://i.imgur.com/B47NIsP.png",
    alts: {
      names: {
        "jp": "日向 縁"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/Ol76Sgz.png"
        }
      ]
    },
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"]
    }
  },
  {
    name: "Yoriko Matsumoto",
    img: "https://i.imgur.com/GP5t5Eb.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Chiho Aikawa",
    img: "https://i.imgur.com/mn0qDCW.png",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Fumi Hasegawa",
    img: "https://i.imgur.com/qf4xpVo.png",
    alts: {
      names: {
        "jp": "長谷川 ふみ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/mfVvuth.png"
        }
        */
      ]
    },
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Kei Okano",
    img: "https://i.imgur.com/Vgd0EYl.jpg",
    opts: {
      series: ["yys"],
      when: ["in"],
      status: ["recur"]
    }
  },
  //
  // Gakkou Gurashi
  //
  {
    name: "Yuki Takeya",
    img: "https://i.imgur.com/92TcgbJ.jpg",
    alts: {
      names: {
        "jp": "丈槍 由紀"
      },
      imgs: [
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/WQgT8S6.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/kQNMXXx.png"
        },
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/6CuTJdw.png"
        }
      ]
    },
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit_2018", "ssr", "ssr2"]
    }
  },
  {
    name: "Kurumi Ebisuzawa",
    img: "https://i.imgur.com/vllHhFw.jpg",
    alts: {
      names: {
        "jp": "恵飛須沢 胡桃"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2020)",
            "jp": "クリスマス【2020】"
          },
          url: "https://i.imgur.com/9cEFgWi.png"
        },
        {
          tooltip: {
            "en": "Swimsuit / Summer (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/ISqmhrK.png"
        }
      ]
    },
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2020", "swimsuit_2019"]
    }
  },
  {
    name: "Miki Naoki",
    img: "https://i.imgur.com/s4qktW5.png",
    alts: {
      names: {
        "jp": "直樹 美紀"
      },
      imgs: [
        {
          tooltip: {
            "en": "Halloween (2020)",
            "jp": "ハロウィン【2020】"
          },
          url: "https://i.imgur.com/NpCcwLv.png"
        }
      ]
    },
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "halloween_2020"]
    }
  },
  {
    name: "Megumi Sakura",
    img: "https://i.imgur.com/8FC9RfX.jpg",
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main", "recur"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Yuri Wakasa",
    img: "https://i.imgur.com/2GqbLBG.jpg",
    alts: {
      names: {
        "jp": "若狭 悠里"
      },
      imgs: [
        {
          tooltip: {
            "en": "New Years (2020)",
            "jp": "お正月【2020】"
          },
          url: "https://i.imgur.com/E5pkcgq.png"
        }
      ]
    },
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "newyears_2020"]
    }
  },
  {
    name: "Ruu Wakasa",
    img: "https://i.imgur.com/4ZosD4E.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Hikako Kirai",
    img: "https://i.imgur.com/EmHBMc5.png",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Touko Deguchi",
    img: "https://i.imgur.com/5zeW3XR.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aki Hikarizato",
    img: "https://i.imgur.com/EKUaV08.jpg",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Aosoi Shiiko",
    img: "https://i.imgur.com/jzhiF2o.jpg?2",
    opts: {
      series: ["gg"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Kei Shidou",
    img: "https://i.imgur.com/lcdx4sK.png",
    alts: {
      names: {
        "jp": "祠堂 圭"
      },
      imgs: []
    },
    opts: {
      series: ["gg"],
      when: ["in"],
      status: ["game"],
      rarity: ["ssr"]
    }
  },
  //
  // New Game
  //
  {
    name: "Aoba Suzukaze",
    img: "https://i.imgur.com/p8rY4Ig.jpg",
    alts: {
      names: {
        "jp": "涼風 青葉"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2019)",
            "jp": "運動会【2019】"
          },
          url: "https://i.imgur.com/cyxell3.png"
        },
        {
          tooltip: {
            "en": "Sports Festival (2019)",
            "jp": "運動会【2019】"
          },
          url: "https://i.imgur.com/VoUuM8l.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/zxDUX3c.png"
        }
      ]
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sports_2019", "ssr2"]
    }
  },
  {
    name: "Hifumi Takimoto",
    img: "https://i.imgur.com/5dOhBCb.jpg",
    alts: {
      names: {
        "jp": "滝本 ひふみ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2018)",
            "jp": "クリスマス【2018】"
          },
          url: "https://i.imgur.com/OQZ9RHk.png"
        },
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/aULd0aP.png"
        }
      ]
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2018", "maid_2020"]
    }
  },
  {
    name: "Hajime Shinoda",
    img: "https://i.imgur.com/3ieZMGf.jpg",
    tooltip: "Christmas (2017) / クリスマス【2017】",
    alts: {
      names: {
        "jp": "篠田 はじめ"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yun Iijima",
    img: "https://i.imgur.com/BakGJt0.jpg",
    tooltip: "Hinamatsuri (2018) / クリスマス【2018】",
    alts: {
      names: {
        "jp": "飯島 ゆん"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["hinamatsuri2018"]
    }
  },
  {
    name: "Kou Yagami",
    img: "https://i.imgur.com/Fcu8AYP.png",
    alts: {
      names: {
        "jp": "八神 コウ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit / Summer (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/VKkU0ip.jpg"
        },
        {
          tooltip: {
            "en": "Alternate Art (Awakened ver.)",
            "jp": "Alternate Art (Awakened ver.)"
          },
          url: "https://i.imgur.com/emhnOQd.png"
        }
      ]
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit_2018", "ssr"]
    }
  },
  {
    name: "Rin Tooyama",
    img: "https://i.imgur.com/9MAOlij.png",
    alts: {
      names: {
        "jp": "遠山 りん"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Nene Sakura",
    img: "https://i.imgur.com/DGpYQlh.png",
    tooltip: "Swimsuit (2018) / 水着【2018】",
    alts: {
      names: {
        "jp": "桜 ねね"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit2019"]
    }
  },
  {
    name: "Umiko Ahagon",
    img: "https://i.imgur.com/ZTnpLOE.png",
    alts: {
      names: {
        "jp": "阿波根 うみこ"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Momiji Mochizuki",
    img: "https://i.imgur.com/jNlVuLh.png",
    alts: {
      names: {
        "jp": "望月 紅葉"
      },
      imgs: [
        {
          tooltip: {
            "en": "Valentines (2020)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/gFs8k0x.png"
        }
      ]
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr", "valentines_2020"]
    }
  },
  {
    name: "Tsubame Narumi",
    img: "https://i.imgur.com/GSa7sRt.png",
    alts: {
      names: {
        "jp": "鳴海 ツバメ"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Shizuku Hazuki",
    img: "https://i.imgur.com/YNnIcW8.png",
    tooltip: "She's officially called Haduki but no. Just no.",
    alts: {
      names: {
        "jp": "葉月 しずく"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["recur"],
      rarity: ["sr"]
    }
  },
  {
    name: "Christina Wako Yamato",
    img: "https://i.imgur.com/Le6dnRN.png?1",
    opts: {
      series: ["ng"],
      when: ["never"],
      status: ["side", "anta"]
    }
  },
  {
    name: "Hotaru Hoshikawa",
    img: "https://i.imgur.com/3buwB6d.png",
    alts: {
      names: {
        "jp": "星川 ほたる"
      },
      imgs: []
    },
    opts: {
      series: ["ng"],
      when: ["in"],
      status: ["recur"],
      rarity: ["ssr"]
    }
  },
  //
  // A Channel
  //
  {
    name: "Tooru Ichii",
    img: "https://i.imgur.com/lWooYNy.jpg",
    alts: {
      names: {
        "jp": "一井 透"
      },
      imgs: [
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/agEliCK.png"
        },
        {
          tooltip: {
            "en": "Christmas (2018)",
            "jp": "クリスマス【2018】"
          },
          url: "https://i.imgur.com/fCWOBBz.png"
        }
      ]
    },
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018", "christmas_2018", "ssr2"]
    }
  },
  {
    name: "Run",
    img: "https://i.imgur.com/ebsBgzG.jpg",
    alts: {
      names: {
        "jp": "るん"
      },
      imgs: [
        {
          tooltip: {
            "en": "New Years (2020)",
            "jp": "お正月【2020】"
          },
          url: "https://i.imgur.com/TbaWDey.png"
        }
      ]
    },
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "newyears_2020"]
    }
  },
  {
    name: "Yuuko",
    img: "https://i.imgur.com/BuPNZVn.jpg",
    alts: {
      names: {
        "jp": "ユー子"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/bNmRV3Z.png"
        }
      ]
    },
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2017", "swimsuit_2020"]
    }
  },
  {
    name: "Nagi",
    img: "https://i.imgur.com/9qvxdJV.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Miho",
    img: "https://i.imgur.com/QddPCdv.jpg",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Yutaka",
    img: "https://i.imgur.com/AlkOE4u.png",
    tooltip: "Maid (2020) / メイド【2020】",
    alts: {
      names: {
        "jp": "ユタカ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/AlkOE4u.png"
        }
      ]
    },
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["main"],
      rarity: ["maid_2020"]
    }
  },
  {
    name: "Kimiko Kito",
    img: "https://i.imgur.com/9pzAwbL.png",
    opts: {
      series: ["achan"],
      when: ["in"],
      status: ["game"],
      rarity: ["sr"]
    }
  },
  //
  // Kiniro Mosaic
  //
  {
    name: "Karen Kujou",
    img: "https://i.imgur.com/5URXuui.jpg",
    alts: {
      names: {
        "jp": "ユタカ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/Gdmmb55.png"
        },
        {
          tooltip: {
            "en": "A Magician From Overseas",
            "jp": "舶来の魔術師"
          },
          url: "https://i.imgur.com/mBC7159.png"
        }
      ]
    },
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sports_2020", "magician", "swimsuit_2018"]
    }
  },
  {
    name: "Alice Cartelet",
    img: "https://i.imgur.com/naMSuJd.png",
    alts: {
      names: {
        "jp": "ユタカ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2018)",
            "jp": "クリスマス【2018】"
          },
          url: "https://i.imgur.com/RAwviKD.png"
        },
        {
          tooltip: {
            "en": "New Years (2020)",
            "jp": "お正月【2020】"
          },
          url: "https://i.imgur.com/1ZlLeOv.png"
        },
        {
          tooltip: {
            "en": "Cinnamoroll (Sanrio) (2020)",
            "jp": "シナモロール【サンリオ】【2020】"
          },
          url: "https://i.imgur.com/w4HJxFe.png"
        }
      ]
    },
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2018", "newyears_2020", "sanrio_2020"]
    }
  },
  {
    name: "Shinobu Oomiya",
    img: "https://i.imgur.com/azmRVtf.jpg",
    alts: {
      names: {
        "jp": "大宮 忍"
      },
      imgs: [
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/WQbfFSn.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/8EfOKl2.png"
        }
      ]
    },
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "ssr2"]
    }
  },
  {
    name: "Aya Komichi",
    img: "https://i.imgur.com/PJxlbjW.jpg",
    alts: {
      names: {
        "jp": "小路 綾"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2020)",
            "jp": "クリスマス【2020】"
          },
          url: "https://i.imgur.com/o4H4Dqe.png"
        }
      ]
    },
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["valentines_2018", "swimsuit_2018", "christmas_2020"]
    }
  },
  {
    name: "Youko Inokuma",
    img: "https://i.imgur.com/pYYz7cE.png",
    alts: {
      names: {
        "jp": "猪熊 陽子"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/GgnAQwZ.png"
        }
      ]
    },
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["sports_2019", "swimsuit_2020"]
    }
  },
  {
    name: "Honoka Matsubara",
    img: "https://i.imgur.com/M22Jkpu.png",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Isami Oomiya",
    img: "https://i.imgur.com/RxESoYN.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["recur"]
    }
  },
  {
    name: "Sakura Karasuma",
    img: "https://i.imgur.com/a2UrZ8S.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Akari Kuzehashi",
    img: "https://i.imgur.com/QyeV3qt.jpg",
    opts: {
      series: ["km"],
      when: ["in"],
      status: ["main"]
    }
  },
  //
  // Stella no Mahou
  //
  {
    name: "Tamaki Honda",
    img: "https://i.imgur.com/bUCJJLY.jpg",
    alts: {
      names: {
        "jp": "本田 珠輝"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/4uyIvrv.png"
        }
      ]
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sports_2020"]
    }
  },
  {
    name: "Kayo Fujikawa",
    img: "https://i.imgur.com/66TOqSK.jpg",
    alts: {
      names: {
        "jp": "藤川 歌夜"
      }
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr", "ssr"]
    }
  },
  {
    name: "Shiina Murakami",
    img: "https://i.imgur.com/Cu7I5Nz.png",
    alts: {
      names: {
        "jp": "村上 椎奈"
      },
      imgs: [
        {
          tooltip: {
            "en": "Valentines (2018)",
            "jp": "バレンタイン【2018】"
          },
          url: "https://i.imgur.com/C8a072I.jpg"
        }
      ]
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "valentines_2018"]
    }
  },
  {
    name: "Ayame Seki",
    img: "https://i.imgur.com/6ZboCF4.png",
    alts: {
      names: {
        "jp": "関 あやめ"
      },
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Yumine Fuda",
    img: "https://i.imgur.com/SwYgOIk.png",
    alts: {
      names: {
        "jp": "布田 裕美音"
      },
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018"]
    }
  },
  {
    name: "Teru Hyakutake",
    img: "https://i.imgur.com/30PorMj.jpg",
    alts: {
      names: {
        "jp": "百武 照"
      }
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["recur"],
      rarity: ["sr"]
    }
  },
  {
    name: "Minaha Iino",
    img: "https://i.imgur.com/WGNXM9V.jpg",
    alts: {
      names: {
        "jp": "飯野 水葉"
      },
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main", "recur"],
      rarity: ["sr"]
    }
  },
  {
    name: "Nono Iketani",
    img: "https://i.imgur.com/i8YTBWC.png",
    alts: {
      names: {
        "jp": "池谷 乃々"
      },
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Matsuri Tsuruse",
    img: "https://i.imgur.com/WIx7221.png",
    alts: {
      names: {
        "jp": "鶴瀬 まつり"
      },
    },
    opts: {
      series: ["snm"],
      when: ["in"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  //
  // Kill Me Baby
  //
  {
    name: "Yasuna Oribe",
    img: "https://i.imgur.com/ZkAWMB4.jpg",
    alts: {
      names: {
        "jp": "折部 やすな"
      },
      imgs: [
        {
          tooltip: {
            "en": "New Year (2019)",
            "jp": "お正月【2019】"
          },
          url: "https://i.imgur.com/V0IBrry.png"
        }
      ]
    },
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "newyears2019"]
    }
  },
  {
    name: "Sonya",
    img: "https://i.imgur.com/OdOHOo5.jpg",
    alts: {
      names: {
        "jp": "ソーニャ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Halloween (2020)",
            "jp": "ハロウィン【2020】"
          },
          url: "https://i.imgur.com/IE6hqaJ.png"
        }
      ]
    },
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "halloween_2020"]
    }
  },
  {
    name: "Agiri Goshiki",
    img: "https://i.imgur.com/UVcg6fr.png",
    alts: {
      names: {
        "jp": "呉織 あぎり"
      },
      imgs: []
    },
    opts: {
      series: ["kmb"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Unused Character",
    img: "https://i.imgur.com/OBbq22v.jpg?1",
    opts: {
      series: ["kmb"],
      when: ["never"],
      status: ["side"]
    }
  },
  //
  // Sakura Trick
  //
  {
    name: "Haruka Takayama",
    img: "https://i.imgur.com/KTDZz6R.jpg",
    alts: {
      names: {
        "jp": "高山 春香"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit / Summer (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/K8tPCw0.png"
        }
      ]
    },
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"]
    }
  },
  {
    name: "Yuu Sonoda",
    img: "https://i.imgur.com/A90z1hY.jpg",
    alts: {
      names: {
        "jp": "園田 優"
      },
      imgs: [
        {
          tooltip: {
            "en": "Pompompurin (Sanrio) (2020)",
            "jp": "ポムポムプリン【サンリオ】【2020】"
          },
          url: "https://i.imgur.com/y2GvbjQ.png"
        }
      ]
    },
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sanrio_2020"]
    }
  },
  {
    name: "Shizuku Minami",
    img: "https://i.imgur.com/C8Q4Ok2.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit_2018"]
    }
  },
  {
    name: "Kotone Noda",
    img: "https://i.imgur.com/KcBa8tw.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr", "swimsuit_2018"]
    }
  },
  {
    name: "Kaede Ikeno",
    img: "https://i.imgur.com/LpzlvyA.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Yuzu Iizuka",
    img: "https://i.imgur.com/wLQ0QkC.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Mitsuki Sonoda",
    img: "https://i.imgur.com/v3ImPLp.png",
    alts: {
      names: {
        "jp": "園田 美月"
      },
      imgs: []
    },
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["anta", "recur"],
      rarity: ["sr"]
    }
  },
  {
    name: "Rina Sakai",
    img: "https://i.imgur.com/3rIBQEw.jpg?1",
    opts: {
      series: ["gay"],
      when: ["never"],
      status: ["side"]
    }
  },
  {
    name: "Sumi Otokawa",
    img: "https://i.imgur.com/tuf8d9z.jpg",
    opts: {
      series: ["gay"],
      when: ["in"],
      status: ["side"],
      rarity: ["sr"]
    }
  },
  //
  // Blend S
  //
  {
    name: "Maika Sakuranomiya",
    img: "https://i.imgur.com/e3d4iSl.jpg",
    alts: {
      names: {
        "jp": "桜ノ宮 苺香"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/fJHsYeG.png"
        }
      ]
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit2019"]
    }
  },
  {
    name: "Kaho Hinata",
    img: "https://i.imgur.com/gfCuADC.png",
    alts: {
      names: {
        "jp": "日向 夏帆"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/qhvHz8a.png"
        },
        {
          tooltip: {
            "en": "New Year (2019)",
            "jp": "お正月【2019】"
          },
          url: "https://i.imgur.com/Ig29ZSI.png"
        }
      ]
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018", "newyear2019"]
    }
  },
  {
    name: "Mafuyu Hoshikawa",
    img: "https://i.imgur.com/sUcCxgA.jpg",
    alts: {
      names: {
        "jp": "星川 麻冬"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2020)",
            "jp": "クリスマス【2020】"
          },
          url: "https://i.imgur.com/HIZihFN.png"
        }
      ]
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2020"]
    }
  },
  {
    name: "Miu Amano",
    img: "https://i.imgur.com/a5z5KKF.png",
    alts: {
      names: {
        "jp": "天野 美雨"
      }
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hideri Kanzaki",
    img: "https://i.imgur.com/d5VH0qv.png",
    alts: {
      names: {
        "jp": "神崎 ひでり"
      },
      imgs: [
        {
          tooltip: {
            "en": "Hinamatsuri (2020)",
            "jp": "ひな祭り【2020】"
          },
          url: "https://i.imgur.com/AEKv0fQ.png"
        },
        {
          tooltip: {
            "en": "Hinamatsuri (2020)",
            "jp": "ひな祭り【2020】"
          },
          url: "https://i.imgur.com/TPLlTpC.png"
        }
      ]
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["main"],
      rarity: ["hinamatsuri_2020", "ssr"],
      trap: true
    }
  },
  {
    name: "Aika Sakuranomiya",
    img: "https://i.imgur.com/oy7IAi3.jpg",
    alts: {
      names: {
        "jp": "桜ノ宮 愛香"
      }
    },
    opts: {
      series: ["blends"],
      when: ["in"],
      status: ["recur"],
      rarity: ["sr"]
    }
  },
  //
  // Urara Meirochou
  //
  {
    name: "Chiya",
    img: "https://i.imgur.com/eBN4GyI.jpg",
    alts: {
      names: {
        "jp": "神崎 ひでり"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2017)",
            "jp": "クリスマス【2017】"
          },
          url: "https://i.imgur.com/QhuN35y.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/0VqLuSF.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/XPPfHyH.png"
        }
      ]
    },
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "ssr2", "christmas_2017"]
    }
  },
  {
    name: "Kon Tatsumi",
    img: "https://i.imgur.com/4F0PsCK.jpg",
    alts: {
      names: {
        "jp": "巽 紺"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/QhuN35y.png"
        }
      ]
    },
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018"]
    }
  },
  {
    name: "Koume Yukimi",
    img: "https://i.imgur.com/TFhcRab.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "valentines_2019"]
    }
  },
  {
    name: "Nono Natsume",
    img: "https://i.imgur.com/rVTC4z8.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Saku Iroi",
    img: "https://i.imgur.com/UfhhRxQ.jpg",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nina Natsume",
    img: "https://i.imgur.com/dv2qeIe.png",
    alts: {
      names: {
        "jp": "棗 ニナ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/QhuN35y.png"
        }
        */
      ]
    },
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Omi Nijou",
    img: "https://i.imgur.com/n05p8nc.png",
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["newyears_2020", "tanabata_2020"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Tsubaki Hanahara",
    img: "https://i.imgur.com/1SoP3Cd.png",
    alts: {
      names: {
        "jp": "花原 椿"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2018)",
            "jp": "水着【2018】"
          },
          url: "https://i.imgur.com/QhuN35y.png"
        }
        */
      ]
    },
    opts: {
      series: ["urara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  //
  // Yumekui Merry
  //
  {
    name: "Merry Nightmare",
    img: "https://i.imgur.com/bajvH05.jpg",
    alts: {
      names: {
        "jp:": "メリー・ナイトメア"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2018)",
            "jp": "クリスマス【2018】"
          },
          url: "https://i.imgur.com/hJFuykI.png"
        },
        {
          tooltip: {
            "en": "Valentines (2020)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/oyf6Wyh.png"
        },
        {
          tooltip: {
            "en": "Hello Kitty (Sanrio) (2020)",
            "jp": "ハローキティ【サンリオ】【2020】"
          },
          url: "https://i.imgur.com/2CS2pzr.png"
        },
        {
          tooltip: {
            "en": "2nd Wave",
            "jp": "2nd Wave"
          },
          url: "https://i.imgur.com/eRLcO29.png"
        },
      ]
    },
    opts: {
      series: ["merry"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2018", "valentines_2020", "sanrio_2020", "ssr2"]
    }
  },
  {
    name: "Isana Tachibana",
    img: "https://i.imgur.com/OviQSe8.png",
    opts: {
      series: ["merry"],
      when: ["in"],
      status: ["main"],
      rarity: ["dolls2018", "ssr"]
    }
  },
  {
    name: "Engi Threepiece",
    img: "https://i.imgur.com/CHoitej.png",
    opts: {
      series: ["merry"],
      when: ["in"],
      status: ["anta"],
      rarity: ["ssr", "sports_2020"]
    }
  },
  {
    name: "Kounagi Yui",
    img: "https://i.imgur.com/lufkQrG.png",
    alts: {
      names: {
        "jp:": "光凪 由衣"
      },
      imgs: []
    },
    opts: {
      series: ["merry"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  //
  // Slow Start
  //
  {
    name: "Hana Ichinose",
    img: "https://i.imgur.com/WpzwFZ5.jpg",
    alts: {
      names: {
        "jp": "一之瀬 花名"
      },
      imgs: [
        {
          tooltip: {
            "en": "Author Scenario",
            "jp": ""
          },
          url: "https://i.imgur.com/IXtsuj4.png"
        }
      ]
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "author"]
    }
  },
  {
    name: "Kamuri Sengoku",
    img: "https://i.imgur.com/znhDmEC.jpg",
    alts: {
      names: {
        "jp": "千石 冠"
      },
      imgs: [
        {
          tooltip: {
            "en": "My Melody (Sanrio) (2020)",
            "jp": "マイメロディ【サンリオ】【2020】"
          },
          url: "https://i.imgur.com/Me4AGkF.png"
        }
      ]
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sanrio_2020"]
    }
  },
  {
    name: "Eiko Tokura",
    img: "https://i.imgur.com/9bFctir.png",
    alts: {
      names: {
        "jp": "十倉 栄依子"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2019)",
            "jp": "運動会【2019】"
          },
          url: "https://i.imgur.com/X1SuE6k.png"
        }
      ]
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2018", "sports_2019"]
    }
  },
  {
    name: "Tamate Momochi",
    img: "https://i.imgur.com/nxNye7Z.jpg",
    tooltip: "........image change 11/10", // 百地 たまて
    alts: {
      names: {
        "jp": "百地 たまて"
      },
      imgs: [
        {
          tooltip: {
            "en": "Author Scenario",
            "jp": ""
          },
          url: "https://i.imgur.com/cgLFO5O.png"
        }
      ]
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "author"]
    }
  },
  { 
    name: "Kiyose Enami",
    img: "https://i.imgur.com/1n4pMDa.png",
    alts: {
      names: {
        "jp": "榎並 清瀬"
      },
      imgs: []
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["recur"],
      rarity: ["ssr", "author"]
    }
  },
  {
    name: "Shion Kyozuka",
    img: "https://i.imgur.com/ARrnWF5.png",
    tooltip: "Hinamatsuri (2020) / ひな祭り【2020】",
    alts: {
      names: {
        "jp": "京塚 志温"
      },
      imgs: []
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["hinamatsuri_2020"]
    }
  },
  {
    name: "Hiroe Hannen",
    img: "https://i.imgur.com/Up35pQR.png",
    alts: {
      names: {
        "jp": "万年 大会"
      },
      imgs: []
    },
    opts: {
      series: ["ss"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "newyears_2020"]
    }
  },
  //
  // Yurukyan (Yuru Camp)
  //
  {
    name: "Rin Shima",
    img: "https://i.imgur.com/5ErUzMs.jpg",
    opts: {
      series: ["yc"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Nadeshiko Kagamihara",
    img: "https://i.imgur.com/28EBbDO.png",
    alts: {
      names: {
        "jp": "各務原 なでしこ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Author Scenario",
            "jp": ""
          },
          img: "https://i.imgur.com/SEimiIt.png"
        },
        {
          tooltip: {
            "en": "Swimsuit / Summer (2018)",
            "jp": "水着【2018】"
          },
          img: "https://i.imgur.com/UZb5QTe.png"
        }
      ]
    },
    opts: {
      series: ["yc"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "author", "swimsuit_2018"]
    }
  },
  {
    name: "Chiaki Oogaki",
    img: "https://i.imgur.com/v1XxGKl.png",
    alts: {
      names: {
        "jp": "大垣 千明"
      },
      imgs: []
    },
    opts: {
      series: ["yc"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Aoi Inuyama",
    img: "https://i.imgur.com/Lax08Kt.png",
    opts: {
      series: ["yc"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Ena Saito",
    img: "https://i.imgur.com/WLp6ROw.png",
    alts: {
      names: {
        "jp": "斉藤 恵那"
      },
      imgs: [
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          img: "https://i.imgur.com/WLp6ROw.png"
        }
      ]
    },
    opts: {
      series: ["yc"],
      when: ["in"],
      status: ["main"],
      rarity: ["tanabata_2020"]
    }
  },
  {
    name: "Minami Toba",
    img: "https://i.imgur.com/mi7Tzxx.png?1",
    opts: {
      series: ["yc"],
      when: ["never"],
      status: ["recur"]
    }
  },
  //
  // Hanayamata
  //
  {
    name: "Naru Sekiya",
    img: "https://i.imgur.com/g4K4aip.jpg",
    opts: {
      series: ["hana"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hana N. Fountainstand",
    img: "https://i.imgur.com/fVpa7mX.png",
    opts: {
      series: ["hana"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit2019"]
    }
  },
  {
    name: "Yaya Sasame",
    img: "https://i.imgur.com/IdTayFK.jpg",
    opts: {
      series: ["hana"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Machi Tokiwa",
    img: "https://i.imgur.com/0xy1ybv.png",
    alts: {
      names: {
        "jp": "常盤 真智"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          img: "https://i.imgur.com/WLp6ROw.png"
        }
        */
      ]
    },
    opts: {
      series: ["hana"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Tami Nishimikado",
    img: "https://i.imgur.com/2edKFLm.png",
    alts: {
      names: {
        "jp": "西御門 多美"
      },
      imgs: []
    },
    opts: {
      series: ["hana"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Sari Tokiwa",
    img: "https://i.imgur.com/sloNQvt.png",
    opts: {
      series: ["hana"],
      when: ["never"],
      status: ["main"]
    }
  },
  //
  // Comiga (Comic Girls)
  //
  {
    name: "Kaoruko Moeta",
    img: "https://i.imgur.com/smulddG.jpg",
    alts: {
      names: {
        "jp": "萌田 薫子"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit / Summer (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/3BSdEF1.png"
        }
      ]
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Koyume Koizuka",
    img: "https://i.imgur.com/W6kShdP.png",
    alts: {
      names: {
        "jp": "恋塚 小夢"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit / Summer (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/PgSeuhI.png"
        }
      ]
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"]
    }
  },
  {
    name: "Ruki Irokawa",
    img: "https://i.imgur.com/UeTf0lY.png",
    alts: {
      names: {
        "jp": "色川 琉姫"
      }
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Miki Irokawa",
    img: "https://i.imgur.com/EbyHkzv.png",
    alts: {
      names: {
        "jp": "色川 美姫"
      }
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Tsubasa Katsuki",
    img: "https://i.imgur.com/M1w7I5W.png",
    alts: {
      names: {
        "jp": "勝木 翼"
      },
      imgs: [
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/M1w7I5W.png"
        }
      ]
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["tanabata_2020"]
    }
  },
  {
    name: "Fuura Suzu",
    img: "https://i.imgur.com/acPqk4y.png",
    alts: {
      names: {
        "jp": "怖浦 すず"
      }
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Miharu Nijino",
    img: "https://i.imgur.com/c2cx4eG.png",
    alts: {
      names: {
        "jp": "虹野 美晴"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/M1w7I5W.png"
        }
        */
      ]
    },
    opts: {
      series: ["comiga"],
      when: ["in"],
      status: ["recur"],
      rarity: ["ssr"]
    }
  },
  //
  // Harukana Recieve
  //
  {
    name: "Haruka Oozora",
    img: "https://i.imgur.com/GFnRZPv.jpg",
    // tooltip:  "or Ozora, but eh...\n" +
    //          "Source: Manga Cover",
    // img: "https://i.imgur.com/eNx3eMR.png",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Kanata Higa",
    img: "https://i.imgur.com/b9axaTc.png",
    // old img: "https://i.imgur.com/UfOyS1O.png",
    // tooltip: "Source: Manga Cover",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Emily Thomas",
    img: "https://i.imgur.com/yJX0mNF.png",
    alts: {
      names: {
        "jp": "トーマス・恵美理"
      },
      imgs: []
    },
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Claire Thomas",
    img: "https://i.imgur.com/lL5auyn.png",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"],
      rarity: ["halloween2019"]
    }
  },
  {
    name: "Akari Ooshiro",
    img: "https://i.imgur.com/wQLoE0x.png",
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Tooi Narumi",
    img: "https://i.imgur.com/u8zjiBo.png",
    alts: {
      names: {
        "jp": "遠井 成美"
      },
      imgs: []
    },
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Ayasa Tachibana",
    img: "https://i.imgur.com/ch9ufDp.png",
    alts: {
      names: {
        "jp": "立花 彩紗"
      },
      imgs: []
    },
    opts: {
      series: ["haruka"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  //
  // Gochuumon Usagi desu ka? (Is Your Order a Rabbit?)
  // Also named: GochiUsa, GU, Rabbits
  //
  {
    name: "Cocoa Hoto",
    img: "https://i.imgur.com/YyAvDhc.jpg",
    alts: {
      names: {
        "jp": "保登 心愛"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2019)",
            "jp": "クリスマス【2019】"
          },
          url: "https://i.imgur.com/uuE5p6a.png"
        },
        {
          tooltip: {
            "en": "Swimsuit / Summer (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/wSegq7l.png"
        }
      ]
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas2019", "swimsuit_2020"]
    }
  },
  {
    name: "Chino Kafuu",
    img: "https://i.imgur.com/3I8DXoi.jpg",
    alts: {
      names: {
        "jp": "香風 智乃"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/RIf8cuk.png"
        }
      ]
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Rize Tazeda",
    img: "https://i.imgur.com/3kCADfw.png",
    alts: {
      names: {
        "jp": "天々座 理世"
      },
      imgs: [
        {
          tooltip: {
            "en": "Halloween (2019)",
            "jp": "ハロウィン【2019】"
          },
          url: "https://i.imgur.com/Vqnr5K2.png"
        }
      ]
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "holloween2019"]
    }
  },
  {
    name: "Syaro Kirima",
    img: "https://i.imgur.com/Oz5QTtK.png",
    alts: {
      names: {
        "jp": "桐間 紗路"
      },
      imgs: [
        {
          tooltip: {
            "en": "Halloween (2020)",
            "jp": "ハロウィン【2029】"
          },
          url: "https://i.imgur.com/RB7go8y.png"
        }
      ]
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "halloween_2020"]
    }
  },
  {
    name: "Chiya Ujimatsu",
    img: "https://i.imgur.com/XtqXZqb.png",
    alts: {
      names: {
        "jp": "宇治松 千夜"
      },
      imgs: [
        {
          tooltip: {
            "en": "Christmas (2020)",
            "jp": "クリスマス【2020】"
          },
          url: "https://i.imgur.com/cwfbljJ.png"
        }
      ]
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "christmas_2020"]
    }
  },
  {
    name: "Maya Jouga",
    img: "https://i.imgur.com/aDEca0e.png",
    alts: {
      names: {
        "jp": "条河 麻耶"
      },
      imgs: []
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Megumi Natsu",
    img: "https://i.imgur.com/xWR4dhk.png",
    alts: {
      names: {
        "jp": "奈津 恵"
      },
      imgs: []
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Mocha Hoto",
    img: "https://i.imgur.com/haHiIHn.png",
    alts: {
      names: {
        "jp": "モカ"
      },
      imgs: []
    },
    opts: {
      series: ["rabbits"],
      when: ["in"],
      status: ["anta", "main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Midori Aoyama",
    img: "https://i.imgur.com/uG9Bo6P.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Rin Mate",
    img: "https://i.imgur.com/Q2vuEub.png",
    tooltip: "Source: Twitter / Official / April Fools",
    opts: {
      series: ["rabbits"],
      when: ["never"],
      status: ["side"]
    }
  },
  //
  // Anne Happy
  //
  {
    name: "Anne Hanakoizumi",
    img: "https://i.imgur.com/e7zWKrI.jpg",
    alts: {
      names: {
        "jp": "花小泉 杏"
      },
      imgs: [
        {
          tooltip: {
            "en": "Kuromi (Sanrio) (2020)",
            "jp": "クロミ【サンリオ】【2019】"
          },
          url: "https://i.imgur.com/7ZNe0wX.png"
        }
      ]
    },
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sanrio_2020"]
    }
  },
  {
    name: "Ruri Hibarigaoka",
    img: "https://i.imgur.com/8uWBUTi.jpg",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Botan Kumegawa",
    img: "https://i.imgur.com/Pb6PDiA.png",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hibiki Hagyu",
    tooltip: "Valentines (2020) | バレンタイン【2020】", 
    img: "https://i.imgur.com/JtflHt4.png",
    alts: {
      names: {
        "jp": "萩生 響"
      },
      imgs: []
    },
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["valentines_2020"]
    }
  },
  {
    name: "Ren Ekoda",
    img: "https://i.imgur.com/vWNzlXw.png",
    alts: {
      names: {
        "jp": "江古田 蓮"
      },
      imgs: []
    },
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "valentines_2020"]
    }
  },
  {
    name: "Kodaira",
    img: "https://i.imgur.com/JVukdFe.png?1",
    opts: {
      series: ["anhapi"],
      when: ["never"],
      status: ["anta", "main"]
    }
  },
  {
    name: "Tsubaki Sayama",
    img: "https://i.imgur.com/Qm5LxIH.png",
    alts: {
      names: {
        "jp": "有狭山 椿"
      },
      imgs: []
    },
    tooltip: "Ti Ti Timo Timo~",
    opts: {
      series: ["anhapi"],
      when: ["in"],
      status: ["main", "recur"],
      rarity: ["sr", "maid_2020"]
    }
  },
  //
  // Anima Yell
  // Also named: Chair
  //
  {
    name: "Kohane Hatoya",
    img: "https://i.imgur.com/2YTeSTh.jpg",
    tooltip: "chunchun",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hizume Arima",
    img: "https://i.imgur.com/5MwLKmb.png",
    alts: {
      names: {
        "jp": "有馬 ひづめ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/rALCocK.png"
        }
      ]
    },
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["maid_2020", "ssr"]
    }
  },
  {
    name: "Uki Sawatari",
    img: "https://i.imgur.com/55fyJW6.png",
    alts: {
      names: {
        "jp": "猿渡 宇希"
      },
      imgs: []
    },
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Kotetsu Tatejima",
    img: "https://i.imgur.com/wQWLONX.png",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["christmas2019"]
    }
  },
  {
    name: "Kana Ushiku",
    img: "https://i.imgur.com/eUCPVRo.jpg",
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Inaba Towa",
    img: "https://i.imgur.com/Dx53A9B.png",
    alts: {
      names: {
        "jp": "稲葉 兎和"
      },
      imgs: []
    },
    opts: {
      series: ["anima"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  //
  // Sansha Sanyou
  //
  {
    name: "Youko Nishikawa",
    img: "https://i.imgur.com/WD5pMpq.png",
    alts: {
      names: {
        "jp": "西川 葉子"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/Ae4Nn4f.png"
        }
        */
      ]
    },
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Futaba Odagiri",
    img: "https://i.imgur.com/rKIoqJU.png",
    alts: {
      names: {
        "jp": "小田切 双葉"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/rKIoqJU.png"
        }
      ]
    },
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit_2020"]
    }
  },
  {
    name: "Teru Hayama",
    img: "https://i.imgur.com/PFNPj5m.png",
    alts: {
      names: {
        "jp": "葉山 照"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/Ae4Nn4f.png"
        }
        */
      ]
    },
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Shino Sonobe",
    img: "https://i.imgur.com/y9aohZW.png",
    alts: {
      names: {
        "jp": "葉山 照"
      },
      imgs: [
        {
          tooltip: {
            "en": "Gudetama (Sanrio) (2019)",
            "jp": "ぐでたま【サンリオ】【2019】"
          },
          url: "https://i.imgur.com/y9aohZW.png"
        }
      ]
    },
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["sanrio_2020"]
    }
  },
  {
    name: "Kou Hayama",
    img: "https://i.imgur.com/xriY3Oy.png",
    alts: {
      names: {
        "jp": "葉山 光"
      },
      imgs: []
    },
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Serina Nishiyama",
    img: "https://i.imgur.com/DOK46GV.png",
    opts: {
      series: ["3leaves"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Sasame Tsuji",
    img: "https://i.imgur.com/FAZ7Io5.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur", "anta"]
    }
  },
  {
    name: "Sakura Usuda",
    img: "https://i.imgur.com/FDRkBzp.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Asako Kondou",
    img: "https://i.imgur.com/OncwN4F.png",
    opts: {
      series: ["3leaves"],
      when: ["never"],
      status: ["side"]
    }
  },
  //
  // GA: Geijutsuka Art Design Class
  //
  {
    name: "Kisaragi Yamaguchi",
    img: "https://i.imgur.com/C80CHAr.png",
    opts: {
      series: ["ga"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Miki Noda",
    img: "https://i.imgur.com/JCW5Kz7.png",
    alts: {
      names: {
        "jp": "野田 ミキ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Halloween (2020)",
            "jp": "ハロウィン【2020】"
          },
          url: "https://i.imgur.com/JCW5Kz7.png"
        }
      ]
    },
    opts: {
      series: ["ga"],
      when: ["in"],
      status: ["main"],
      rarity: ["halloween_2020"]
    }
  },
  {
    name: "Tomokane",
    img: "https://i.imgur.com/iqk7YQr.png",
    opts: {
      series: ["ga"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Namiko Nozaki",
    img: "https://i.imgur.com/UZugAYp.png",
    opts: {
      series: ["ga"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Miyabi Oomichi",
    img: "https://i.imgur.com/zmfsWF8.png",
    alts: {
      names: {
        "jp": "大道 雅"
      },
      imgs: [
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/yYZN5BG.png"
        },
      ]
    },
    opts: {
      series: ["ga"],
      when: ["in"],
      status: ["main"],
      rarity: ["tanabata_2020"]
    }
  },
  //
  // Hitsugi Katsugi no Kuro. ~Kaichuu Tabi no Wa~
  //
  {
    name: "Kuro",
    img: "https://i.imgur.com/N7ck18W.png",
    tooltip: "She appears in GA Anime btw.",
    opts: {
      series: ["kuro"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  //
  // Harumination
  //
  {
    name: "Harumi Hosono",
    img: "https://i.imgur.com/JByvFei.png",
    tooltip: "If you don't recognize her, that's because she's manga-only.",
    opts: {
      series: ["harumi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Kaju Sakamoto",
    img: "https://i.imgur.com/Hzh4kum.png",
    tooltip: "If you don't recognize her, that's because she's manga-only.",
    alts: {
      names: {
        "jp": "坂本 香樹"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/yYZN5BG.png"
        },
        */
      ]
    },
    opts: {
      series: ["harumi"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Yuki Takahashi",
    img: "https://i.imgur.com/XGw7z7l.png",
    tooltip: "If you don't recognize her, that's because she's manga-only.",
    alts: {
      names: {
        "jp": "高橋 ユキ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/yYZN5BG.png"
        },
        */
      ]
    },
    opts: {
      series: ["harumi"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  //
  // Kirara Fantasia! :LampYay:
  //
  {
    name: "Lamp",
    img: "https://i.imgur.com/0BJ26Ql.jpg",
    alts: {
      names: {
        "jp": "クレア"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2019)",
            "jp": "水着【2019】"
          },
          url: "https://i.imgur.com/Ae4Nn4f.png"
        },
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/Dwta296.png"
        },
        {
          tooltip: {
            "en": "Tanabata (2020)",
            "jp": "七夕【2020】"
          },
          url: "https://i.imgur.com/UxIv590.png"
        },
        {
          tooltip: {
            "en": "Cross Character",
            "jp": "クロスキャラ"
          },
          url: "https://i.imgur.com/SbrM02a.png"
        }
      ]
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit2019", "tanabata_2020", "cross_chara"]
    }
  },
  {
    name: "Archive",
    img: "https://i.imgur.com/IU2MrpS.png",
    alts: {
      names: {
        "jp": "アルシーヴ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Sugar",
    img: "https://i.imgur.com/1QAPzTv.png",
    alts: {
      names: {
        "jp": "シュガー"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Kanna",
    img: "https://i.imgur.com/ZnRo5B5.png",
    alts: {
      names: {
        "jp": "カンナ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Polka",
    img: "https://i.imgur.com/hBFEfcD.png",
    alts: {
      names: {
        "jp": "ポルカ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"]
    }
  },
  {
    name: "Cork",
    img: "https://i.imgur.com/cFV4ASj.png",
    alts: {
      names: {
        "jp": "コルク"
      },
      imgs: [
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/Dci3Jn2.png"
        }
      ]
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "maid_2020"]
    }
  },
  {
    name: "Ginger",
    img: "https://i.imgur.com/Z7iDU1N.png",
    alts: {
      names: {
        "jp": "ジンジャー"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Sesame",
    img: "https://i.imgur.com/2KQQO2n.png",
    alts: {
      names: {
        "jp": "セサミ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Claire",
    img: "https://i.imgur.com/10YH7RV.png",
    tooltip: "Hinamatsuri (2020) / ひな祭り【2020】",
    alts: {
      names: {
        "en": "Clea",
        "jp": "クレア"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"], // hell yeah
      status: ["main"],
      rarity: ["hinamatsuri_2020"] // or swimsuit2019
    }
  },
  {
    name: "Salt",
    img: "https://i.imgur.com/pdBcW6o.png",
    alts: {
      names: {
        "jp": "ソルト"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Kirara",
    tooltip: "Titular Character (Manga ver.)",
    img: "https://i.imgur.com/0HtE4Tw.png",
    alts: {
      names: {
        "jp": "きらら"
      },
      imgs: [
        {
          tooltip: {
            "en": "Manga",
            "jp": ""
          },
          url: "https://i.imgur.com/0HtE4Tw.png"
        },
        {
          tooltip: {
            "en": "Cross Character",
            "jp": "クロスキャラ"
          },
          url: "https://i.imgur.com/Rlazjl6.png"
        }
      ]      
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "cross_chara"]
    }
  },
  {
    name: "Leine",
    img: "https://i.imgur.com/ue7Yc6V.png",
    alts: {
      names: {
        "jp": "ライネ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Fennel",
    img: "https://i.imgur.com/dAR6MD1.png",
    alts: {
      names: {
        "jp": "ライネ"
      }
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Cardamom",
    img: "https://i.imgur.com/EjQYZaF.png",
    alts: {
      names: {
        "jp": "カルダモン"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/Dci3Jn2.png"
        }
        */
      ]
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hakka",
    img: "https://i.imgur.com/iYY7Ojz.png",
    alts: {
      names: {
        "jp": "ハッカ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Maid (2020)",
            "jp": "メイド【2020】"
          },
          url: "https://i.imgur.com/Dci3Jn2.png"
        }
        */
      ]
    },
    opts: {
      series: ["kirara"],
      when: ["in"],
      status: ["main", "anta"],
      rarity: ["ssr"]
    }
  },

  //
  // Machikado Mazoku
  //
  {
    name: "Yuuko Yoshida",
    img: "https://i.imgur.com/CWBWkvu.png",
    tooltip: "Shamiko",
    alts: {
      names: {
        "jp": "吉田 優子"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/X7J3UrT.png"
        }
      ]
    },
    opts: {
      series: ["machi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "sports_2020"]
    }
  },
  {
    name: "Momo Chiyoda",
    img: "https://i.imgur.com/gV6TtaV.png",
    tooltip: "Christmas (2019) / クリスマス【2019】",
    alts: {
      names: {
        "jp": "千代田 桃"
      }
    },
    opts: {
      series: ["machi"],
      when: ["in"],
      status: ["main"],
      rarity: ["christmas2019"]
    }
  },
  {
    name: "Shion Ogura",
    img: "https://i.imgur.com/pSFXbsY.png",
    alts: {
      names: {
        "jp": "小倉 しおん"
      }
    },
    opts: {
      series: ["machi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Anri Sata",
    img: "https://i.imgur.com/fVFsq0s.png",
    alts: {
      names: {
        "jp": "佐田 杏里"
      }
    },
    opts: {
      series: ["machi"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Ryouko Yoshida",
    img: "https://i.imgur.com/AQ7OHrx.png",
    alts: {
      names: {
        "jp": "吉田 良子"
      }
    },
    opts: {
      series: ["machi"],
      when: ["in"],
      status: ["main"],
      rarity: ["hinamatsuri_2020"]
    }
  },
  {
    name: "Lilith",
    img: "https://i.imgur.com/on1UFuw.png",
    alts: {
      names: {
        "jp": "リリス"
      },
      imgs: [
        {
          tooltip: {
            "en": "Arc 2",
            "jp": "第2部"
          },
          url: "https://i.imgur.com/on1UFuw.png"
        }
      ]
    },
    opts: {
      series: ["machi"],
      when: ["in"],
      status: ["main"],
      rarity: ["arc2"]
    }
  },
  {
    name: "Mikan Hinatsuki",
    img: "https://i.imgur.com/vQkCd8W.png",
    alts: {
      names: {
        "jp": "陽夏木 ミカン"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/vQkCd8W.png"
        }
      ]
    },
    opts: {
      series: ["machi"],
      when: ["in"],
      status: ["main"],
      rarity: ["swimsuit_2020"]
    }
  },
  //
  // Koisuru Asteroid
  //
  {
    name: "Mira Konohata",
    img: "https://i.imgur.com/ZwNFZeV.png",
    alts: {
      names: {
        "jp": "木ノ幡 みら"
      }
    },
    opts: {
      series: ["koias"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }  
  },
  {
    name: "Ao Manaka",
    img: "https://i.imgur.com/IOSS224.png",
    alts: {
      names: {
        "jp": "真中 あお"
      }
    },
    opts: {
      series: ["koias"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Inose Mai", // Ino
    img: "https://i.imgur.com/4kdUAzu.png",
    alts: {
      names: {
        "jp": "猪瀬 舞"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/vQkCd8W.png"
        }
        */
      ]
    },
    opts: {
      series: ["koias"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr", "halloween_2020"]
    }
  },
  /// OTHER GAME SERIES GO HERE
  //
  /// END OF GAME SERIES
  //
  /// START OF NON-GAME SERIES
  //
  // Wakaba Girl
  //
  {
    name: "Wakaba Kohashi",
    img: "https://i.imgur.com/dYUP68u.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Nao Mashiba",
    img: "https://i.imgur.com/84Vxxlr.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Moeko Tokita",
    img: "https://i.imgur.com/qL4n1gx.png",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  {
    name: "Mao Kurokawa",
    img: "https://i.imgur.com/0NDEPes.jpg",
    tooltip: "Source: Magazine Scan",
    opts: {
      series: ["wakaba"],
      when: ["never"],
      status: ["main"]
    }
  },
  //
  // K-ON!
  //
  {
    name: "Yui Hirasawa",
    img: "https://i.imgur.com/T9XI82C.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Ritsu Tainaka",
    img: "https://i.imgur.com/rqzGnvT.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Mio Akiyama",
    img: "https://i.imgur.com/NuNhFB5.png",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr", "valentines2019"]
    }
  },
  {
    name: "Tsumugi Kotobuki",
    img: "https://i.imgur.com/lpIbi33.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Azusa Nakano",
    img: "https://i.imgur.com/gDMySi6.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["main"]
    }
  },
  {
    name: "Ui Hirasawa",
    img: "https://i.imgur.com/XiKaKbw.jpg",
    opts: {
      series: ["htt"],
      when: ["in"],
      status: ["recur", "main"]
    }
  },
  {
    name: "Sawako Yamanaka",
    img: "https://i.imgur.com/uahNEif.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Nodoka Manabe",
    img: "https://i.imgur.com/5hPydoW.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur"]
    }
  },
  {
    name: "Jun Suzuki",
    img: "https://i.imgur.com/45kkift.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["recur", "main"]
    }
  },
  {
    name: "Megumi Sokabe",
    img: "https://i.imgur.com/0LREy3t.jpg?1",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["side"]
    }
  },
  // 2011 High School Arc
  {
    name: "Nao Okuda",
    img: "https://i.imgur.com/Qb60op5.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  {
    name: "Sumire Saitou",
    img: "https://i.imgur.com/w4sIeFG.png",
    opts: {
      series: ["htt"],
      when: ["never"],
      status: ["main"],
      nonanimu: true
    }
  },
  // TODO: Currently Missing: College Arc mains

  //
  // Koufuku Graffiti
  //
  {
    name: "Ryou Machiko",
    img: "https://i.imgur.com/ZFsOeKE.png",
    alts: {
      names: {
        "jp": "町子 リョウ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Swimsuit (2020)",
            "jp": "水着【2020】"
          },
          url: "https://i.imgur.com/SNA5mog.png"
        }
      ]
    },
    opts: {
      series: ["foodgasm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr", "swimsuit_2020"]
    }
  },
  {
    name: "Kirin Morino",
    img: "https://i.imgur.com/tc9oG54.png",
    alts: {
      names: {
        "jp": "森野 きりん"
      },
      imgs: [
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/tc9oG54.png"
        }
      ]
    },
    opts: {
      series: ["foodgasm"],
      when: ["in"],
      status: ["main"],
      rarity: ["sports_2020"]
    }
  },
  {
    name: "Shiina",
    img: "https://i.imgur.com/FmebKkl.png",
    alts: {
      names: {
        "jp": "椎名"
      }
    },
    opts: {
      series: ["foodgasm"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Yuki Uchiki",
    img: "https://i.imgur.com/6jpn0Fj.png",
    alts: {
      names: {
        "jp": "内木 ユキ"
      },
      imgs: []
    },
    opts: {
      series: ["foodgasm"],
      when: ["in"],
      status: ["recur"],
      rarity: ["ssr"]
    }
  },
  //
  // Acchi Kocchi
  //
  {
    name: "Tsumiki Miniwa",
    img: "https://i.imgur.com/eUac8GE.png",
    alts: {
      names: {
        "jp": "御庭 つみき"
      }
    },
    opts: {
      series: ["acchi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Mayoi Katase",
    img: "https://i.imgur.com/9Z9CQK8.png",
    alts: {
      names: {
        "jp": "片瀬 真宵"
      }
    },
    opts: {
      series: ["acchi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Hime Haruno",
    img: "https://i.imgur.com/59rAFUD.png",
    alts: {
      names: {
        "jp": "春野 姫"
      }
    },
    opts: {
      series: ["acchi"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  //
  // Tamayomi
  //
  {
    name: "Takeda Yomi",
    img: "https://i.imgur.com/aUbKKm8.png",
    opts: {
      series: ["tamayomi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Yamazaki Tamaki",
    img: "https://i.imgur.com/jOckdfW.png",
    alts: {
      names: {
        "jp": "山崎 珠姫"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/tc9oG54.png"
        }
        */
      ]
    },
    opts: {
      series: ["tamayomi"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Yoshino Kawaguchi",
    img: "https://i.imgur.com/5yfORfi.png",
    alts: {
      names: {
        "jp": "川口 芳乃"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/tc9oG54.png"
        }
        */
      ]
    },
    opts: {
      series: ["tamayomi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Nozomi Nakamura",
    img: "https://i.imgur.com/Fpkx86t.png",
    alts: {
      names: {
        "jp": "中村 希"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Sports Festival (2020)",
            "jp": "運動会【2020】"
          },
          url: "https://i.imgur.com/tc9oG54.png"
        }
        */
      ]
    },
    opts: {
      series: ["tamayomi"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  //
  // Dropout Idol Fruit Tart
  //
  {
    name: "Sakura Ino",
    img: "https://i.imgur.com/7tUHahw.png",
    alts: {
      names: {
        "jp": "桜 衣乃"
      },
      imgs: []
    },
    opts: {
      series: ["fruit_tart"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  {
    name: "Sekino Roko",
    img: "https://i.imgur.com/c9oTI6p.png",
    alts: {
      names: {
        "jp": "関野 ロコ"
      },
      imgs: [
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
      ]
    },
    opts: {
      series: ["fruit_tart"],
      when: ["in"],
      status: ["main"],
      rarity: ["valentines_2022"]
    }
  },
  {
    name: "Nukui Hayu",
    img: "https://i.imgur.com/rj2Jpcm.png",
    alts: {
      names: {
        "jp": "貫井 はゆ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["fruit_tart"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"]
    }
  },
  {
    name: "Hemo Midori",
    img: "https://i.imgur.com/UQtkB8u.png",
    alts: {
      names: {
        "jp": "緑 へも"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["fruit_tart"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"]
    }
  },
  //
  // Power of Smile.
  //
  {
    name: "Shinohana Mayu",
    img: "https://i.imgur.com/g5Jneic.png",
    alts: {
      names: {
        "jp": "貫井 はゆ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["pos"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Kodou Tamaki",
    img: "https://i.imgur.com/9BChjn6.png",
    alts: {
      names: {
        "jp": "虎道 環"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["pos"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Miku Souenji",
    img: "https://i.imgur.com/TZMWo29.png",
    alts: {
      names: {
        "jp": "叢園寺 観久"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["pos"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  //
  // Kohaku Biyori
  //
  {
    name: "Onosaka Koharu",
    img: "https://i.imgur.com/R51U3Ri.png",
    alts: {
      names: {
        "jp": "小野坂 こはる"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["koharu"],
      when: ["in"],
      status: ["main"],
      rarity: ["ssr"],
      nonanimu: true,
      manga_exclusive: true
    }
  }, 
  {
    name: "Nina Tachibana",
    img: "https://i.imgur.com/4lC6gtP.png",
    alts: {
      names: {
        "jp": "橘 ニナ"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["koharu"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  }, 
  {
    name: "Misaki Kitazawa",
    img: "https://i.imgur.com/cOTjWKm.png",
    alts: {
      names: {
        "jp": "北沢 みさき"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["koharu"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },
  {
    name: "Himari Makinose",
    img: "https://i.imgur.com/5HPHHzM.png",
    alts: {
      names: {
        "jp": "牧之瀬 ひまり"
      },
      imgs: [
        /*
        {
          tooltip: {
            "en": "Valentines (2022)",
            "jp": "バレンタイン【2020】"
          },
          url: "https://i.imgur.com/c9oTI6p.png"
        }
        */
      ]
    },
    opts: {
      series: ["koharu"],
      when: ["in"],
      status: ["main"],
      rarity: ["sr"],
      nonanimu: true,
      manga_exclusive: true
    }
  },  
  //
  // END
  //
]
