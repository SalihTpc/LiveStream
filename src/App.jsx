import { useState } from "react";
import "./App.css";
import React from "react";
import ReactPlayer from "react-player";
import Pagination from "./components/Pagination";
import ModeSelection from "./components/ModeSelection";

const urls = [
  "https://trt.daioncdn.net/trtspor-yildiz/master_720p.m3u8?platform=izle&sid=5z4f5szidyl1&app=2c6690bb-4021-4292-8ddc-c93a3cf04a3a&ce=2",
  "https://tv-trt1.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trt2.medya.trt.com.tr/master_720.m3u8",
  "https://1508980f6c544f2db07e6f823b6473c8.mediatailor.eu-west-1.amazonaws.com/v1/manifest/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/603bc754-3137-48b1-ac0a-ad633b4fe1e2/0.m3u8",
  "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8",
  "https://trt.daioncdn.net/trtspor/master_720p.m3u8?platform=izle&sid=5z4fap94fxog&app=e9703d4d-1a6e-4e7f-ba45-20f229deb8cb&ce=2",
  "https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtworld.medya.trt.com.tr/master_1080.m3u8",
  "https://www.youtube.com/watch?v=SFN8ie4ZMQ0",
  "https://www.youtube.com/watch?v=XEJM4Hcgd3M",
  "https://www.youtube.com/watch?v=45v8Z2xUhhM",
  "https://www.youtube.com/watch?v=T1S5ZKS7NS4",
  "https://www.youtube.com/watch?v=36cU_4e2Pio",
  "https://www.youtube.com/watch?v=-Lrxv1_i3qc",
  "https://www.youtube.com/watch?v=N27WCrvM4tU",
  "https://tv-trt1.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trt2.medya.trt.com.tr/master_720.m3u8",
  "https://1508980f6c544f2db07e6f823b6473c8.mediatailor.eu-west-1.amazonaws.com/v1/manifest/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/603bc754-3137-48b1-ac0a-ad633b4fe1e2/0.m3u8",
  "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8",
  "https://trt.daioncdn.net/trtspor/master_720p.m3u8?platform=izle&sid=5z4fap94fxog&app=e9703d4d-1a6e-4e7f-ba45-20f229deb8cb&ce=2",
  "https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtworld.medya.trt.com.tr/master_1080.m3u8",
  "https://www.youtube.com/watch?v=IkmLXvBfVv0",
  "https://www.youtube.com/watch?v=F0GOOP82094",
  "https://www.youtube.com/watch?v=Jm8wRjD3xVA",
  "https://www.youtube.com/watch?v=ZPSRPo-3KGI",
  "https://www.youtube.com/watch?v=_HGQZlK08gQ",
  "https://www.youtube.com/watch?v=BJ3Yv572V1A",
  "https://www.youtube.com/watch?v=Li3Dvqlo5uE",
  "https://tv-trt1.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trt2.medya.trt.com.tr/master_720.m3u8",
  "https://1508980f6c544f2db07e6f823b6473c8.mediatailor.eu-west-1.amazonaws.com/v1/manifest/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/603bc754-3137-48b1-ac0a-ad633b4fe1e2/0.m3u8",
  "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8",
  "https://trt.daioncdn.net/trtspor/master_720p.m3u8?platform=izle&sid=5z4fap94fxog&app=e9703d4d-1a6e-4e7f-ba45-20f229deb8cb&ce=2",
  "https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtworld.medya.trt.com.tr/master_1080.m3u8",
  "https://www.youtube.com/watch?v=SFN8ie4ZMQ0",
  "https://www.youtube.com/watch?v=XEJM4Hcgd3M",
  "https://www.youtube.com/watch?v=45v8Z2xUhhM",
  "https://www.youtube.com/watch?v=T1S5ZKS7NS4",
  "https://www.youtube.com/watch?v=36cU_4e2Pio",
  "https://www.youtube.com/watch?v=-Lrxv1_i3qc",
  "https://www.youtube.com/watch?v=tkDUSYHoKxE",
  "https://tv-trt1.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trt2.medya.trt.com.tr/master_720.m3u8",
  "https://1508980f6c544f2db07e6f823b6473c8.mediatailor.eu-west-1.amazonaws.com/v1/manifest/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/603bc754-3137-48b1-ac0a-ad633b4fe1e2/0.m3u8",
  "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8",
  "https://trt.daioncdn.net/trtspor/master_720p.m3u8?platform=izle&sid=5z4fap94fxog&app=e9703d4d-1a6e-4e7f-ba45-20f229deb8cb&ce=2",
  "https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8",
  "https://tv-trtworld.medya.trt.com.tr/master_1080.m3u8",
  "https://www.youtube.com/watch?v=SFN8ie4ZMQ0",
  "https://www.youtube.com/watch?v=F0GOOP82094",
  "https://www.youtube.com/watch?v=Jm8wRjD3xVA",
  "https://www.youtube.com/watch?v=ZPSRPo-3KGI",
  "https://www.youtube.com/watch?v=_HGQZlK08gQ",
  "https://www.youtube.com/watch?v=BJ3Yv572V1A",
];

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [mode, setMode] = useState(false);

  function chunkArray(array, chunkSize) {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  }
  const paginatedList = chunkArray(urls, 16);
  const currentItems = paginatedList[currentPage - 1] || [];

  // const trtUrl = [
  //   "https://tv-trt1.medya.trt.com.tr/master_720.m3u8",
  //   "https://tv-trt2.medya.trt.com.tr/master_720.m3u8",
  //   "https://1508980f6c544f2db07e6f823b6473c8.mediatailor.eu-west-1.amazonaws.com/v1/manifest/80dbfc318ab6b980679b32095ba497236de6d2f9/TRT-Belgesel/603bc754-3137-48b1-ac0a-ad633b4fe1e2/0.m3u8",
  //   "https://tv-trthaber.medya.trt.com.tr/master_720.m3u8",
  //   "https://trt.daioncdn.net/trtspor/master_720p.m3u8?platform=izle&sid=5z4fap94fxog&app=e9703d4d-1a6e-4e7f-ba45-20f229deb8cb&ce=2",
  //   "https://tv-trtmuzik.medya.trt.com.tr/master_720.m3u8",
  //   "https://tv-trtcocuk.medya.trt.com.tr/master_720.m3u8",
  //   "https://tv-trtturk.medya.trt.com.tr/master_720.m3u8",
  // ];

  return (
    <div className="flex items-center justify-center flex-wrap gap-1 relative">
      {mode
        ? currentItems.map((url, index) => (
            <ReactPlayer
              key={index}
              width={"400px"}
              height={"225px"}
              playing={true}
              controls={true}
              volume={0.0}
              url={url}
            />
          ))
        : urls.map((url, index) => (
            <ReactPlayer
              width={"200px"}
              height={"112.5px"}
              key={index}
              playing={true}
              controls={true}
              volume={0.0}
              url={url}
            />
          ))}
      <ModeSelection setMode={setMode} />
      {mode && (
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      )}
    </div>
  );
};

export default App;
