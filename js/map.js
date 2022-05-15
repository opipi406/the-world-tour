// ストリートビュー制御用のインスタンス
let panorama;

let map;

function initMap() {
  // インスタンスを生成するのはここだけ
  panorama = new google.maps.StreetViewPanorama(
    document.getElementById('map'), {
      position: {
        lat: 28.418247,
        lng: -81.581204
      },
      pov: {
        heading: 0,
        pitch: 0,
        zoom: 1
      },
    });

  document.getElementById('magic').onclick = function () {
    panorama.setPosition({
      lat: 28.418247,
      lng: -81.581204
    });
    panorama.setPov({
      heading: 0,
      pitch: 0,
      zoom: 1
    });
    panorama.setZoom(1);
    document.getElementById('save-geoloc-lat').value = "";
    document.getElementById('save-geoloc-lng').value = "";
  }

  document.getElementById('epcot').onclick = function () {
    panorama.setPosition({
      lat: 28.372131,
      lng: -81.549398
    });
    panorama.setPov({
      heading: 0,
      pitch: 0,
      zoom: 1
    });
    panorama.setZoom(1);
    document.getElementById('save-geoloc-lat').value = "";
    document.getElementById('save-geoloc-lng').value = "";
  }

  document.getElementById('animal').onclick = function () {
    panorama.setPosition({
      lat: 28.355650,
      lng: -81.590386
    });
    panorama.setPov({
      heading: 0,
      pitch: 0,
      zoom: 1
    });
    panorama.setZoom(1);
    document.getElementById('save-geoloc-lat').value = "";
    document.getElementById('save-geoloc-lng').value = "";
  }

}