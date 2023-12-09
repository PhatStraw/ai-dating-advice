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
    <div>{src && <Image src={src} alt="image" width={200} height={200} />}</div>
  );
}

export default Picture;
