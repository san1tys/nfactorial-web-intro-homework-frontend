import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH} from './images';

class Home extends React.Component {
    constructor(){
        super();

        this.state = {
            count: 0,
            content: '',
            tweets: [
                {
                    id: 0,
                    authorName: 'Free KZ today',
                    authorUsername: '@kz',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                    replies:200,
                    retweets: 1000,
                    likes:500,
                    topic: 'politics'
                },
                {
                    id: 1,
                    authorName: 'nFactorial',
                    authorUsername: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'Data analytics course starts today!',
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: 'education'
                },
                {
                    id:2,
                    authorName: 'nFactorial',
                    authorUsername: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'Black friday! Успей купить курсы сегодня!',
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: 'education'
                },
            ],
            filteredTweets: [
                {
                id: 0,
                authorName: 'Free KZ today',
                authorUsername: '@kz',
                img: KZ_IMG_PATH,
                content: 'UPDATE: Alibek says he has not considered becoming finance minister again',
                replies:200,
                retweets: 1000,
                likes:500,
                topic: 'politics'
            },
            {
                id: 1,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Data analytics course starts today!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            },
            {
                id:2,
                authorName: 'nFactorial',
                authorUsername: '@nfactorial',
                img: NFACTORIAL_IMG_PATH,
                content: 'Black friday! Успей купить курсы сегодня!',
                replies: 10000000,
                retweets: 1000000,
                likes: 500,
                topic: 'education'
            }
        ]
        }
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        })
    }

    addToTweets = () => {
        const newTweet = {
            id: this.state.tweets.length,
            authorName: 'Aruzhan',
            authorUsername: '@azhaubassar',
            img: PROFILE_IMG_PATH,
            content: this.state.content,
            replies: 0,
            retweets: 0,
            likes: 0,
            topic: 'blabla'
        }

        this.setState({
            tweets: [...this.state.tweets, newTweet ],
            content: ''
        })
    }

    deleteTweet = (id) => {
        // id = 0
        this.setState({
            tweets: this.state.tweets.filter(item=>item.id!==id)
        })
    }

    filterTweetsByTopic = (topic) => {
        console.log('filter', topic)
        this.setState({
            filteredTweets: this.state.tweets.filter(item=>item.topic === topic)
        })
    }
 
    render(){
        const { tweets, content } = this.state;

        return(
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>
                <NewTweet content={content} onChangeTextInput={this.onChangeTextInput} onTweet={this.addToTweets}/>
                {/* <div>
                    <button onClick={()=>this.filterTweetsByTopic('politics')}>{`Politics ${this.state.count}`}</button>
                    <button onClick={()=>this.filterTweetsByTopic('education')}>Education</button>
                    <button onClick={()=>this.filterTweetsByTopic('blabla')}>Blabla</button>
                </div> */}
                <TweetsList tweets={tweets} deleteTweet={this.deleteTweet}/>
            </div>
        )
    }
}

export default Home;