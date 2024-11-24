import { KZ_IMG_PATH, NFACTORIAL_IMG_PATH } from "../images"
import Tweet from './Tweet';


export default function TweetsList({tweets, deleteTweet}){

    return tweets.map((tweet)=> <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet}/>)
}