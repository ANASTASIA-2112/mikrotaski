import React from 'react';
import s from './Post.module.css';
import {PostType} from "../../../../redux/state";




const Post :React.FC<PostType> = (props) => {

    return (
            <div className={s.item}>
                    <img src="https://art-fresco.ru/upload/webp/iblock/ea6/ydfxmg9inko24q3bhoo6t7mlhc0inuq6.webp"/>
                    {props.message}
                <div>
                        <span>likeCount{props.likeCount}</span>

                </div>

    </div>




    );
}

export default Post;
