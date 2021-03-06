import loadApi from "./loadAPI";

export default function initMap() {
  const url = 'https://api-maps.yandex.ru/2.1/?apikey=b0b15954-57af-4901-b78c-0ad5bd94cda8&lang=ru_RU';

  const maps = Array.from(document.querySelectorAll('.js-map'));

  if (maps) {
    if (window.matchMedia("(min-width: 767px)").matches) {
      const options = {
        threshold: [0, 0.25, 0.5, 0.75, 1]
      };
      const callback = function (entries, observer) {
        entries.forEach(entry => {
          if (entry.intersectionRatio > (entry.target.hasAttribute('data-intersection-ratio') ? Number(entry.target.getAttribute('data-intersection-ratio')) : 0.5)) {
            loadApi('yandex', url, () => { ymaps.ready(init); });
          };
        });
      };
      const observer = new IntersectionObserver(callback, options);

      if (document.querySelector(".js-map-laoding")) {
        observer.observe(document.querySelector(".js-map-laoding"))
      }
    }
  }

  function init() {
    const pin = {
      preset: 'islands#icon',
      iconColor: "red",
    };

    const mapElement = document.querySelector(".js-map");

    if (!mapElement) return;

    const coords = mapElement.hasAttribute("data-coords")
      ? mapElement.getAttribute("data-coords").split(",")
      : [];

    const center = mapElement.hasAttribute("data-center")
      ? mapElement.getAttribute("data-center").split(",")
      : [];

    let mapInstance = new ymaps.Map(mapElement, {
      center: center,
      zoom: 14,
      controls: [],
    });

    let zoomControl = new ymaps.control.ZoomControl({
      options: {
        size: "small",
        position: {
          right: 20,
          bottom: 60,
        },
      },
    });
    mapInstance.controls.add(zoomControl);

    mapInstance.behaviors.disable("scrollZoom");

    let objectManager = new ymaps.ObjectManager({
      clusterize: false,
      clusterHasBalloon: false,
      geoObjectOpenBalloonOnClick: false,
    });
    mapInstance.geoObjects.add(objectManager);

    let objectToAdd = {
      id: coords.join(","),
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coords,
      },
      options: {
        ...pin,
      },
    };
    objectManager.add(objectToAdd);
  }
}
