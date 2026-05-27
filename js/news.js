(function () {
  "use strict";

  var newsPosts = [
    {
      id: 1,
      slug: "ca-phe-viet-nam-va-co-hoi-tai-thi-truong-nga",
      title: "Cà phê Việt Nam và cơ hội tại thị trường Nga",
      category: "thi-truong",
      categoryLabel: "Thị trường quốc tế",
      excerpt: "Hương vị Robusta đậm sâu cùng câu chuyện nguồn gốc tạo nền tảng khác biệt cho thương hiệu Việt.",
      image: "assets/images/origin-buon-ma-thuot.svg",
      date: "18.05.2026",
      content: [
        { heading: "Một trải nghiệm có bản sắc", paragraphs: ["Thị trường cà phê quốc tế ngày càng quan tâm đến nguồn gốc, nghi thức thưởng thức và câu chuyện phía sau mỗi sản phẩm. Cà phê Việt Nam có lợi thế rõ ràng với phong cách Robusta mạnh mẽ, phù hợp những người tiêu dùng tìm kiếm thân vị đậm và cảm giác tỉnh thức.", "Trung Nguyên Legend có thể kết nối nhu cầu đó bằng một hệ danh mục đủ rộng: sản phẩm tiện lợi cho bán lẻ, lựa chọn rang xay cho người sành vị và bộ sưu tập cao cấp cho quà tặng."] },
        { heading: "Từ nhận biết đến điểm bán", paragraphs: ["Để thương hiệu phát triển bền vững, câu chuyện phải đi cùng khả năng tiếp cận. Một cấu trúc điểm bán rõ theo thành phố, hỗ trợ đối tác phân phối và nội dung giáo dục về cách dùng sẽ giúp người tiêu dùng mới tự tin lựa chọn.", "Bản demo này mô phỏng hành trình đó: khám phá di sản, chọn sản phẩm và tìm điểm bán tại các đô thị trọng điểm của Nga."] }
      ]
    },
    {
      id: 2,
      slug: "g7-lua-chon-tien-loi-cho-nhip-song-hien-dai",
      title: "G7 - lựa chọn tiện lợi cho nhịp sống hiện đại",
      category: "san-pham",
      categoryLabel: "Sản phẩm",
      excerpt: "Từ văn phòng đến hành trình di chuyển, một tách cà phê đậm vị có thể được chuẩn bị nhanh chóng.",
      image: "assets/images/coffee-craft.svg",
      date: "10.05.2026",
      content: [
        { heading: "Tiện lợi nhưng vẫn có dấu ấn", paragraphs: ["Cà phê hòa tan không chỉ là lựa chọn về tốc độ. Với hệ sản phẩm G7, trải nghiệm được định hình bằng hương rang rõ, thân vị cân bằng và nhiều lựa chọn từ cà phê sữa đến cà phê đen.", "Dòng G7 phù hợp cho gian hàng bán lẻ, khu vực pantry của doanh nghiệp và người tiêu dùng muốn có một tách cà phê Việt dễ chuẩn bị."] },
        { heading: "Danh mục linh hoạt", paragraphs: ["G7 3 trong 1 dễ tiếp cận, G7 Đen dành cho người ưu tiên vị nguyên bản, còn G7 Gu Mạnh X2 trở thành điểm nhấn cho người tìm cường độ cao. Việc phân nhóm rõ ràng giúp đối tác giới thiệu đúng sản phẩm cho đúng nhu cầu."] }
      ]
    },
    {
      id: 3,
      slug: "robusta-viet-nam-huong-vi-manh-me-khac-biet",
      title: "Robusta Việt Nam: hương vị mạnh mẽ khác biệt",
      category: "van-hoa",
      categoryLabel: "Văn hóa cà phê",
      excerpt: "Thân vị dày, độ đậm nổi bật và hậu vị sâu là ngôn ngữ đặc trưng của Robusta Việt Nam.",
      image: "assets/images/origin-buon-ma-thuot.svg",
      date: "29.04.2026",
      content: [
        { heading: "Vùng đất của vị đậm", paragraphs: ["Buôn Ma Thuột được biết đến như một vùng nguyên liệu quan trọng của cà phê Việt Nam. Điều kiện tự nhiên và truyền thống chế biến góp phần tạo nên Robusta có thân vị chắc, hương rang nổi và cảm giác năng lượng rõ.", "Đây là nét khác biệt có thể được truyền tải tới người tiêu dùng quốc tế bằng trải nghiệm pha phin, rang xay hoặc định dạng tiện dụng hiện đại."] },
        { heading: "Cách thưởng thức", paragraphs: ["Người yêu vị mạnh có thể chọn cà phê đen hoặc rang xay pha phin. Với người mới, các sản phẩm cân bằng hơn là bước khởi đầu dễ tiếp cận trước khi khám phá những cấp độ đậm cao hơn."] }
      ]
    },
    {
      id: 4,
      slug: "legend-collection-va-tinh-than-qua-tang-cao-cap",
      title: "Bộ sưu tập Trung Nguyên Legend và tinh thần quà tặng cao cấp",
      category: "san-pham",
      categoryLabel: "Sản phẩm",
      excerpt: "Một món quà cà phê mang theo hình ảnh Việt Nam, sự trân trọng và gu thưởng thức trang nhã.",
      image: "assets/images/partner-display.svg",
      date: "16.04.2026",
      content: [
        { heading: "Quà tặng có câu chuyện", paragraphs: ["Trong môi trường doanh nghiệp và ngoại giao thương mại, món quà có xuất xứ và bản sắc luôn tạo ra ấn tượng bền hơn. Bộ sưu tập Legend được định vị để kể câu chuyện cà phê Việt bằng hình thức trang trọng và trải nghiệm vị sâu.", "Danh mục này thích hợp với cửa hàng quà tặng, kênh cao cấp và các chương trình tri ân đối tác."] },
        { heading: "Trưng bày và truyền thông", paragraphs: ["Tại điểm bán, thiết kế trưng bày nên đi kèm thông tin về nguồn gốc, hương vị và nghi thức thưởng thức. Điều đó biến một hộp cà phê thành lời mời khám phá văn hóa."] }
      ]
    },
    {
      id: 5,
      slug: "cau-chuyen-ca-phe-viet",
      title: "Câu chuyện Buôn Ma Thuột trong ly cà phê năng lượng",
      category: "van-hoa",
      categoryLabel: "Văn hóa cà phê",
      excerpt: "Cội nguồn vùng đất, hạt Robusta và nghi thức nhỏ giọt làm nên một trải nghiệm giàu chiều sâu.",
      image: "assets/images/coffee-craft.svg",
      date: "02.04.2026",
      content: [
        { heading: "Nơi hành trình bắt đầu", paragraphs: ["Buôn Ma Thuột không chỉ là địa danh nguyên liệu; đó còn là ký ức về vườn cà phê, nhịp rang xay và niềm tự hào của cà phê Việt. Mỗi cách pha là một cơ hội để đưa câu chuyện ấy đến gần người thưởng thức.", "Khi được giới thiệu rõ ràng, xuất xứ tạo ra kết nối cảm xúc và giúp sản phẩm khác biệt trên quầy hàng quốc tế."] },
        { heading: "Năng lượng của một nghi thức", paragraphs: ["Một tách cà phê có thể là khoảng thời gian tập trung, trò chuyện hoặc suy nghĩ mới. Triết lý cà phê năng lượng được thể hiện thiết thực qua chất lượng vị, cách phục vụ và nội dung thương hiệu nhất quán."] }
      ]
    },
    {
      id: 6,
      slug: "vi-sao-kenh-phan-phoi-quoc-te-can-brand-story-manh",
      title: "Vì sao kênh phân phối quốc tế cần một câu chuyện thương hiệu mạnh?",
      category: "thuong-hieu",
      categoryLabel: "Thương hiệu",
      excerpt: "Một danh mục tốt cần được hỗ trợ bởi lý do lựa chọn rõ ràng cho người mua và đối tác.",
      image: "assets/images/partner-display.svg",
      date: "25.03.2026",
      content: [
        { heading: "Hơn cả bao bì trên kệ", paragraphs: ["Đối tác phân phối cần sản phẩm có khả năng tạo nhu cầu, không chỉ lấp đầy danh mục. Một thương hiệu gắn với di sản Việt Nam, Robusta đậm vị và hệ trải nghiệm phong phú có cơ sở để giao tiếp khác biệt với khách hàng.", "Câu chuyện thương hiệu hỗ trợ đào tạo nhân viên bán hàng, nội dung truyền thông và cách trưng bày tại điểm bán."] },
        { heading: "Nền tảng hợp tác", paragraphs: ["Khi danh mục, vật liệu truyền thông và luồng liên hệ B2B được tổ chức rõ, đối tác dễ đánh giá cơ hội và triển khai thử nghiệm. Đây là nền tảng cần thiết cho quá trình mở rộng ở thị trường mới."] }
      ]
    }
  ];

  function bySlug(slug) {
    return newsPosts.find(function (post) { return post.slug === slug; });
  }

  function newsCard(post) {
    return '<article class="news-card">' +
      '<a class="news-card__image" href="news-detail.html?slug=' + post.slug + '">' +
        '<img src="' + post.image + '" alt="Minh họa bài viết ' + post.title + '">' +
      '</a>' +
      '<div class="news-card__content">' +
        '<span class="product-category">' + post.categoryLabel + '</span>' +
        '<h3><a href="news-detail.html?slug=' + post.slug + '">' + post.title + '</a></h3>' +
        '<p>' + post.excerpt + '</p>' +
        '<time datetime="' + post.date.split(".").reverse().join("-") + '">' + post.date + '</time>' +
        '<a class="text-link" href="news-detail.html?slug=' + post.slug + '">Đọc thêm</a>' +
      '</div>' +
    '</article>';
  }

  function initGrid() {
    var grid = document.querySelector("[data-news-grid]");
    if (!grid) return;
    function render(category) {
      var filtered = category === "all" ? newsPosts : newsPosts.filter(function (post) { return post.category === category; });
      grid.innerHTML = filtered.map(newsCard).join("");
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
    grid.innerHTML = newsPosts.slice(0, 3).map(newsCard).join("");
  }

  function articleContent(post) {
    return post.content.map(function (section, index) {
      var quote = index === 0 ? '<blockquote>Cà phê Việt Nam mang theo hương vị đậm sâu và một câu chuyện đủ khác biệt để được ghi nhớ.</blockquote>' : "";
      return '<h2>' + section.heading + '</h2>' +
        section.paragraphs.map(function (paragraph) { return '<p>' + paragraph + '</p>'; }).join("") + quote;
    }).join("");
  }

  function initDetail() {
    var root = document.querySelector("[data-news-detail]");
    if (!root) return;
    var slug = new URLSearchParams(window.location.search).get("slug") || "";
    var post = bySlug(slug);
    if (!post) {
      root.innerHTML = '<section class="section"><div class="container"><div class="empty-state is-visible"><span class="eyebrow">Tin tức</span><h1>Không tìm thấy bài viết</h1><p>Đường dẫn bài viết chưa có trong bản demo.</p><div class="button-row" style="justify-content:center;margin-top:25px"><a class="btn btn--primary" href="news.html">Quay lại tin tức</a></div></div></div></section>';
      return;
    }
    var related = newsPosts.filter(function (item) { return item.slug !== post.slug; }).slice(0, 2);
    document.title = post.title + " | Trung Nguyên Legend";
    root.innerHTML =
      '<section class="article-hero"><div class="container">' +
        '<nav aria-label="Đường dẫn trang"><ol class="breadcrumb"><li><a href="index.html">Trang chủ</a></li><li><a href="news.html">Tin tức</a></li><li>' + post.categoryLabel + '</li></ol></nav>' +
        '<div class="article-heading"><span class="product-category">' + post.categoryLabel + '</span><h1>' + post.title + '</h1><div class="article-meta"><time>' + post.date + '</time><span>·</span><span>Trung Nguyên Legend</span></div><p class="lead">' + post.excerpt + '</p></div>' +
      '</div></section>' +
      '<section class="section"><div class="container article-layout">' +
        '<article class="article-content">' +
          '<figure class="editorial-media" style="margin-bottom:35px"><img src="' + post.image + '" alt="Minh họa ' + post.title + '"></figure>' +
          articleContent(post) +
          '<div class="button-row" style="margin-top:38px"><a class="btn btn--primary" href="products.html">Xem sản phẩm</a><a class="btn btn--outline" href="coffee-story.html">Đọc câu chuyện cà phê</a></div>' +
        '</article>' +
        '<aside class="article-aside"><div class="surface"><h3 style="margin-bottom:18px">Bài viết liên quan</h3>' + related.map(function (item) { return '<div style="margin-bottom:18px"><span class="product-category">' + item.categoryLabel + '</span><p style="margin-top:6px"><a href="news-detail.html?slug=' + item.slug + '"><strong>' + item.title + '</strong></a></p></div>'; }).join("") + '</div></aside>' +
      '</div></section>';
  }

  window.TNLNewsPosts = newsPosts;
  initGrid();
  initPreview();
  initDetail();
})();
