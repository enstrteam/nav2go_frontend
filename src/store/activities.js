import { ref } from "vue";
import { defineStore } from "pinia";

export const useActivitiesStore = defineStore("activities", () => {
  const activities = ref([
    {
      id: 1,
      sellerId: 101,
      images: [
        "/images/waterfall1.webp",
        "/images/waterfall2.jpg",
        "/images/waterfall3.webp",
        "/images/waterfall4.webp",
        "/images/waterfall5.webp",
        "/images/waterfall6.webp",
      ],
      title: "Камышлинский водопад",
      rating: "4.8",
      ageLimit: "8+",
      address: "пос. Барнангол, ул. Чуйская 2",
      distance: "51 км от аэропорта",
      category: "Природа",
      difficulty: "Легкая",
      duration: "2-3 часа",
      price: "500 ₽",
      shortDescription:
        "Камышлинский водопад — один из самых красивых водопадов на Алтае, окруженный живописной природой.",
      fullDescription:
        "Посетите Камышлинский водопад — жемчужину Алтая! Здесь вас ждут потрясающие виды, свежий воздух и возможность сделать великолепные снимки. Удобные тропы позволяют легко добраться до водопада, а вблизи расположены уютные места для пикников. Отличный вариант для семейного отдыха или романтической прогулки.",
      reviews: [
        { user: "Анна", rating: 5, comment: "Очень красиво, рекомендую!", date: "11.06.2024" },
        { user: "Игорь", rating: 4, comment: "Много туристов, но место потрясающее!", date: "12.06.2024" },
      ],
      coordinates: [51.669579, 85.756388],
    },
    {
      id: 2,
      sellerId: 102,
      images: [
        "/images/rafting1.webp",
        "/images/rafting2.webp",
        "/images/rafting3.jpg",
        "/images/rafting4.webp",
        "/images/rafting5.webp",
      ],
      title: "Гора Белуха",
      rating: "4.9",
      ageLimit: "12+",
      address: "Алтайский край, Усть-Коксинский район",
      distance: "120 км от аэропорта",
      category: "Экстрим",
      difficulty: "Высокая",
      duration: "5-7 дней",
      price: "15 000 ₽",
      shortDescription:
        "Гора Белуха — высочайшая вершина Сибири, привлекающая альпинистов и туристов со всего мира.",
      fullDescription:
        "Белуха — вызов для настоящих искателей приключений! Это место с мощной энергетикой и невероятными видами на ледники и горные пики. Тур включает восхождение с опытными гидами, ночевки в палатках и незабываемые эмоции. Готовы покорить вершину?",
      reviews: [
        { user: "Мария", rating: 5, comment: "Невероятные пейзажи, сложно, но оно того стоит!", date: "10.10.2024" },
        { user: "Алексей", rating: 5, comment: "Отличная организация, море впечатлений!", date: "15.10.2024" },
      ],
      coordinates: [49.808494, 86.589398],
    },
    {
      id: 3,
      sellerId: 103,
      images: [
        "/images/waterfall1.webp",
        "/images/waterfall2.jpg",
        "/images/waterfall3.webp",
        "/images/waterfall4.webp",
        "/images/waterfall5.webp",
        "/images/waterfall6.webp",
      ],
      title: "Озеро Ая",
      rating: "4.7",
      ageLimit: "6+",
      address: "Алтайский край, Майминский район",
      distance: "30 км от аэропорта",
      category: "Релакс",
      difficulty: "Легкая",
      duration: "1 день",
      price: "800 ₽",
      shortDescription:
        "Озеро Ая — живописное место для отдыха с чистой водой и зелеными холмами вокруг.",
      fullDescription:
        "Идеальное место для тех, кто хочет отдохнуть от городской суеты. Здесь можно искупаться в прозрачной воде, прогуляться по живописным тропам или просто насладиться природой в окружении тишины. Отлично подходит для семейного отдыха!",
      reviews: [
        { user: "Елена", rating: 5, comment: "Очень спокойное и уютное место!", date: "01.01.2024" },
        { user: "Дмитрий", rating: 4, comment: "Природа великолепна, но в сезон много людей.", date: "01.01.2024" },
      ],
      coordinates: [69.180530, 100.619037],
    },
      {
        id: 4,
        sellerId: 104,
        images: [
          "/images/waterfall1.webp",
          "/images/waterfall2.jpg",
          "/images/waterfall3.webp",
          "/images/waterfall4.webp",
          "/images/waterfall5.webp",
          "/images/waterfall6.webp",
        ],
        title: "Телецкое озеро",
        rating: "4.9",
        ageLimit: "6+",
        address: "Алтай, Телецкое озеро, пос. Артыбаш",
        distance: "100 км от аэропорта",
        category: "Природа",
        difficulty: "Легкая",
        duration: "1-2 дня",
        price: "1 500 ₽",
        shortDescription:
          "Телецкое озеро — одно из самых живописных и глубоких озёр Алтая, окруженное горами и лесами.",
        fullDescription:
          "Телецкое озеро — это место, где можно насладиться кристально чистой водой, живописными видами и спокойной атмосферой. Здесь доступны прогулки на катерах, рыбалка и пешие походы по горным тропам. Идеальный выбор для отдыха на природе!",
        reviews: [
          { user: "Сергей", rating: 5, comment: "Лучшее место для отдыха на Алтае!", date: "01.01.2024" },
          { user: "Ольга", rating: 4, comment: "Очень красиво, но прохладная вода.", date: "01.01.2024" },
        ],
        coordinates: [51.588664, 87.665582],
      },
      {
        id: 5,
        sellerId: 105,
        images: [
          "/images/rafting1.webp",
          "/images/rafting2.webp",
          "/images/rafting3.jpg",
          "/images/rafting4.webp",
          "/images/rafting5.webp",
        ],
        title: "Чуйский тракт",
        rating: "4.8",
        ageLimit: "10+",
        address: "Алтай, Чуйский тракт",
        distance: "250 км от аэропорта",
        category: "Логистика",
        difficulty: "Средняя",
        duration: "3-5 дней",
        price: "10 000 ₽",
        shortDescription:
          "Чуйский тракт — легендарный горный маршрут с потрясающими пейзажами и богатой историей.",
        fullDescription:
          "Пройдите по следам древних караванов по знаменитому Чуйскому тракту! Этот маршрут соединяет Россию и Монголию, проходя через удивительные горные ландшафты. Вас ждут головокружительные серпантины, старинные достопримечательности и возможность открыть для себя дух Алтая.",
        reviews: [
          { user: "Владимир", rating: 5, comment: "Нереально красивые виды, дорога в сказку!", date: "01.01.2024" },
          { user: "Анастасия", rating: 4, comment: "Интересно, но местами сложные участки дороги.", date: "01.01.2024" },
        ],
        coordinates: [52.143639, 85.924046],
      },
      {
        id: 6,
        sellerId: 106,
        images: [
          "/images/waterfall1.webp",
          "/images/waterfall2.jpg",
          "/images/waterfall3.webp",
          "/images/waterfall4.webp",
          "/images/waterfall5.webp",
          "/images/waterfall6.webp",
        ],
        title: "Шавлинские озёра",
        rating: "4.8",
        ageLimit: "10+",
        address: "Алтай, Шавлинские озёра, Мультинский район",
        distance: "150 км от аэропорта",
        category: "Природа",
        difficulty: "Средняя",
        duration: "4-6 дней",
        price: "12 000 ₽",
        shortDescription:
          "Шавлинские озёра — кристально чистая вода среди горных вершин, место для уединения с природой.",
        fullDescription:
          "Путешествие к Шавлинским озёрам — это настоящий поход в сердце Алтая! Треккинг по живописным долинам приведет вас к потрясающим озёрам, отражающим величественные снежные вершины. Здесь можно разбить лагерь, насладиться рыбалкой и отдохнуть вдали от цивилизации.",
        reviews: [
          { user: "Константин", rating: 5, comment: "Это место просто волшебное!", date: "01.01.2024" },
          { user: "Екатерина", rating: 5, comment: "Лучшее приключение в жизни!", date: "01.01.2024" },
        ],
        coordinates: [50.103739, 87.426864],
      }
    ])
      

  const likedActivities = ref([]);
  const dislikedActivities = ref([]);

  function addLikedActivity(activity) {
    if (!likedActivities.value.some((item) => item.id === activity.id)) {
      likedActivities.value.push(activity); 
    }
  }

  function addDislikedActivity(activity) {
    if (!dislikedActivities.value.some((item) => item.id === activity.id)) {
      dislikedActivities.value.push(activity);
    }
  }

  function removeActivityFromLiked(id) {
    likedActivities.value = likedActivities.value.filter((item) => item.id !== id);
  }

  function removeActivityFromDisliked(id) {
    dislikedActivities.value = dislikedActivities.value.filter((item) => item.id !== id);
  }

  return {
    activities,
    likedActivities,
    dislikedActivities,
    addLikedActivity,
    addDislikedActivity,
    removeActivityFromLiked,
    removeActivityFromDisliked,
  };
});
