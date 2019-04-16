import React from 'react'
import '../../assets/styles/skeleton.scss'

const SkeletonText = () => {
    return(
        <div className="container">
            <div className="skeleton-img"></div>
            <div className="skeleton-title"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <br/>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
        </div>
    )
};

export default SkeletonText