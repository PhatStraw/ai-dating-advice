import React, { useState } from "react";
import Upload from "components/components/Upload";
import Picture from "components/components/Picture";
import axios from "axios";
import { toBase64 } from "components/helpers/files";

export default function Home() {
  const [images, setImages] = useState([]);
  const [step, setStep] = useState(1);
  const [feedback, setFeedback] = useState("");

  const handleUploads = (_images) => {
    setImages(_images);
    if (_images.length > 0) {
      setStep(2);
    }
  };

  const uploadImages = async () => {
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
    setStep(3);
  };

  const goBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-full h-[100vh] items-center justify-center align-center">
        {step === 1 && <Upload handleUploads={handleUploads} />}
        {step === 2 && (
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((img, i) => {
                return <Picture key={i} image={img} />;
              })}
            </div>
            <button
              className="bg-blue-600 text-white w-full m-1 p-4 md:m-4  mt-10"
              onClick={uploadImages}
            >
              Upload Images
            </button>
            <button
              className="bg-red-600 text-white w-full m-1 p-4 md:m-4"
              onClick={goBack}
            >
              Go Back
            </button>
          </div>
        )}
        {step === 3 && feedback && (
          <div className="m-5">
            <h1>Feedback</h1>
            <p>{feedback}</p>
          </div>
        )}
      </div>
    </div>
  );
}
