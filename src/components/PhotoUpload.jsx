import React, { useState } from "react";

const PhotoUpload = () => {
    const [files, setFiles] = useState([]);
    const [fileDragging, setFileDragging] = useState(null);
    const [fileDropping, setFileDropping] = useState(null);

    const humanFileSize = (size) => {
        const i = Math.floor(Math.log(size) / Math.log(1024));
        return (
            (size / Math.pow(1024, i)).toFixed(2) * 1 +
            " " +
            ["B", "kB", "MB", "GB", "TB"][i]
        );
    };

    const removeFile = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        let removed, add;
        const updatedFiles = [...files];

        removed = updatedFiles.splice(fileDragging, 1);
        updatedFiles.splice(fileDropping, 0, ...removed);

        setFiles(updatedFiles);
        setFileDropping(null);
        setFileDragging(null);
    };

    const handleDragEnter = (e) => {
        e.preventDefault();
        const targetElem = e.target.closest("[draggable]");
        setFileDropping(targetElem.getAttribute("data-index"));
    };

    const handleDragStart = (e) => {
        setFileDragging(
            e.target.closest("[draggable]").getAttribute("data-index")
        );
        e.dataTransfer.effectAllowed = "move";
    };

    const loadFile = (file) => {
        const blobUrl = URL.createObjectURL(file);
        return blobUrl;
    };

    const addFiles = (e) => {
        let fileList = [...e.target.files];
        const allowedTypes = ["image/jpeg", "image/png", "image/gif"]; // Add more allowed image types if needed

        let invalidFilesDetected = false; // Flag to track if invalid files were detected

        fileList.forEach((file) => {
            if (!allowedTypes.includes(file.type)) {
                // Display an error message for each invalid file type
                alert(
                    `File '${file.name}' is not allowed. Please select a valid image file.`
                );
                invalidFilesDetected = true; // Set the flag to true
            }
        });

        if (!invalidFilesDetected) {
            // No invalid files detected, add files to state
            const updatedFiles = [...files, ...fileList];
            setFiles(updatedFiles);
        }

        // Clear the file input after processing files
        e.target.value = "";
    };

    return (
        <div className="p7 rounded w-9/12 mx-auto">
            <div
                className="relative flex flex-col p-4 text-gray-400 border border-gray-200 rounded"
                onDrop={handleDrop}
                onDragOver={(e) => e.preventDefault()}
            >
                <div
                    className="relative flex flex-col text-gray-400 border border-gray-200 border-dashed rounded cursor-pointer"
                    onDragEnter={handleDragEnter}
                    onDragLeave={() => setFileDropping(null)}
                >
                    <input
                        accept="*"
                        type="file"
                        multiple
                        className="absolute inset-0 z-50 w-full h-full p-0 m-0 outline-none opacity-0 cursor-pointer"
                        onChange={addFiles}
                        title=""
                    />

                    <div className="flex flex-col items-center justify-center py-10 text-center">
                        <svg
                            className="w-6 h-6 mr-1 text-current-50"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            />
                        </svg>
                        <p className="m-0">
                            Drag your images here or click in this area.
                        </p>
                    </div>
                </div>

                {files.length > 0 && (
                    <div
                        className="grid grid-cols-2 gap-4 mt-4 md:grid-cols-6"
                        onDragOver={(e) => e.preventDefault()}
                        onDrop={handleDrop}
                    >
                        {files.map((file, index) => (
                            <div
                                key={index}
                                className={`relative flex flex-col items-center overflow-hidden text-center bg-gray-100 border rounded cursor-move select-none ${
                                    fileDragging === index
                                        ? "border-blue-600"
                                        : ""
                                }`}
                                style={{ paddingTop: "100%" }}
                                draggable="true"
                                onDragStart={handleDragStart}
                                onDragEnd={() => setFileDragging(null)}
                                data-index={index}
                            >
                                <button
                                    className="absolute top-0 right-0 z-50 p-1 bg-white rounded-bl focus:outline-none"
                                    type="button"
                                    onClick={() => removeFile(index)}
                                >
                                    <svg
                                        className="w-4 h-4 text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </button>
                                {(file.type.includes("application/") ||
                                    file.type === "") && (
                                    <svg
                                        className="absolute w-12 h-12 text-gray-400 transform top-1/2 -translate-y-2/3"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                        />
                                    </svg>
                                )}
                                {file.type.includes("image/") && (
                                    <img
                                        className="absolute inset-0 z-0 object-cover w-full h-full border-4 border-white"
                                        src={loadFile(file)}
                                    />
                                )}

                                <div className="absolute bottom-0 left-0 right-0 flex flex-col p-2 text-xs bg-white bg-opacity-50">
                                    <span className="w-full font-bold text-gray-900 truncate">
                                        {file.name}
                                    </span>
                                    <span className="text-xs text-gray-900">
                                        {humanFileSize(file.size)}
                                    </span>
                                </div>

                                <div
                                    className="absolute inset-0 z-40 transition-colors duration-300"
                                    onDragEnter={handleDragEnter}
                                    onDragLeave={() => setFileDropping(null)}
                                    style={{
                                        backgroundColor:
                                            fileDropping === index &&
                                            fileDragging !== index
                                                ? "rgba(173, 216, 230, 0.5)"
                                                : "",
                                    }}
                                ></div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default PhotoUpload;
