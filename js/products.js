(function () {
  "use strict";

  var products = [
    {
      id: 1,
      slug: "g7-3in1",
      name: "G7 3 в 1",
      category: "g7",
      categoryLabel: "Растворимый кофе G7",
      image: "ảnh footage/ảnh sp (1).png",
      shortDescription: "Сбалансированный крепкий вкус кофе, нежные сливки и умеренная сладость для современного ритма жизни.",
      longDescription: "G7 3 в 1 воплощает дух вьетнамского кофе в удобном формате: глубокий аромат, насыщенный вкус и простота приготовления в офисе, дома или в дороге.",
      flavorNotes: ["Крепкая обжарка", "Нежные сливки", "Гармоничное послевкусие"],
      intensity: "3/5 — Сбалансированный",
      format: "Порционный растворимый пакетик",
      suitableFor: ["Для тех, кому нужно быстро приготовить кофе утром", "Для офисов и кофе-поинтов", "Для тех, кто только начинает открывать вьетнамский кофе"],
      needs: ["de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Высыпьте один пакетик в чашку.", "Добавьте 75 ml горячей воды (около 80-90°C).", "Хорошо перемешайте и наслаждайтесь теплым напитком."],
      details: { "Линейка продукции": "Растворимый G7", "Стиль": "Кофе с молоком", "Формат демо": "Коробка с саше", "Каналы продаж": "Супермаркеты, магазины у дома, офисы" },
      relatedProductSlugs: ["g7-gu-manh-x2", "g7-2in1", "legend-cappuccino"]
    },
    {
      id: 2,
      slug: "g7-2in1",
      name: "G7 2 в 1",
      category: "g7",
      categoryLabel: "Растворимый кофе G7",
      image: "ảnh footage/ảnh sp (2).png",
      shortDescription: "Кофе и сахар с более выраженной крепостью для тех, кто предпочитает кофе без добавления сливок.",
      longDescription: "Простой выбор, чтобы прочувствовать всю силу вьетнамского растворимого кофе с умеренной сладостью и чётким вкусовым профилем.",
      flavorNotes: ["Темная обжарка", "Легкая сладость", "Чистый вкус"],
      intensity: "4/5 — Крепкий",
      format: "Порционный растворимый пакетик",
      suitableFor: ["Любители чистого кофейного вкуса", "Для рабочего стола", "Для коротких поездок"],
      needs: ["ca-phe-manh", "de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Раскройте пакетик и высыпьте в чашку.", "Добавьте 70 ml горячей воды.", "Тщательно перемешайте для раскрытия аромата обжарки."],
      details: { "Линейка продукции": "Растворимый G7", "Стиль": "Кофе с сахаром", "Формат демо": "Коробка с саше", "Каналы продаж": "Розничная торговля и офисы" },
      relatedProductSlugs: ["g7-den", "g7-3in1", "g7-gu-manh-x2"]
    },
    {
      id: 3,
      slug: "g7-den",
      name: "G7 Черный",
      category: "g7",
      categoryLabel: "Растворимый кофе G7",
      image: "ảnh footage/ảnh sp (3).png",
      shortDescription: "Классический черный кофе, чистый и крепкий, без добавления сахара и сливок.",
      longDescription: "G7 Черный ориентирован на чистый кофейный вкус: выраженный аромат обжарки, плотное тело и чистое послевкусие для максимальной концентрации.",
      flavorNotes: ["Горький какао", "Дымные нотки обжарки", "Сухое послевкусие"],
      intensity: "5/5 — Очень крепкий",
      format: "Растворимый черный кофе в саше",
      suitableFor: ["Любители черного кофе", "Для тех, кто предпочитает максимальную крепость", "Для рабочих сессий, требующих концентрации"],
      needs: ["ca-phe-manh", "de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Высыпьте один пакетик в небольшую чашку.", "Добавьте 60-70 ml горячей воды.", "Можно добавить лед для употребления в холодном виде."],
      details: { "Линейка продукции": "Растворимый G7", "Стиль": "Черный кофе", "Формат demo": "Коробка с саше", "Каналы продаж": "Ритейл, HoReCa, офисы" },
      relatedProductSlugs: ["g7-2in1", "g7-gu-manh-x2", "sang-tao"]
    },
    {
      id: 4,
      slug: "g7-gu-manh-x2",
      name: "G7 Strong x2",
      category: "g7",
      categoryLabel: "Растворимый кофе G7",
      image: "ảnh footage/ảnh sp (4).png",
      shortDescription: "Яркий характер робусты повышенной крепости для любителей интенсивного вкуса и мощного заряда энергии.",
      longDescription: "G7 Strong x2 — выдающийся выбор для рынков, предпочитающих высокую интенсивность вкуса, формирующий представление о глубоком характере вьетнамского кофе.",
      flavorNotes: ["Крепкая робуста", "Жжёный карамель", "Длительное послевкусие"],
      intensity: "5/5 — Особо крепкий",
      format: "Порционный растворимый пакетик",
      suitableFor: ["Любители кофе высокой интенсивности", "Потребители, желающие попробовать истинную робусту", "Полки магазинов, требующие ярких акцентов в ассортименте"],
      needs: ["ca-phe-manh", "de-pha", "van-phong"],
      brewingMethod: ["Используйте один пакетик на чашку 70 ml.", "Залейте горячей водой и хорошо перемешайте.", "Наслаждайтесь горячим, чтобы почувствовать плотную текстуру."],
      details: { "Линейка продукции": "Растворимый G7", "Стиль": "Повышенная крепость", "Формат demo": "Коробка с саше", "Каналы продаж": "Супермаркеты, маркетплейсы, офисы" },
      relatedProductSlugs: ["g7-den", "g7-3in1", "sang-tao"]
    },
    {
      id: 5,
      slug: "legend-special-edition",
      name: "Trung Nguyen Legend Special Edition",
      category: "legend",
      categoryLabel: "Коллекция Trung Nguyen Legend",
      image: "ảnh footage/ảnh sp (1).jpg",
      shortDescription: "Эксклюзивная линейка в премиальной презентации, идеально подходящая для подарков и особого случая.",
      longDescription: "Special Edition представляет собой язык премиальных подарков бренда: история наследия, изысканный дизайн и глубокий, запоминающийся кофейный вкус.",
      flavorNotes: ["Кедр", "Какао", "Глубокое послевкусие"],
      intensity: "4/5 — Изысканно крепкий",
      format: "Подарочная коробка",
      suitableFor: ["Корпоративные подарки", "Премиальные клиенты", "Полки импортных деликатесов"],
      needs: ["ca-phe-manh", "qua-tang"],
      brewingMethod: ["Приготовление в соответствии с финальным форматом упаковки.", "Рекомендуется использовать чистую горячую воду.", "Подавайте в фарфоровой посуде для лучшего раскрытия аромата."],
      details: { "Линейка продукции": "Коллекция Legend", "Стиль": "Премиум-выбор", "Формат demo": "Подарочный набор", "Каналы продаж": "Бутики подарков, премиальный ритейл, HoReCa" },
      relatedProductSlugs: ["legend-classic", "legend-capsule", "sang-tao"]
    },
    {
      id: 6,
      slug: "legend-classic",
      name: "Trung Nguyen Legend Classic",
      category: "legend",
      categoryLabel: "Коллекция Trung Nguyen Legend",
      image: "ảnh footage/ảnh sp (2).jpg",
      shortDescription: "Сбалансированный вкус для интеграции духа Legend в ежедневный кофейный ритуал.",
      longDescription: "Линейка Classic сочетает премиальный имидж и доступность, идеально подходя для тех, кто хочет повысить уровень домашнего потребления кофе.",
      flavorNotes: ["Обжаренное зерно", "Шоколад", "Мягкий вкус"],
      intensity: "3/5 — Гармоничный",
      format: "Стандартная коробка",
      suitableFor: ["Потребление дома", "Прием гостей", "Неформальные подарки"],
      needs: ["qua-tang", "de-pha"],
      brewingMethod: ["Заваривание в соответствии с официальным форматом упаковки.", "Используйте свежевскипяченную воду.", "Пейте медленно, чтобы в полной мере оценить послевкусие."],
      details: { "Линейка продукции": "Коллекция Legend", "Стиль": "Классический", "Формат demo": "Стандартная пачка", "Каналы продаж": "Премиальный ритейл и сувениры" },
      relatedProductSlugs: ["legend-special-edition", "legend-cappuccino", "phin-giay"]
    },
    {
      id: 7,
      slug: "legend-capsule",
      name: "Капсулы Trung Nguyen Legend",
      category: "capsule",
      categoryLabel: "Капсульный кофе",
      image: "ảnh footage/ảnh sp (3).jpg",
      shortDescription: "Насыщенный концентрированный вкус в удобном формате для стабильного качества кофе из кофемашины.",
      longDescription: "Капсулы Legend адаптированы под привычки владельцев капсульных кофемашин дома, в офисах и гостиницах, соединяя вьетнамский вкус с современным ритуалом.",
      flavorNotes: ["Крепкий эспрессо", "Жареный фундук", "Плотная пенка crema"],
      intensity: "4/5 — Крепкий",
      format: "Кофейные капсулы",
      suitableFor: ["Пользователи капсульных систем", "Премиальные офисы", "Отели и апарт-комплексы"],
      needs: ["pha-may", "van-phong", "de-pha"],
      brewingMethod: ["Вставьте капсулу в совместимую кофемашину.", "Выберите режим эспрессо или лунго.", "Употребляйте сразу, чтобы сохранить текстуру пенки."],
      details: { "Линейка продукции": "Капсулы Legend", "Стиль": "Кофемашина", "Формат demo": "Коробка капсул", "Каналы продаж": "Специализированные магазины, офисы, HoReCa" },
      relatedProductSlugs: ["legend-special-edition", "legend-classic", "legend-cappuccino"]
    },
    {
      id: 8,
      slug: "legend-cappuccino",
      name: "Trung Nguyen Legend Cappuccino",
      category: "legend",
      categoryLabel: "Коллекция Trung Nguyen Legend",
      image: "ảnh footage/ảnh sp (4).jpg",
      shortDescription: "Мягкая чашка кофе с нежной молочной пенкой, простая в приготовлении и сохраняющая фирменный почерк бренда.",
      longDescription: "Legend Cappuccino расширяет линейку для любителей более мягких молочных вкусов, идеально вписываясь в розничный ассортимент и офисную жизнь.",
      flavorNotes: ["Нежные сливки", "Молочный шоколад", "Мягкий кофейный аромат"],
      intensity: "2/5 — Мягкий",
      format: "Капуччино в саше",
      suitableFor: ["Любители нежных вкусов", "Моменты отдыха", "Многонациональные офисы"],
      needs: ["de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Высыпьте содержимое пакетика в большую чашку.", "Добавьте горячую воду согласно инструкции.", "Слегка перемешайте для образования пышной пенки."],
      details: { "Линейка продукции": "Коллекция Legend", "Стиль": "Капучино", "Формат demo": "Коробка с саше", "Каналы продаж": "Розничные сети и офисы" },
      relatedProductSlugs: ["g7-3in1", "legend-classic", "legend-capsule"]
    },
    {
      id: 9,
      slug: "sang-tao",
      name: "Молотый кофе Creative",
      category: "rang-xay",
      categoryLabel: "Зерновой и молотый кофе",
      image: "ảnh footage/ảnh sp (5).jpg",
      shortDescription: "Насыщенная линейка молотого кофе для традиционного заваривания в фине и знакомства со вьетнамской кофейной культурой.",
      longDescription: "Кофе Creative приближает ценителя к традиционному ритуалу заваривания: медленное прокапывание, глубокий аромат и плотное тело напитка.",
      flavorNotes: ["Жареный робуста", "Темный шоколад", "Плотное тело"],
      intensity: "5/5 — Очень крепкий",
      format: "Молотый кофе",
      suitableFor: ["Любители заваривания в фине", "Кофейни и сегмент HoReCa", "Те, кто ищет аутентичный вьетнамский вкус"],
      needs: ["ca-phe-manh", "qua-tang"],
      brewingMethod: ["Ополосните фин горячей водой.", "Насыпьте кофе в фильтр-фин и слегка прижмите прессом.", "Смочите небольшим количеством воды для предсмачивания, затем долейте воду и ждите окончания фильтрации."],
      details: { "Линейка продукции": "Зерновой и молотый", "Стиль": "Заваривание в фине", "Формат demo": "Мягкий пакет", "Каналы продаж": "Специализированные кофейные полки, HoReCa, ритейл" },
      relatedProductSlugs: ["phin-giay", "g7-gu-manh-x2", "legend-special-edition"]
    },
    {
      id: 10,
      slug: "phin-giay",
      name: "Дрип-пакеты Trung Nguyen Legend",
      category: "phin-giay",
      categoryLabel: "Дрип-пакеты",
      image: "ảnh footage/ảnh sp (1).png",
      shortDescription: "Традиционный вьетнамский капельный метод в легком походном формате, идеально подходящем для путешествий и офиса.",
      longDescription: "Дрип-пакеты объединяют медленный ритуал капельного заваривания и современное удобство: для получения вьетнамского вкуса нужны только чашка и горячая вода.",
      flavorNotes: ["Душистая обжарка", "Какао", "Средняя крепость"],
      intensity: "4/5 — Крепкий",
      format: "Дрип-пакеты для чашки",
      suitableFor: ["Для командировок и поездок", "Желающие попробовать капельный метод без покупки фина", "Подарочные наборы впечатлений"],
      needs: ["tien-loi", "de-pha", "van-phong", "qua-tang"],
      brewingMethod: ["Откройте дрип-пакет и закрепите его на чашке.", "Налейте немного горячей воды, чтобы смочить кофе.", "Пролейте воду в несколько этапов, снимите пакет и наслаждайтесь кофе."],
      details: { "Линейка продукции": "Дрип-пакеты", "Стиль": "Быстрый капельный", "Формат demo": "Коробка дрип-пакетов", "Каналы продаж": "Товары в дорогу, подарки, офисный сегмент" },
      relatedProductSlugs: ["sang-tao", "legend-classic", "g7-3in1"]
    },
    {
      id: 11,
      slug: "sang-tao-8",
      name: "Молотый кофе Creative 8",
      category: "rang-xay",
      categoryLabel: "Зерновой и молотый кофе",
      image: "ảnh footage/ảnh sp (2).png",
      shortDescription: "Премиальный шедевр молотого кофе, созданный по секретной формуле из лучших зерен.",
      longDescription: "Creative 8 представляет собой изысканный бленд лучших зерен Arabica, Robusta и Excelsa, дающий настой насыщенного коньячного цвета со стойким ароматом, плотным телом и богатым вкусом.",
      flavorNotes: ["Стойкий аромат", "Богатый вкус", "Бархатистая текстура"],
      intensity: "4/5 — Крепкий",
      format: "Премиальный молотый кофе",
      suitableFor: ["Подарки партнерам", "Особые моменты дома", "Настоящие кофейные гуру"],
      needs: ["ca-phe-manh", "qua-tang", "de-pha"],
      brewingMethod: ["Заваривайте в традиционном фильтр-фине.", "Добавьте сгущенное молоко для идеального вьетнамского кофе с молоком.", "Пейте не торопясь."],
      details: { "Линейка продукции": "Премиум молотый", "Стиль": "Традиционный метод", "Формат demo": "Подарочная металлическая банка/коробка", "Каналы продаж": "Фирменные бутики, деликатесные супермаркеты" },
      relatedProductSlugs: ["sang-tao", "legend-special-edition"]
    },
    {
      id: 12,
      slug: "legend-success",
      name: "Trung Nguyen Legend Success",
      category: "legend",
      categoryLabel: "Коллекция Trung Nguyen Legend",
      image: "ảnh footage/ảnh sp (3).png",
      shortDescription: "Особый энергетический кофе для целеустремленных людей, стремящихся к успеху.",
      longDescription: "Legend Success — это квинтэссенция лучших зерен робусты из Буон-Ма-Тхуота в сочетании с современными технологиями сверхтонкого помола, сохраняющими всю свежесть кофейного аромата.",
      flavorNotes: ["Максимальная крепость", "Яркий аромат", "Вьетнамский характер"],
      intensity: "5/5 — Экстремально крепкий",
      format: "Сверхтонкий молотый кофе",
      suitableFor: ["Предприниматели и лидеры", "Работа при высоких нагрузках", "Стартапы и инновации"],
      needs: ["ca-phe-manh", "van-phong"],
      brewingMethod: ["Традиционный фин.", "Или используйте рожковую кофеварку для максимальной экстракции.", "Отличен как в горячем виде, так и со льдом."],
      details: { "Линейка продукции": "Энергетическая серия Legend", "Стиль": "Особый помол", "Формат demo": "Коробка", "Каналы продаж": "Магазины у дома, супермаркеты" },
      relatedProductSlugs: ["g7-gu-manh-x2", "legend-special-edition"]
    }
  ];

  function bySlug(slug) {
    return products.find(function (product) { return product.slug === slug; });
  }

  function productCard(product) {
    return '<article class="tnl-product-card">' +
      '<div class="tnl-product-card__image-wrap">' +
        '<span class="tnl-badge">Новинка</span>' +
        '<a href="product-detail.html?slug=' + product.slug + '" aria-label="Смотреть ' + product.name + '">' +
          '<img src="' + product.image + '" alt="' + product.name + '">' +
        '</a>' +
        '<a href="product-detail.html?slug=' + product.slug + '" class="tnl-read-more">Подробнее</a>' +
      '</div>' +
      '<div class="tnl-product-card__info">' +
        '<h3 class="tnl-product-card__title"><a href="product-detail.html?slug=' + product.slug + '">' + product.name + '</a></h3>' +
        '<span class="tnl-product-card__category">' + product.categoryLabel + '</span>' +
      '</div>' +
    '</article>';
  }

  function initCatalog() {
    var grid = document.querySelector("[data-product-grid]");
    if (!grid) return;
    var empty = document.querySelector("[data-product-empty]");
    var state = { category: "all", need: "all" };

    function render() {
      var shown = products.filter(function (product) {
        var matchesCategory = state.category === "all" || product.category === state.category;
        var matchesNeed = state.need === "all" || product.needs.indexOf(state.need) !== -1;
        return matchesCategory && matchesNeed;
      });
      grid.innerHTML = shown.map(productCard).join("");
      empty.classList.toggle("is-visible", shown.length === 0);
      document.querySelectorAll("[data-product-category]").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item.dataset.productCategory === state.category));
      });
      document.querySelectorAll("[data-product-need]").forEach(function (item) {
        item.setAttribute("aria-pressed", String(item.dataset.productNeed === state.need));
      });
    }

    document.querySelectorAll("[data-product-category]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.category = chip.dataset.productCategory;
        document.querySelectorAll("[data-product-category]").forEach(function (item) {
          item.classList.toggle("is-active", item === chip);
        });
        render();
      });
    });
    document.querySelectorAll("[data-product-need]").forEach(function (chip) {
      chip.addEventListener("click", function () {
        state.need = chip.dataset.productNeed;
        document.querySelectorAll("[data-product-need]").forEach(function (item) {
          item.classList.toggle("is-active", item === chip);
        });
        render();
      });
    });
    render();
  }

  function initFeatured() {
    var grid = document.querySelector("[data-featured-products]");
    if (!grid) return;
    var slugs = (grid.dataset.featuredProducts || "").split(",");
    grid.innerHTML = slugs.map(bySlug).filter(Boolean).map(productCard).join("");
  }

  function renderDetail(product) {
    var related = product.relatedProductSlugs.map(bySlug).filter(Boolean);
    return '<section class="detail-shell">' +
      '<div class="container">' +
        '<nav aria-label="Навигация по сайту"><ol class="breadcrumb"><li><a href="index.html">Главная</a></li><li><a href="products.html">Продукты</a></li><li>' + product.name + '</li></ol></nav>' +
        '<div class="product-detail-hero">' +
          '<figure class="product-detail-image"><img src="' + product.image + '" alt="Упаковка ' + product.name + '"></figure>' +
          '<div class="product-detail-copy">' +
            '<span class="product-category">' + product.categoryLabel + '</span>' +
            '<h1>' + product.name + '</h1>' +
            '<p class="lead">' + product.longDescription + '</p>' +
            '<div class="tag-list">' + product.flavorNotes.map(function (note) { return '<span class="tag">' + note + '</span>'; }).join("") + '</div>' +
            '<p><strong>Крепость:</strong> ' + product.intensity + '</p>' +
            '<div class="button-row"><a class="btn btn--primary" href="where-to-buy.html">Найти точку продаж</a><a class="btn btn--outline" href="partners.html#dang-ky">Связаться по дистрибуции</a></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="section section--beige"><div class="container"><div class="detail-info-grid">' +
      '<article class="detail-card reveal"><h3>Вкусовой профиль</h3><p>' + product.longDescription + '</p><div class="tag-list" style="margin-top:16px">' + product.flavorNotes.map(function (note) { return '<span class="tag">' + note + '</span>'; }).join("") + '</div></article>' +
      '<article class="detail-card reveal"><h3>Кому подходит?</h3><ul>' + product.suitableFor.map(function (use) { return '<li>' + use + '</li>'; }).join("") + '</ul></article>' +
      '<article class="detail-card reveal"><h3>Способ приготовления</h3><ul>' + product.brewingMethod.map(function (step) { return '<li>' + step + '</li>'; }).join("") + '</ul></article>' +
      '<article class="detail-card reveal"><h3>О продукте</h3><table class="spec-table"><tbody>' + Object.keys(product.details).map(function (key) { return '<tr><th>' + key + '</th><td>' + product.details[key] + '</td></tr>'; }).join("") + '</tbody></table></article>' +
    '</div></div></section>' +
    '<section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Рекомендации</span><h2>Похожие продукты</h2></div><div class="product-grid">' + related.map(productCard).join("") + '</div></div></section>';
  }

  function initDetail() {
    var target = document.querySelector("[data-product-detail]");
    if (!target) return;
    var slug = new URLSearchParams(window.location.search).get("slug") || "";
    var product = bySlug(slug);
    if (!product) {
      target.innerHTML = '<section class="section"><div class="container"><div class="empty-state is-visible"><span class="eyebrow">Продукты</span><h1>Продукт не найден</h1><p>Этот продукт отсутствует в каталоге демо-версии.</p><div class="button-row" style="justify-content:center;margin-top:25px"><a class="btn btn--primary" href="products.html">Назад к каталогу</a></div></div></div></section>';
      return;
    }
    document.title = product.name + " | Trung Nguyen Legend";
    target.innerHTML = renderDetail(product);
    target.querySelectorAll(".reveal").forEach(function (item) { item.classList.add("is-visible"); });
  }

  window.TNLProducts = products;
  initCatalog();
  initFeatured();
  initDetail();
})();