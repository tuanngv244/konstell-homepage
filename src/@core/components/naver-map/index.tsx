//@ts-nocheck
'use client';
import { FC, useEffect } from 'react';

type Props = {};

const NaverMap: FC<Props> = () => {
  useEffect(() => {
    let map = new naver.maps.Map('map', {
      center: new naver.maps.LatLng(37.5665, 126.978), // default center
      zoom: 15,
    });

    const address = '#411, 106 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul, 07343 Korea';

    naver.maps.Service.geocode({ query: address }, function (status, response) {
      if (status !== naver.maps.Service.Status.OK) {
        return alert('Geocoding error!');
      }

      var result = response.v2.addresses[0];
      var coord = new naver.maps.LatLng(result.y, result.x);

      map.setCenter(coord);

      var marker = new naver.maps.Marker({
        position: coord,
        map: map,
      });

      var infoWindow = new naver.maps.InfoWindow({
        content: '<div style="padding:10px;">' + address + '</div>',
      });

      naver.maps.Event.addListener(marker, 'click', function () {
        infoWindow.open(map, marker);
      });
    });
  }, []);
  return <div id="map"></div>;
};
