import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizzes = useLoaderData();
    const allquizzes = quizzes.data.questions;    

    return (
        <div>
            {
                allquizzes.map(eachquiz => <Questions
                key={eachquiz.id}
                eachquiz={eachquiz}
                ></Questions>)
            }
        </div>
    );
};

export default Quiz;