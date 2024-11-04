import Footer from '../Footer/Footer';
import Header from '../header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faThumbsUp, faBookmark, faComment } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './CardPage.css';

import avatar from '../../images/avatar.png';
import bannerImg from '../../images/1.png'

export default function CardPage({
    authorName = "Author's name",
    date = "7 July",
    readTime = "12 min read",
    isMemberOnly = true,
    title = "7 Practical CSS Tips",
    subtitle = "How product designers can break from the status quo and help our planet",
    likes = 180,
    comments = 12
}) {
    return (
        <>
            <Header>
                <button className='close-modal'>
                    <FontAwesomeIcon className="left-arrow" icon={faArrowLeft} />
                </button>
            </Header>
            <div className="container">
                <div className='modal-article'>
                    <div className='article-header'>
                        <div className='author-info'>
                            <img className="ava" src={avatar} alt="author" />
                            <div className='author-details'>
                                <p className='author-name'>{authorName}</p>
                                <div className='date-info'>
                                    <p>{date} · {readTime} {isMemberOnly && "· Member-only"}</p>
                                </div>
                            </div>
                        </div>
                        <div className='social-links'>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
                            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                        </div>
                    </div>

                    <div className='article-content'>
                        <h2 className='article-title'>{title}</h2>
                        <h3 className='article-subtitle' >{subtitle}</h3>
                        <img className='article-img' src={bannerImg} alt="article banner" />
                        <h2 className='article-subheader'>Subheader</h2>
                        <p>How long are you awake in the morning before you go online? Perhaps it’s while you’re still lying in bed, using a news feed or social media as the needed stimulant to push you out from under the covers. Or maybe you wait to open your device until after a warm shower and cup of coffee. If you use sleep tracking apps, you might say you never signed off in the first place.<br></br><br></br>
                            And, like millions of others during the pandemic, the internet is probably what enabled you to stay in touch with family, or complete entire years of work and/or school remotely. If this sounds familiar, then you live in a part of the world where an internet connection now counts as an essential utility — one that’s as easy to take for granted as the natural gas heating your shower water or the electricity powering your coffee maker.<br></br><br></br>
                            But if you think we’re hyperconnected today, just wait.Globally, just over 55 % of today’s households have an internet connection.This gap between the internet haves and have - nots is referred to as the digital divide, and access is skewed toward richer nations.The gap is projected to close in the next decade as billions of homes connect to the internet for the first time and by 2030 it’s estimated that the technology industry could account for 20 % of the global electricity demand.This presents a troublesome dichotomy.On one hand, it supports livelihoods, educations, and bolsters the global economy; on the other hand, the increased usage of the apps, websites, and services that we build will place an even greater strain on our already - overloaded power grids.
                        </p>
                    </div>

                    <div className='article-actions'>
                        <div className='like-comment'>
                            <div className='like'>
                                <FontAwesomeIcon icon={faThumbsUp} />
                                <p>{likes}</p>
                            </div>
                            <div className='comments'>
                                <FontAwesomeIcon icon={faComment} />
                                <p>{comments}</p>
                            </div>
                        </div>
                        <div className='save'>
                            <FontAwesomeIcon icon={faBookmark} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="line"></div>
            <Footer />
        </>
    );
}
