import React from 'react';
import s from './News.module.css';





const News = (props: any) => {

    return (
        <div>
            <div className={s.item}>
                <div>
                    <img src="https://art-fresco.ru/upload/webp/iblock/ea6/ydfxmg9inko24q3bhoo6t7mlhc0inuq6.webp"/>
                    {props.message}
                    <span>{props.likesCount}</span>


                </div>
            </div>
        </div>

);
}

export default News;
