import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryNews = useLoaderData();

    return (
        <div>
            {
                id &&
                <h2>This category news: {categoryNews.length}</h2>
            }

            <div>
                {
                    categoryNews.map(news =>
                        <NewsCard
                            key={news._id}
                            news={news}
                        />
                    )
                }
            </div>
        </div>
    );
};

export default Category;