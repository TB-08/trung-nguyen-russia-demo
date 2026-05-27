(function () {
  "use strict";

  var stores = [
    { id: 1, name: "Siêu thị Cao cấp Tverskaya", city: "Moscow", address: "12 Tverskaya, Moscow", type: "Siêu thị cao cấp", phone: "+7 (000) 100-10-10", coordinates: [55.757, 37.615], productAvailability: ["G7", "Bộ sưu tập Legend", "Phin giấy"] },
    { id: 2, name: "Góc Cà phê Arbat", city: "Moscow", address: "28 Arbat, Moscow", type: "Cửa hàng đặc sản", phone: "+7 (000) 100-10-20", coordinates: [55.751, 37.59], productAvailability: ["G7", "Rang xay", "Viên nén"] },
    { id: 3, name: "Siêu thị Cao cấp Nevsky", city: "Saint Petersburg", address: "62 Nevsky Prospekt, Saint Petersburg", type: "Siêu thị cao cấp", phone: "+7 (000) 200-20-10", coordinates: [59.934, 30.336], productAvailability: ["G7", "Bộ sưu tập Legend", "Viên nén"] },
    { id: 4, name: "Góc Cà phê Baltic", city: "Saint Petersburg", address: "14 Sadovaya, Saint Petersburg", type: "Cửa hàng cà phê", phone: "+7 (000) 200-20-20", coordinates: [59.93, 30.323], productAvailability: ["Rang xay", "Phin giấy"] },
    { id: 5, name: "Cửa hàng Riviera Sochi", city: "Sochi", address: "18 Kurortny Prospekt, Sochi", type: "Cửa hàng nhập khẩu", phone: "+7 (000) 300-30-10", coordinates: [43.586, 39.72], productAvailability: ["G7", "Phin giấy", "Bộ sưu tập Legend"] },
    { id: 6, name: "Điểm Horeca Biển Đen", city: "Sochi", address: "7 Morskoy, Sochi", type: "Kênh horeca", phone: "+7 (000) 300-30-20", coordinates: [43.58, 39.728], productAvailability: ["Viên nén", "Rang xay"] },
    { id: 7, name: "Siêu thị Trung tâm Kazan", city: "Kazan", address: "21 Bauman, Kazan", type: "Siêu thị", phone: "+7 (000) 400-40-10", coordinates: [55.794, 49.112], productAvailability: ["G7", "Bộ sưu tập Legend"] },
    { id: 8, name: "Không gian Cà phê Volga", city: "Kazan", address: "9 Pushkina, Kazan", type: "Cửa hàng đặc sản", phone: "+7 (000) 400-40-20", coordinates: [55.79, 49.12], productAvailability: ["Phin giấy", "Rang xay", "Viên nén"] },
    { id: 9, name: "Thực phẩm Cao cấp Siberia", city: "Novosibirsk", address: "33 Krasny Prospekt, Novosibirsk", type: "Siêu thị cao cấp", phone: "+7 (000) 500-50-10", coordinates: [55.03, 82.92], productAvailability: ["G7", "Bộ sưu tập Legend", "Phin giấy"] },
    { id: 10, name: "Điểm Cà phê Năng lượng", city: "Novosibirsk", address: "8 Lenina, Novosibirsk", type: "Cửa hàng cà phê", phone: "+7 (000) 500-50-20", coordinates: [55.028, 82.911], productAvailability: ["G7", "Rang xay", "Viên nén"] }
  ];

  var mapPositions = {
    "Moscow": [["36%", "42%"], ["65%", "62%"], ["74%", "31%"]],
    "Saint Petersburg": [["45%", "37%"], ["64%", "56%"], ["29%", "68%"]],
    "Sochi": [["62%", "67%"], ["39%", "55%"], ["72%", "34%"]],
    "Kazan": [["52%", "41%"], ["31%", "58%"], ["69%", "65%"]],
    "Novosibirsk": [["41%", "53%"], ["65%", "39%"], ["73%", "66%"]]
  };

  function storeCard(store, index) {
    return '<article class="store-card' + (index === 0 ? " is-featured" : "") + '">' +
      '<div class="store-card__meta"><span>' + store.city + '</span><span>·</span><span>' + store.type + '</span></div>' +
      '<h3>' + store.name + '</h3>' +
      '<p>' + store.address + '<br>Điện thoại demo: ' + store.phone + '</p>' +
      '<div class="tag-list">' + store.productAvailability.map(function (item) { return '<span class="tag">' + item + '</span>'; }).join("") + '</div>' +
      '<a class="text-link" href="#" data-direction-link>Xem chỉ đường</a>' +
    '</article>';
  }

  function initLocator() {
    var list = document.querySelector("[data-store-list]");
    if (!list) return;
    var label = document.querySelector("[data-map-city]");
    var pins = document.querySelectorAll("[data-map-pin]");
    var tabs = document.querySelectorAll("[data-city]");
    var initial = list.dataset.initialCity || "Moscow";

    function selectCity(city) {
      var localStores = stores.filter(function (store) { return store.city === city; });
      list.innerHTML = localStores.map(storeCard).join("");
      if (label) label.textContent = city + " · " + localStores.length + " điểm bán mẫu";
      (mapPositions[city] || []).forEach(function (position, index) {
        if (!pins[index]) return;
        pins[index].style.left = position[0];
        pins[index].style.top = position[1];
      });
      tabs.forEach(function (tab) {
        var active = tab.dataset.city === city;
        tab.classList.toggle("is-active", active);
        tab.setAttribute("aria-selected", String(active));
      });
      list.querySelectorAll("[data-direction-link]").forEach(function (link) {
        link.addEventListener("click", function (event) {
          event.preventDefault();
          if (window.showDemoToast) {
            window.showDemoToast("Chỉ đường sẽ được mở qua Yandex.Maps khi tích hợp chính thức.");
          }
        });
      });
    }

    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () { selectCity(tab.dataset.city); });
    });
    selectCity(initial);
  }

  window.TNLStores = stores;
  initLocator();
})();
