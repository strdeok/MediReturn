"use client";

// import useGetNowLocation from "@/util/getNowLocation";
import { useEffect } from "react";

export default function KakaoMap() {
  //   const location = useGetNowLocation();

  // 샘플 데이터
  const location = {
    latitude: 37.37792386357544,
    longitude: 126.63472694185295,
  };

  useEffect(() => {
    if (!location) return;

    const kakaoMapScript = document.createElement("script");
    kakaoMapScript.async = false;
    kakaoMapScript.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_MAP_KEY}&autoload=false`;
    document.head.appendChild(kakaoMapScript);

    const onLoadKakaoAPI = () => {
      // 맵 생성
      window.kakao.maps.load(() => {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(
            location?.latitude,
            location?.longitude
          ),
          level: 3,
        };

        const map = new window.kakao.maps.Map(container, options);

        // 마커 생성
        const imageSrc =
            "https://cdn-icons-png.flaticon.com/512/6570/6570902.png", // 마커이미지의 주소
          imageSize = new window.kakao.maps.Size(64, 69),
          imageOption = { offset: new window.kakao.maps.Point(27, 69) };

        const markerImage = new window.kakao.maps.MarkerImage(
            imageSrc,
            imageSize,
            imageOption
          ),
          markerPosition = new window.kakao.maps.LatLng(
            location?.latitude,
            location?.longitude
          );

        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage,
        });

        marker.setMap(map);

        // 폴리라인 생성
        // 선을 구성하는 좌표 배열입니다. 이 좌표들을 이어서 선을 표시합니다
        const linePath = [
          new window.kakao.maps.LatLng(37.378096126580786, 126.63507329150045),
          new window.kakao.maps.LatLng(37.37975936374476, 126.63244011662495),
          new window.kakao.maps.LatLng(37.38563985584139, 126.6387234751049),
        ];

        // 지도에 표시할 선을 생성합니다
        const polyline = new window.kakao.maps.Polyline({
          path: linePath, // 선을 구성하는 좌표배열 입니다
          strokeWeight: 5, // 선의 두께 입니다
          strokeColor: "#FFAE00", // 선의 색깔입니다
          strokeOpacity: 1, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
        });

        // 지도에 선을 표시합니다
        polyline.setMap(map);
      });
    };

    kakaoMapScript.addEventListener("load", onLoadKakaoAPI);
  }, [location]);

  return <div id="map" className="w-full h-11/12 "></div>;
}
