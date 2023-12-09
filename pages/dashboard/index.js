import React, { useState } from "react";
import Upload from "components/components/Upload";
import Picture from "components/components/Picture";
import axios from "axios";
import { toBase64 } from "components/helpers/files";

export default function Home() {
  const [images, setImages] = useState([]);
  const [disableUpload, setDisableUpload] = useState(false);
  const [feedback, setFeedback] = useState("");
  const handleUploads = (_images) => {
    if (_images.length === 5) {
      setDisableUpload(true);
    } else {
      setDisableUpload(false);
    }
    setImages(_images);
  };
  const submitFeedback = async () => {
    const filesToUpload = await Promise.all(
      images.map((img) => {
        return toBase64(img);
      })
    );
    const response = await axios({
      url: "/api/upload",
      method: "POST",
      data: filesToUpload,
    });
    setFeedback(response.data.feedback);
  };
  return (
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1>Dashboard</h1>
      </div>
      <div className="flex justify-evenly">
        {images.map((img, i) => {
          return <Picture key={i} image={img} />;
        })}
      </div>
      <Upload handleUploads={handleUploads} disabled={disableUpload} />
      <button
        className="bg-green-600 text-white w-1/2 mt-10"
        onClick={submitFeedback}
        disabled={images.length === 0}
      >
        Submit for Feedback
      </button>
      {
        feedback && (
          <div>
            <h1>Feedback</h1>
            <p>{feedback}</p>
          </div>
        )
      }
    </div>
  );
}
