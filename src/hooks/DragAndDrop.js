import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { BiImageAdd } from 'react-icons/bi';
import { FcUpload } from 'react-icons/fc';

const fileTypes = ["JPG", "PNG", "GIF"];

function DragAndDrop({ file, setFile, ...props }) {
    const [isDroped, setIsDroped] = useState(false);

    const handleChange = (file) => {
        setFile(file);
        setIsDroped(true);
        console.log(file);
    };

    return (
        <FileUploader handleChange={handleChange} types={fileTypes} hoverTitle=".">
            <div className={isDroped ? "drop_zone droped" : "drop_zone"} >
                {isDroped ?
                    <>
                        <h1><FcUpload />Файл загружен</h1>
                        <p>{file.name}</p>
                    </>
                    :
                    <>
                        <BiImageAdd />
                        <h1>Изображение книги</h1>
                        <span>Перетащите или кликните</span>
                    </>}
            </div>
        </FileUploader >
    );
}

export default DragAndDrop;