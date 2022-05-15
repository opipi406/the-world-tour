const API_KEY = 'AIzaSyDpn1pO1W606kPEO1dE2y6AZnepZEUHUpo'; // リファラー制限されているため直書き

var apiRequestCnt = 0; // APIリクエストカウンタ

const IS_DEBUG = true; // デバッグ用（loadReviewの無効化）

var canClickAcdContent = true; // アコーディオンメニュー連続クリック対策
const INVALID_CLICK_DURATION = 1000;

/**
 * 指定のplace_idを持つ施設のレビュー情報を取得・表示します。
 * @param {string} place_id 取得対象の施設のプレイスID
 */
function loadReview(place_id) {

  if (IS_DEBUG) {
    console.log("DEBUG: called loadReview()"); // TODO
    return 0;
  }

  $.getScript('https://maps.google.com/maps/api/js?key=' + API_KEY + '&libraries=places', function () {
    const service = new google.maps.places.PlacesService(document.createElement('div'));

    const reviews = []; // レビュー情報を格納するオブジェクト
    const $js_review_grid = $('#js-review-grid'); // レビュー格納グリッド

    service.getDetails({
      // プレイスIDは投稿を想定しているためHTMLから取得
      placeId: place_id,
      fields: ['review']
    }, function (place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        $.each(place.reviews, function () {

          // レビューの氏名・レート・内容を取得し格納
          const reviewObj = {};
          reviewObj['name'] = this.author_name;
          reviewObj['rate'] = this.rating;
          reviewObj['content'] = this.text;

          // 星4以上のレビューのみプッシュ
          if (reviewObj['rate'] >= 4)
            reviews.push(reviewObj);
        });
      }

      // 取得したクチコミでHTML要素を生成
      for (const key in reviews) {
        const $li = $('<li class="review-content"></li>');
        $li.append('<h3 class="rate">' + '★'.repeat(reviews[key].rate) + '</h3>');
        $li.append('<h3 class="name">' + reviews[key].name + '</h3>');
        $li.append('<p class="text">' + reviews[key].content + '</p>');
        $js_review_grid.append($li);
      }

      apiRequestCnt++;
    });
  });
}

/**
 * アコーディオンメニュー小項目のクリックイベント
 * @param {*} element
 */
function onClickAcdContent(element) {
  if (!canClickAcdContent) return 0;

  $(".review-shop-name").text(element.textContent);
  $("#js-review-grid").empty();

  loadReview(element.dataset.place_id);

  $("#shop-geoloc-lat").val(element.dataset.lat);
  $("#shop-geoloc-lng").val(element.dataset.lng);

  // 連続クリック対策
  canClickAcdContent = false;
  setTimeout(function () {
    canClickAcdContent = true;
  }, INVALID_CLICK_DURATION);
}

$(function () {

  // 初回ページ読み込み時に表示するレビュー
  var _element = $(".acd-content:first");
  $(".review-shop-name").text(_element.text());
  $("#shop-geoloc-lat").val(_element.data("lat"));
  $("#shop-geoloc-lng").val(_element.data("lng"));
  loadReview(_element.data("place_id"));

  // 動的に追加されたアコーディオンメニュー小項目ボタン
  $("body").on("click", ".acd-content", function () {
    $(".btn--sq-arrow.shop-geoloc-btn.disabled").removeClass("disabled");
    onClickAcdContent(this);
  });

  // [マップで施設を見る] ボタン
  $("body").on("click", "#move-geoloc-btn", function () {
    var lat = $("#shop-geoloc-lat").val(),
      lng = $("#shop-geoloc-lng").val();
    if (lat == "" || lng == "") return 0;

    var position = panorama.getPosition();

    $(".btn--sq-arrow.shop-geoloc-btn").addClass("disabled");
    if ($("#save-geoloc-lat").val() == "") {
      $("#save-geoloc-lat").val(position.lat());
      $("#save-geoloc-lng").val(position.lng());
      $(".btn--sq-arrow.back-geoloc-btn.disabled").removeClass("disabled");
    }

    panorama.setPosition({
      lat: Number(lat),
      lng: Number(lng)
    });
    panorama.setPov({
      heading: 0,
      pitch: 0,
      zoom: 1
    });
    panorama.setZoom(1);

  });

  // [元の地点に戻る] ボタン
  $("body").on("click", "#back-geoloc-btn", function () {
    var lat = $("#save-geoloc-lat").val(),
      lng = $("#save-geoloc-lng").val();
    if (lat == "" || lng == "") return 0;

    $("#save-geoloc-lat").val("");
    $("#save-geoloc-lng").val("");
    $(".btn--sq-arrow.shop-geoloc-btn.disabled").removeClass("disabled");
    $(".btn--sq-arrow.back-geoloc-btn").addClass("disabled");

    panorama.setPosition({
      lat: Number(lat),
      lng: Number(lng)
    });
    panorama.setPov({
      heading: 0,
      pitch: 0,
      zoom: 1
    });
    panorama.setZoom(1);
  });

});