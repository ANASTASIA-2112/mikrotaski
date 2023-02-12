import React from 'react';
import s from './Post.module.css';





const News = (props: any) => {

    return (
        <div>
            <div className={s.item}>
                <div>
                    <img src="https://skrapxit.ru/image/cache/catalog/demo/newcatalog/04850-800x800.jpg" alt={"avatar"}/>
                    {props.message}
                    <span>like</span>
                </div>
            </div>
            <div className={s.item}>
                <div>
                    <img src="https://art-fresco.ru/upload/webp/iblock/ea6/ydfxmg9inko24q3bhoo6t7mlhc0inuq6.webp" alt={"avatar"}/>
                    {props.message}
                    <span>like</span> {props.likesCount}


                </div>
            </div>
        </div>

);
}

export default News;
