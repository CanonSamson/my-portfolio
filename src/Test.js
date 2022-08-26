import React, { useState, useEffect } from 'react';
import client from './data'


const Test = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        client.get().then((response) => {
            setPosts(response.data);

        });
    }, []);
    return (
        <div>
            <p>
                {posts.slips0}
            </p>
        </div>
    );
}

export default Test;