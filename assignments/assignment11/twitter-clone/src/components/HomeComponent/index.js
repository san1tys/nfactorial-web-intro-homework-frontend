import React from "react";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH, PROFILE_IMG_PATH } from './images';

class Home extends React.Component {
    constructor() {
        super();

        this.state = {
            count: 0,
            content: '',
            searchQuery: '',
            tweets: [
                {
                    id: 0,
                    authorName: 'Free KZ today',
                    authorUsername: '@kz',
                    img: KZ_IMG_PATH,
                    content: 'UPDATE: Alibek says no.',
                    replies: 200,
                    retweets: 1000,
                    likes: 500,
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
                    id: 2,
                    authorName: 'nFactorial',
                    authorUsername: '@nfactorial',
                    img: NFACTORIAL_IMG_PATH,
                    content: 'Black friday! Успей купить курсы сегодня!',
                    replies: 10000000,
                    retweets: 1000000,
                    likes: 500,
                    topic: 'education'
                },
            ]
        };
    }

    onChangeTextInput = (e) => {
        this.setState({
            content: e.target.value
        });
    };


    onSearchInputChange = (e) => {
        this.setState({
            searchQuery: e.target.value.toLowerCase()
        });
    };

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
        };

        this.setState({
            tweets: [...this.state.tweets, newTweet],
            content: ''
        });
    };

    deleteTweet = (id) => {
        this.setState({
            tweets: this.state.tweets.filter(item => item.id !== id)
        });
    };

    getFilteredTweets = () => {
        const { tweets, searchQuery } = this.state;


        if (!searchQuery) {
            return tweets;
        }

        return tweets.filter(tweet =>
            tweet.content.toLowerCase().includes(searchQuery) ||
            tweet.authorName.toLowerCase().includes(searchQuery) ||
            tweet.authorUsername.toLowerCase().includes(searchQuery)
        );
    };

    render() {
        const { content, searchQuery } = this.state;


        const filteredTweets = this.getFilteredTweets();

        return (
            <div className="w-50 mt-3">
                <h5 className="mx-3">Home</h5>


                <input
                    type="text"
                    placeholder="Search tweets..."
                    value={searchQuery}
                    onChange={this.onSearchInputChange}
                    className="form-control my-3"
                />


                <NewTweet
                    content={content}
                    onChangeTextInput={this.onChangeTextInput}
                    onTweet={this.addToTweets}
                />

                <TweetsList tweets={filteredTweets} deleteTweet={this.deleteTweet} />
            </div>
        );
    }
}

export default Home;
