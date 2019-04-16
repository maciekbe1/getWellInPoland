import React, {useEffect, useState} from 'react'

const Info = props => {
    const [elem, setElem] = useState(0)
    const elementRef = React.useRef();

    useEffect(() => {
        const height = elementRef.current.clientHeight;
        const result = Math.ceil(height / 10);
        setElem(result);

    },[]);
    return(
        <div ref={elementRef} style={{gridRowEnd : `span ${elem}`}} className="contact-info-list-text">
            <h4>{props.text.post_title}</h4>
            <p>{props.text.post_content}</p>
        </div>
    )
};

export default Info