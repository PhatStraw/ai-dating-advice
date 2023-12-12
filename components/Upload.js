import { useState } from "react";

function Upload({ handleUploads, disabled }) {
  const [fileList, setFileList] = useState(null);
  const [lengthError, setErrorLength] = useState(null);

  const handleFileChange = (e) => {
    console.log(e.target.files)
    setFileList(e.target.files);
    if (!e.target.files) {
      return;
    } else if (e.target.files.length > 5) {
      setErrorLength(true);
      return;
    }
    setErrorLength(false);
    handleUploads([...e.target.files])
  };

  const handleUploadClick = () => {
    if (!fileList) {
      return;
    } else if (fileList.length > 5) {
      setErrorLength(true);
      return;
    }
    setErrorLength(false);
    handleUploads([...fileList])
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-xl m-5">Upload Screenshots of Your Dating Profile</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        multiple
      />

      {/* <button
        className="bg-red-200 text-white w-1/2"
        onClick={handleUploadClick}
        disabled={disabled}
      >
        Upload
      </button> */}
      <p>Images but be a png, jpeg, gif, or webp format</p>
      {lengthError && (
        <p className="text-red-500 text-white">You can only upload 5 photos</p>
      )}
    </div>
  );
}

export default Upload;
