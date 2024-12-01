import Tweet from './Tweet';

export default function TweetsList({ tweets, deleteTweet }) {
    if (tweets.length === 0) {
        return <p className="text-center my-3">No tweets available</p>;
    }

    return (
        <div className="tweets-list">
            {tweets.map((tweet) => (
                <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
            ))}
        </div>
    );
}
