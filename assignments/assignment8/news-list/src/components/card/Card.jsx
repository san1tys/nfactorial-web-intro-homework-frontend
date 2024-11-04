import './Card.css';
import avatar from '../../images/avatar.png';

export default function Card({ author, topic, date, title, description, readTime, imgUrl }) {
    return (
        <aside className="card">
            <div className="wrapper">
                <div className="wrapper-left">
                    <div className="left-top">
                        <div className="top-text">
                            <img className="avatar" src={avatar} alt="avatar" />
                            <p className="autor-text">{author} <span>in </span>{topic} · <span>{date}</span></p>
                        </div>
                        <div className="mid-text">
                            <h2 className="mid-title">{title}</h2>
                            <p className="mid-desc">{description}</p>
                        </div>
                    </div>

                    <div className="left-bottom">
                        <div className="bottom-wrap">
                            <button className="btn-lang">{topic}</button>
                            <p className="bottom-text">{readTime} <span>·</span> Selected for you</p>
                        </div>
                        <div className="bottom-wrap">
                            <div className="wrap-square"></div>
                            <div className="wrap-square"></div>
                            <div className="wrap-square"></div>
                        </div>
                    </div>
                </div>
                <img className="right-img" src={imgUrl} alt="content" />
            </div>
            <div className="line"></div>
        </aside>
    );
}
