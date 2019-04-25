import React, {useEffect, useState} from "react";
import axios from "axios";
import { HashLoader } from 'react-spinners';
import SkeletonText from "../skeletons/SkeletonText";
import Info from '../contact/Info'
import { getToken } from '../../api/api'
import {Link} from "react-router-dom";

const Contact = () => {
    const [contactText, setContactText] = useState([]);
    const [action, setAction] = useState('');
    useEffect(() => {
        const userData = process.env.REACT_APP_USER_DATA_KEY;
        const contact = 'https://qang.bpower2.com/index.php/restApi/request/model/WwwPosts/params/{"link_id":7}';

        getToken(userData).then(res => {
                axios.get(contact, {
                    headers: {
                        'Authorization': res.data.token
                    }
                }).then(res => {

                    let arr = []
                    res.data.data.objects.map(item => {
                        arr.push({
                            id: item.id,
                            en: item.post_content
                        })
                        return null
                    })

                    // console.log(arr)
                    let contactArr = [];
                    contactArr.push(res.data.data.objects);
                    setTimeout(()=> {
                        setAction(" text-list-grid");
                    },1);
                    return setContactText(contactArr);
                })
            });
    }, []);


    return(
        <div className="contact">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <div className="container d-flex flex-wrap">
                        <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Contact</li>
                    </div>
                </ol>
            </nav>
            <div className="container">
                {
                    contactText.length ?
                        <div className={"text-list" + action}>{
                            contactText[0].map((item, index) => {
                                // switch (index) {
                                //     //title of content
                                //     case 0:
                                //         return <Info key={index} text={item} />;
                                //     //content
                                //     case 1:
                                //         return <Info key={index} text={item}/>;
                                //     //if add more content than we predict
                                //     default:
                                //         return <Info key={index} text={item}/>
                                // }
                                return <Info key={index} text={item} />;
                            })

                        }
                        </div> : <div>
                            <SkeletonText/>
                            <div className="spinner-container">
                                <div className="spinner-position">
                                    <HashLoader
                                        sizeUnit={"px"}
                                        size={70}
                                        margin={"6px"}
                                        color={'#fff'}
                                    />
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
};

export default Contact