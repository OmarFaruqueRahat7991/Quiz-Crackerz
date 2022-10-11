import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from '../Topic/Topic';

const Topics = () => {
    const loaderData = useLoaderData();
    const topics = loaderData.data;
    console.log(topics);
    
    return (
        <div>
            <h1 className="text-3xl font-bold underline">This Is Topics</h1>
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