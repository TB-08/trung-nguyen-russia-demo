(function () {
  "use strict";

  var newsPosts = [
    {
      id: 1,
      slug: "ca-phe-viet-nam-va-co-hoi-tai-thi-truong-nga",
      title: "Вьетнамский кофе и возможности на российском рынке",
      category: "thi-truong",
      categoryLabel: "Международные рынки",
      excerpt: "Насыщенный вкус робусты и история происхождения создают уникальную основу для вьетнамского бренда.",
      image: "assets/images/sp5.jpg",
      date: "18.05.2026",
      content: [
        { heading: "Уникальный и самобытный опыт", paragraphs: ["Международный кофейный рынок всё больше внимания уделяет происхождению, ритуалам потребления и истории каждого продукта. Вьетнамский кофе имеет очевидное преимущество благодаря крепкой робусте, которая идеально подходит потребителям, ищущим насыщенное тело напитка и пробуждающий эффект.", "Trung Nguyen Legend отвечает на этот запрос широким ассортиментом: удобные форматы для розницы, зерновой и молотый кофе для ценителей вкуса и премиальные коллекции для подарков."] },
        { heading: "От узнаваемости к покупке", paragraphs: ["Для устойчивого развития бренда история должна подкрепляться доступностью. Чёткая структура точек продаж по городам, поддержка дистрибьюторов и обучающие материалы по приготовлению помогут новым потребителям сделать уверенный выбор.", "Эта демо-версия моделирует данный путь: знакомство с наследием, выбор продукта и поиск точек продаж в ключевых городах России."] }
      ]
    },
    {
      id: 2,
      slug: "g7-lua-chon-tien-loi-cho-nhip-song-hien-dai",
      title: "G7 — удобный выбор для современного ритма жизни",
      category: "san-pham",
      categoryLabel: "Продукты",
      excerpt: "От офиса до путешествий — чашку крепкого ароматного кофе можно приготовить за считанные секунды.",
      image: "assets/images/sp2.png",
      date: "10.05.2026",
      content: [
        { heading: "Удобство без компромиссов для вкуса", paragraphs: ["Растворимый кофе — это не просто скорость приготовления. Линейка G7 предлагает выразительный обжаренный аромат, сбалансированное тело и множество вариантов: от кофе с молоком до классического чёрного.", "Линейка G7 идеально подходит для розничных полок, офисных кухонь и потребителей, желающих легко приготовить чашку вьетнамского кофе."] },
        { heading: "Гибкий ассортимент", paragraphs: ["Классический G7 3 в 1 прост и понятен, чёрный G7 создан для любителей чистого вкуса, а G7 Strong (G7 Strong x2) станет фаворитом для ценителей высокой крепости. Чёткая сегментация помогает партнёрам подобрать продукт под конкрещий запрос."] }
      ]
    },
    {
      id: 3,
      slug: "robusta-viet-nam-huong-vi-manh-me-khac-biet",
      title: "Вьетнамская робуста: уникальный крепкий вкус",
      category: "van-hoa",
      categoryLabel: "Кофейная культура",
      excerpt: "Плотное тело, выраженная крепость и глубокое послевкусие — визитная карточка вьетнамского кофе Robusta.",
      image: "assets/images/sp4.png",
      date: "29.04.2026",
      content: [
        { heading: "Родина крепкого вкуса", paragraphs: ["Буон-Ма-Тхуот знаменит как важнейший регион произрастания вьетнамского кофе. Природные условия и традиции обработки позволяют получать робусту с плотным телом, ярким обжаренным ароматом и выраженным энергетическим эффектом.", "Это уникальное отличие можно передать международным потребителям через традиционный ритуал заваривания в фине, молотый кофе или удобные современные форматы."] },
        { heading: "Способы приготовления", paragraphs: ["Любители крепкого кофе могут выбрать чёрный растворимый или молотый кофе для заваривания в фине. Для новичков сбалансированные продукты станут отличным стартом перед переходом к более интенсивным вкусам."] }
      ]
    },
    {
      id: 4,
      slug: "legend-collection-va-tinh-than-qua-tang-cao-cap",
      title: "Коллекция Trung Nguyen Legend и искусство премиальных подарков",
      category: "san-pham",
      categoryLabel: "Продукты",
      excerpt: "Кофейный подарок, несущий в себе образ Вьетнама, глубокое уважение и изысканный вкус.",
      image: "assets/images/cozy-coffee-couple.png",
      date: "16.04.2026",
      content: [
        { heading: "Подарки с историей", paragraphs: ["В корпоративной и дипломатической среде подарки с историей и самобытным характером всегда производят более глубокое впечатление. Коллекция Legend создана, чтобы рассказать историю вьетнамского кофе через изысканную форму и глубокий вкус.", "Этот ассортимент идеально подходит для подарочных магазинов, премиальных каналов продаж и программ лояльности для ключевых партнёров."] },
        { heading: "Презентация на полке", paragraphs: ["В точках продаж выкладку следует сопровождать информацией о происхождении, вкусовом профиле и ритуалах приготовления. Это превращает коробку кофе в приглашение к исследованию культуры."] }
      ]
    },
    {
      id: 5,
      slug: "cau-chuyen-ca-phe-viet",
      title: "История Буон-Ма-Тхуота в чашке энергетического кофе",
      category: "van-hoa",
      categoryLabel: "Кофейная культура",
      excerpt: "Уникальные истоки региона, зёрна робусты и капельный ритуал создают удивительно глубокий вкус.",
      image: "assets/images/hero-bg.png",
      date: "02.04.2026",
      content: [
        { heading: "Где начинается путь", paragraphs: ["Буон-Ма-Тхуот — это не просто географическое название источника сырья; это память о кофейных плантациях, ритме обжарки и гордости вьетнамского кофе. Каждый способ заваривания — это возможность приблизить историю к ценителю вкуса.", "При правильном позиционировании происхождение создаёт эмоциональную связь и выделяет продукт на международных полках."] },
        { heading: "Энергия ритуала", paragraphs: ["Чашка кофе может стать моментом концентрации, беседы или зарождения новой идеи. Философия энергетического кофе находит практическое воплощение в стабильном качестве вкуса, культуре подачи и последовательном позиционировании бренда."] }
      ]
    },
    {
      id: 6,
      slug: "vi-sao-kenh-phan-phoi-quoc-te-can-brand-story-manh",
      title: "Почему международным дистрибуторам нужна сильная история бренда?",
      category: "thuong-hieu",
      categoryLabel: "Бренд",
      excerpt: "Хороший ассортимент должен подкрепляться чёткими аргументами для покупателей и партнёров.",
      image: "assets/images/trung-nguyen-coffee-hero.png",
      date: "25.03.2026",
      content: [
        { heading: "Больше, чем просто упаковка на полке", paragraphs: ["Партнёрам по дистрибуции нужны продукты, способные формировать спрос, а не просто заполнять полки. Бренд, неразрывно связанный с наследием Вьетнама, крепким вкусом робусты и богатой палитрой вкусов, имеет прочную основу для коммуникации с клиентами.", "История бренда помогает в обучении продавцов, создании маркетингового контента и оформлении витрин в точках продаж."] },
        { heading: "Основа для партнерства", paragraphs: ["Когда каталог продукции, рекламные материалы и каналы коммуникации для B2B чётко структурированы, партнёрам легче оценить возможности и запустить пилотные проекты. Это необходимый фундамент для масштабирования на новых рынках."] }
      ]
    }
  ];

  function bySlug(slug) {
    return newsPosts.find(function (post) { return post.slug === slug; });
  }

  function newsCard(post, index) {
    var featuredClass = (index === 0) ? ' is-featured' : '';
    return '<article class="news-card' + featuredClass + '">' +
      '<a class="news-card__image" href="news-detail.html?slug=' + post.slug + '">' +
        '<img src="' + post.image + '" alt="Иллюстрация к статье ' + post.title + '">' +
      '</a>' +
      '<div class="news-card__content">' +
        '<span class="product-category">' + post.categoryLabel + '</span>' +
        '<h3><a href="news-detail.html?slug=' + post.slug + '">' + post.title + '</a></h3>' +
        '<p>' + post.excerpt + '</p>' +
        '<time datetime="' + post.date.split(".").reverse().join("-") + '">' + post.date + '</time>' +
        '<a class="text-link" href="news-detail.html?slug=' + post.slug + '">Читать далее</a>' +
      '</div>' +
    '</article>';
  }

  function initGrid() {
    var grid = document.querySelector("[data-news-grid]");
    if (!grid) return;
    function render(category) {
      var filtered = category === "all" ? newsPosts : newsPosts.filter(function (post) { return post.category === category; });
      grid.innerHTML = filtered.map(function(post, idx) { return newsCard(post, idx); }).join("");
      document.querySelectorAll("[data-news-category]").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item.dataset.newsCategory === category));
      });
    }
    document.querySelectorAll("[data-news-category]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        document.querySelectorAll("[data-news-category]").forEach(function (item) {
          item.classList.toggle("is-active", item === chip);
        });
        render(chip.dataset.newsCategory);
      });
    });
    render("all");
  }

  function initPreview() {
    var grid = document.querySelector("[data-news-preview]");
    if (!grid) return;
    grid.innerHTML = newsPosts.slice(0, 3).map(function(post, idx) { return newsCard(post, idx); }).join("");
  }

  function articleContent(post) {
    return post.content.map(function (section, index) {
      var quote = index === 0 ? '<blockquote class="editorial-quote">Вьетнамский кофе несет в себе глубокий вкус и историю, которая заслуживает того, чтобы ее запомнили.</blockquote>' : "";
      return '<h2>' + section.heading + '</h2>' +
        section.paragraphs.map(function (paragraph, pIndex) { 
          var dropcap = (index === 0 && pIndex === 0) ? ' class="article-dropcap"' : '';
          return '<p' + dropcap + '>' + paragraph + '</p>'; 
        }).join("") + quote;
    }).join("");
  }

  function initDetail() {
    var root = document.querySelector("[data-news-detail]");
    if (!root) return;
    var slug = new URLSearchParams(window.location.search).get("slug") || "";
    var post = bySlug(slug);
    if (!post) {
      root.innerHTML = '<section class="section"><div class="container"><div class="empty-state is-visible"><span class="eyebrow">Новости</span><h1>Статья не найдена</h1><p>Эта статья не найдена в демо-версии.</p><div class="button-row" style="justify-content:center;margin-top:25px"><a class="btn btn--primary" href="news.html">Назад к новостям</a></div></div></div></section>';
      return;
    }
    var related = newsPosts.filter(function (item) { return item.slug !== post.slug; }).slice(0, 2);
    document.title = post.title + " | Trung Nguyen Legend";
    root.innerHTML =
      '<section class="article-hero">' +
        '<img class="article-hero__bg" src="' + post.image + '" alt="">' +
        '<div class="container">' +
          '<nav aria-label="Навигация по сайту"><ol class="breadcrumb"><li><a href="index.html">Главная</a></li><li><a href="news.html">Новости</a></li><li>' + post.categoryLabel + '</li></ol></nav>' +
          '<div class="article-heading"><span class="product-category" style="color:var(--color-red)">' + post.categoryLabel + '</span><h1>' + post.title + '</h1><div class="article-meta"><time>' + post.date + '</time><span>·</span><span>Trung Nguyen Legend</span></div><p class="lead">' + post.excerpt + '</p></div>' +
        '</div>' +
      '</section>' +
      '<section class="section"><div class="container article-layout">' +
        '<article class="article-content">' +
          articleContent(post) +
          '<div class="button-row" style="margin-top:38px"><a class="btn btn--primary" href="products.html">Смотреть продукты</a><a class="btn btn--outline" href="coffee-story.html">Читать историю кофе</a></div>' +
        '</article>' +
        '<aside class="article-aside"><div class="surface"><h3 style="margin-bottom:18px">Похожие статьи</h3>' + related.map(function (item) { return '<div style="margin-bottom:18px"><span class="product-category">' + item.categoryLabel + '</span><p style="margin-top:6px"><a href="news-detail.html?slug=' + item.slug + '"><strong>' + item.title + '</strong></a></p></div>'; }).join("") + '</div></aside>' +
      '</div></section>';
  }

  window.TNLNewsPosts = newsPosts;
  initGrid();
  initPreview();
  initDetail();
})();