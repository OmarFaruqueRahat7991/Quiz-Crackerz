import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';
import './Topics.css';



const Topics = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;
    console.log(topics);
    
    return (
        <div className='topics-container'>
            
            {
                topics.map(topic => <Topic
                key={topic.id} 
                topic={topic}
                ></Topic>)
            }
            
        </div>
    );
};

export default Topics;