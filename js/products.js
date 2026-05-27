(function () {
  "use strict";

  var products = [
    {
      id: 1,
      slug: "g7-3in1",
      name: "G7 3 trong 1",
      category: "g7",
      categoryLabel: "Cà phê hòa tan G7",
      image: "assets/products/g7-3in1.svg",
      shortDescription: "Cân bằng vị cà phê đậm, độ béo mượt và vị ngọt vừa đủ cho nhịp sống hiện đại.",
      longDescription: "G7 3 trong 1 mang tinh thần cà phê Việt Nam vào định dạng tiện lợi: đậm hương, tròn vị và dễ chuẩn bị tại văn phòng, tại nhà hoặc khi di chuyển.",
      flavorNotes: ["Đậm rang", "Kem mượt", "Hậu vị hài hòa"],
      intensity: "3/5 - Cân bằng",
      format: "Gói hòa tan dùng một lần",
      suitableFor: ["Người cần pha nhanh mỗi sáng", "Văn phòng và khu vực pantry", "Người bắt đầu khám phá cà phê Việt"],
      needs: ["de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Cho một gói vào cốc.", "Thêm 75 ml nước nóng khoảng 80-90°C.", "Khuấy đều và thưởng thức khi còn ấm."],
      details: { "Dòng sản phẩm": "G7 hòa tan", "Phong cách": "Cà phê sữa tiện lợi", "Quy cách demo": "Hộp gói lẻ", "Gợi ý kênh bán": "Siêu thị, cửa hàng tiện lợi, văn phòng" },
      relatedProductSlugs: ["g7-gu-manh-x2", "g7-2in1", "legend-cappuccino"]
    },
    {
      id: 2,
      slug: "g7-2in1",
      name: "G7 2 trong 1",
      category: "g7",
      categoryLabel: "Cà phê hòa tan G7",
      image: "assets/products/g7-2in1.svg",
      shortDescription: "Cà phê và đường với vị đậm rõ hơn, dành cho người không dùng kem sữa.",
      longDescription: "Một lựa chọn gọn gàng để cảm nhận nét mạnh mẽ của cà phê hòa tan Việt Nam, giữ độ ngọt vừa phải và cấu trúc vị rõ nét.",
      flavorNotes: ["Rang đậm", "Ngọt nhẹ", "Sạch vị"],
      intensity: "4/5 - Đậm",
      format: "Gói hòa tan dùng một lần",
      suitableFor: ["Người thích vị cà phê rõ", "Bàn làm việc", "Hành trình ngắn ngày"],
      needs: ["ca-phe-manh", "de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Xé gói và cho vào cốc.", "Thêm 70 ml nước nóng.", "Khuấy kỹ để hương rang lan tỏa."],
      details: { "Dòng sản phẩm": "G7 hòa tan", "Phong cách": "Cà phê có đường", "Quy cách demo": "Hộp gói lẻ", "Gợi ý kênh bán": "Bán lẻ và văn phòng" },
      relatedProductSlugs: ["g7-den", "g7-3in1", "g7-gu-manh-x2"]
    },
    {
      id: 3,
      slug: "g7-den",
      name: "G7 Đen",
      category: "g7",
      categoryLabel: "Cà phê hòa tan G7",
      image: "assets/products/g7-den.svg",
      shortDescription: "Vị cà phê đen nguyên bản, gọn vị và mạnh mẽ, không thêm đường hay kem.",
      longDescription: "G7 Đen hướng tới trải nghiệm trực diện: hương rang nổi bật, thân vị chắc và kết thúc sạch, phù hợp khi cần sự tập trung.",
      flavorNotes: ["Ca cao đắng", "Khói rang", "Hậu vị khô"],
      intensity: "5/5 - Rất đậm",
      format: "Gói hòa tan đen",
      suitableFor: ["Người uống cà phê đen", "Người ưu tiên vị mạnh", "Những buổi làm việc cần tỉnh táo"],
      needs: ["ca-phe-manh", "de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Cho một gói vào tách nhỏ.", "Thêm 60-70 ml nước nóng.", "Có thể thêm đá để dùng lạnh."],
      details: { "Dòng sản phẩm": "G7 hòa tan", "Phong cách": "Cà phê đen", "Quy cách demo": "Hộp gói lẻ", "Gợi ý kênh bán": "Bán lẻ, horeca, văn phòng" },
      relatedProductSlugs: ["g7-2in1", "g7-gu-manh-x2", "sang-tao"]
    },
    {
      id: 4,
      slug: "g7-gu-manh-x2",
      name: "G7 Gu Mạnh X2",
      category: "g7",
      categoryLabel: "Cà phê hòa tan G7",
      image: "assets/products/g7-gu-manh-x2.svg",
      shortDescription: "Dấu ấn Robusta đậm hơn dành cho người yêu nhịp vị mạnh và năng lượng rõ rệt.",
      longDescription: "G7 Gu Mạnh X2 là lựa chọn nổi bật cho thị trường yêu thích hương vị cường độ cao, xây dựng nhận biết về phong cách cà phê Việt đậm sâu.",
      flavorNotes: ["Robusta đậm", "Caramen rang", "Hậu vị kéo dài"],
      intensity: "5/5 - Mạnh nổi bật",
      format: "Gói hòa tan dùng một lần",
      suitableFor: ["Người yêu cà phê cường độ cao", "Người tiêu dùng muốn thử Robusta", "Kệ hàng cần sản phẩm điểm nhấn"],
      needs: ["ca-phe-manh", "de-pha", "van-phong"],
      brewingMethod: ["Dùng một gói cho tách 70 ml.", "Rót nước nóng và khuấy đều.", "Thưởng thức nóng để cảm nhận thân vị dày."],
      details: { "Dòng sản phẩm": "G7 hòa tan", "Phong cách": "Gu mạnh", "Quy cách demo": "Hộp gói lẻ", "Gợi ý kênh bán": "Siêu thị, sàn bán lẻ, văn phòng" },
      relatedProductSlugs: ["g7-den", "g7-3in1", "sang-tao"]
    },
    {
      id: 5,
      slug: "legend-special-edition",
      name: "Trung Nguyên Legend Phiên bản Đặc biệt",
      category: "legend",
      categoryLabel: "Bộ sưu tập Trung Nguyên Legend",
      image: "assets/products/legend-special.svg",
      shortDescription: "Dòng tuyển chọn có diện mạo trang trọng, thích hợp cho trải nghiệm cao cấp và biếu tặng.",
      longDescription: "Phiên bản Đặc biệt đại diện cho ngôn ngữ quà tặng cao cấp của thương hiệu: câu chuyện di sản, thiết kế trang trọng và vị cà phê sâu lắng.",
      flavorNotes: ["Gỗ tuyết tùng", "Ca cao", "Hậu vị sâu"],
      intensity: "4/5 - Đậm sang trọng",
      format: "Hộp cà phê tuyển chọn",
      suitableFor: ["Quà tặng doanh nghiệp", "Khách hàng cao cấp", "Kệ hàng đặc sản nhập khẩu"],
      needs: ["ca-phe-manh", "qua-tang"],
      brewingMethod: ["Pha theo định dạng sản phẩm thực tế khi phân phối.", "Ưu tiên nước nóng tinh khiết.", "Dùng trong tách sứ để cảm nhận hương thơm."],
      details: { "Dòng sản phẩm": "Bộ sưu tập Legend", "Phong cách": "Tuyển chọn cao cấp", "Quy cách demo": "Hộp quà", "Gợi ý kênh bán": "Quà tặng, cửa hàng cao cấp, horeca" },
      relatedProductSlugs: ["legend-classic", "legend-capsule", "sang-tao"]
    },
    {
      id: 6,
      slug: "legend-classic",
      name: "Trung Nguyên Legend Cổ điển",
      category: "legend",
      categoryLabel: "Bộ sưu tập Trung Nguyên Legend",
      image: "assets/products/legend-classic.svg",
      shortDescription: "Một cấu trúc vị hài hòa để đưa tinh thần Legend vào thói quen thưởng thức thường nhật.",
      longDescription: "Dòng Cổ điển cân bằng giữa hình ảnh premium và tính tiếp cận, phù hợp với người tiêu dùng muốn nâng cấp trải nghiệm cà phê tại nhà.",
      flavorNotes: ["Hạt rang", "Sô-cô-la", "Êm dịu"],
      intensity: "3/5 - Hài hòa",
      format: "Hộp cà phê tuyển chọn",
      suitableFor: ["Thưởng thức tại nhà", "Tiếp khách", "Quà tặng thân mật"],
      needs: ["qua-tang", "de-pha"],
      brewingMethod: ["Chuẩn bị theo định dạng đóng gói chính thức.", "Dùng nước nóng vừa sôi.", "Thưởng thức chậm để cảm nhận hậu vị."],
      details: { "Dòng sản phẩm": "Bộ sưu tập Legend", "Phong cách": "Cổ điển", "Quy cách demo": "Hộp tiêu chuẩn", "Gợi ý kênh bán": "Bán lẻ cao cấp và quà tặng" },
      relatedProductSlugs: ["legend-special-edition", "legend-cappuccino", "phin-giay"]
    },
    {
      id: 7,
      slug: "legend-capsule",
      name: "Viên nén Trung Nguyên Legend",
      category: "capsule",
      categoryLabel: "Viên nén cà phê",
      image: "assets/products/legend-capsule.svg",
      shortDescription: "Trải nghiệm hương vị đậm gọn trong định dạng pha máy tiện dụng và nhất quán.",
      longDescription: "Viên nén Legend phục vụ thói quen pha máy tại gia đình, văn phòng và khu vực dịch vụ lưu trú, kết nối chất Việt với nghi thức hiện đại.",
      flavorNotes: ["Espresso đậm", "Hạt dẻ rang", "Lớp crema"],
      intensity: "4/5 - Đậm",
      format: "Viên nén pha máy",
      suitableFor: ["Người dùng máy viên nén", "Văn phòng cao cấp", "Khách sạn và căn hộ dịch vụ"],
      needs: ["pha-may", "van-phong", "de-pha"],
      brewingMethod: ["Đặt viên nén vào máy tương thích.", "Chọn chế độ espresso hoặc lungo.", "Dùng ngay để giữ lớp crema."],
      details: { "Dòng sản phẩm": "Viên nén Legend", "Phong cách": "Pha máy", "Quy cách demo": "Hộp viên nén", "Gợi ý kênh bán": "Điểm bán thiết bị, văn phòng, horeca" },
      relatedProductSlugs: ["legend-special-edition", "legend-classic", "legend-cappuccino"]
    },
    {
      id: 8,
      slug: "legend-cappuccino",
      name: "Trung Nguyên Legend Cappuccino",
      category: "legend",
      categoryLabel: "Bộ sưu tập Trung Nguyên Legend",
      image: "assets/products/legend-cappuccino.svg",
      shortDescription: "Tách cà phê mịn màng với cảm giác kem nhẹ, dễ tiếp cận mà vẫn giữ dấu ấn thương hiệu.",
      longDescription: "Legend Cappuccino mở rộng danh mục cho nhu cầu thưởng thức mềm mại hơn, phù hợp với kênh bán lẻ và không gian làm việc đa dạng.",
      flavorNotes: ["Kem mịn", "Ca cao sữa", "Hương cà phê dịu"],
      intensity: "2/5 - Dịu",
      format: "Gói hòa tan cappuccino",
      suitableFor: ["Người thích vị mềm", "Khoảnh khắc thư giãn", "Văn phòng đa khẩu vị"],
      needs: ["de-pha", "van-phong", "tien-loi"],
      brewingMethod: ["Cho gói cà phê vào cốc lớn.", "Thêm nước nóng theo hướng dẫn bao bì.", "Khuấy nhẹ để tạo bề mặt mịn."],
      details: { "Dòng sản phẩm": "Bộ sưu tập Legend", "Phong cách": "Cappuccino", "Quy cách demo": "Hộp gói lẻ", "Gợi ý kênh bán": "Bán lẻ và văn phòng" },
      relatedProductSlugs: ["g7-3in1", "legend-classic", "legend-capsule"]
    },
    {
      id: 9,
      slug: "sang-tao",
      name: "Cà phê rang xay Sáng Tạo",
      category: "rang-xay",
      categoryLabel: "Cà phê rang xay",
      image: "assets/products/sang-tao.svg",
      shortDescription: "Dòng rang xay giàu thân vị dành cho nghi thức pha phin và trải nghiệm cà phê Việt.",
      longDescription: "Cà phê Sáng Tạo đưa người thưởng thức đến gần hơn với phong cách pha truyền thống: thời gian chờ đợi, hương thơm rang xay và chất vị đầy đặn.",
      flavorNotes: ["Robusta rang", "Sô-cô-la đen", "Thân vị dày"],
      intensity: "5/5 - Rất đậm",
      format: "Cà phê rang xay",
      suitableFor: ["Người yêu pha phin", "Quán cà phê và horeca", "Người tìm trải nghiệm Việt nguyên bản"],
      needs: ["ca-phe-manh", "qua-tang"],
      brewingMethod: ["Tráng phin bằng nước nóng.", "Cho cà phê rang xay vào phin và nén nhẹ.", "Ủ với ít nước, sau đó châm thêm và chờ nhỏ giọt."],
      details: { "Dòng sản phẩm": "Rang xay", "Phong cách": "Pha phin", "Quy cách demo": "Gói cà phê", "Gợi ý kênh bán": "Cửa hàng đặc sản, horeca, bán lẻ" },
      relatedProductSlugs: ["phin-giay", "g7-gu-manh-x2", "legend-special-edition"]
    },
    {
      id: 10,
      slug: "phin-giay",
      name: "Phin giấy Trung Nguyên Legend",
      category: "phin-giay",
      categoryLabel: "Phin giấy",
      image: "assets/products/phin-giay.svg",
      shortDescription: "Nghi thức nhỏ giọt Việt Nam trong định dạng gọn nhẹ, thích hợp cho du lịch và văn phòng.",
      longDescription: "Phin giấy tạo cầu nối giữa trải nghiệm pha nhỏ giọt và sự tiện lợi quốc tế: chỉ cần cốc cùng nước nóng để khám phá hương vị Việt.",
      flavorNotes: ["Rang thơm", "Ca cao", "Đậm vừa"],
      intensity: "4/5 - Đậm",
      format: "Túi lọc treo trên cốc",
      suitableFor: ["Người đi công tác", "Người muốn thử pha nhỏ giọt", "Kênh quà tặng trải nghiệm"],
      needs: ["tien-loi", "de-pha", "van-phong", "qua-tang"],
      brewingMethod: ["Mở túi lọc và gài lên miệng cốc.", "Rót một ít nước nóng để ủ cà phê.", "Rót tiếp từng đợt, tháo phin và thưởng thức."],
      details: { "Dòng sản phẩm": "Phin giấy", "Phong cách": "Nhỏ giọt tiện lợi", "Quy cách demo": "Hộp túi lọc", "Gợi ý kênh bán": "Du lịch, quà tặng, văn phòng" },
      relatedProductSlugs: ["sang-tao", "legend-classic", "g7-3in1"]
    }
  ];

  function bySlug(slug) {
    return products.find(function (product) { return product.slug === slug; });
  }

  function productCard(product) {
    return '<article class="product-card">' +
      '<a class="product-card__image" href="product-detail.html?slug=' + product.slug + '" aria-label="Xem chi tiết ' + product.name + '">' +
        '<img src="' + product.image + '" alt="Bao bì minh họa ' + product.name + '">' +
      '</a>' +
      '<div class="product-card__content">' +
        '<span class="product-category">' + product.categoryLabel + '</span>' +
        '<h3><a href="product-detail.html?slug=' + product.slug + '">' + product.name + '</a></h3>' +
        '<p>' + product.shortDescription + '</p>' +
        '<div class="product-specs">' +
          '<span><strong>Hương vị:</strong> ' + product.flavorNotes.slice(0, 2).join(", ") + '</span>' +
          '<span><strong>Độ đậm:</strong> ' + product.intensity + '</span>' +
          '<span><strong>Cách dùng:</strong> ' + product.format + '</span>' +
        '</div>' +
        '<div class="button-row">' +
          '<a class="btn btn--primary" href="product-detail.html?slug=' + product.slug + '">Xem chi tiết</a>' +
          '<a class="btn btn--outline" href="where-to-buy.html">Tìm điểm bán</a>' +
        '</div>' +
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
        '<nav aria-label="Đường dẫn trang"><ol class="breadcrumb"><li><a href="index.html">Trang chủ</a></li><li><a href="products.html">Sản phẩm</a></li><li>' + product.name + '</li></ol></nav>' +
        '<div class="product-detail-hero">' +
          '<figure class="product-detail-image"><img src="' + product.image + '" alt="Bao bì minh họa ' + product.name + '"></figure>' +
          '<div class="product-detail-copy">' +
            '<span class="product-category">' + product.categoryLabel + '</span>' +
            '<h1>' + product.name + '</h1>' +
            '<p class="lead">' + product.longDescription + '</p>' +
            '<div class="tag-list">' + product.flavorNotes.map(function (note) { return '<span class="tag">' + note + '</span>'; }).join("") + '</div>' +
            '<p><strong>Độ đậm:</strong> ' + product.intensity + '</p>' +
            '<div class="button-row"><a class="btn btn--primary" href="where-to-buy.html">Tìm điểm bán</a><a class="btn btn--outline" href="partners.html#dang-ky">Liên hệ phân phối</a></div>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</section>' +
    '<section class="section section--beige"><div class="container"><div class="detail-info-grid">' +
      '<article class="detail-card reveal"><h3>Trải nghiệm hương vị</h3><p>' + product.longDescription + '</p><div class="tag-list" style="margin-top:16px">' + product.flavorNotes.map(function (note) { return '<span class="tag">' + note + '</span>'; }).join("") + '</div></article>' +
      '<article class="detail-card reveal"><h3>Phù hợp với ai?</h3><ul>' + product.suitableFor.map(function (use) { return '<li>' + use + '</li>'; }).join("") + '</ul></article>' +
      '<article class="detail-card reveal"><h3>Cách pha / cách sử dụng</h3><ul>' + product.brewingMethod.map(function (step) { return '<li>' + step + '</li>'; }).join("") + '</ul></article>' +
      '<article class="detail-card reveal"><h3>Thông tin sản phẩm</h3><table class="spec-table"><tbody>' + Object.keys(product.details).map(function (key) { return '<tr><th>' + key + '</th><td>' + product.details[key] + '</td></tr>'; }).join("") + '</tbody></table></article>' +
    '</div></div></section>' +
    '<section class="section"><div class="container"><div class="section-heading"><span class="eyebrow">Gợi ý tiếp theo</span><h2>Sản phẩm liên quan</h2></div><div class="product-grid">' + related.map(productCard).join("") + '</div></div></section>';
  }

  function initDetail() {
    var target = document.querySelector("[data-product-detail]");
    if (!target) return;
    var slug = new URLSearchParams(window.location.search).get("slug") || "";
    var product = bySlug(slug);
    if (!product) {
      target.innerHTML = '<section class="section"><div class="container"><div class="empty-state is-visible"><span class="eyebrow">Sản phẩm</span><h1>Không tìm thấy sản phẩm</h1><p>Đường dẫn này chưa có trong danh mục bản demo.</p><div class="button-row" style="justify-content:center;margin-top:25px"><a class="btn btn--primary" href="products.html">Quay lại sản phẩm</a></div></div></div></section>';
      return;
    }
    document.title = product.name + " | Trung Nguyên Legend";
    target.innerHTML = renderDetail(product);
    target.querySelectorAll(".reveal").forEach(function (item) { item.classList.add("is-visible"); });
  }

  window.TNLProducts = products;
  initCatalog();
  initFeatured();
  initDetail();
})();
