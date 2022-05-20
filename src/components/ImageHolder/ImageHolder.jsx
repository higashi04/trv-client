import React from "react";

const ImageHolder = props => {
    return(
        <img src={props.photo.url} alt="person" />
    )
}

export default ImageHolder;