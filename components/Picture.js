import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

function Picture({ image }) {
  const [src, setSrc] = useState()
  useEffect(() => {
    if (image) {
      var reader = new FileReader();
      reader.onload = function (e) {
        setSrc(e.target.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image])
  return (
    <div className="p-1 m-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">{src && <Image src={src} alt="image" width={200} height={200} />}</div>
  );
}

export default Picture;
