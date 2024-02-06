import { useEffect, useState } from 'react';
import Image from '../assets/mount.png'
import getNews from '../api/News';

function ProfileExplain() {
    const [news, setNews] = useState([]);
    const [currentNewsIndex, setCurrentNewsIndex] = useState(0);

    useEffect(() => {
        const fetchNews = async () => {
            const newsData = await getNews();
            console.log(newsData);
            setNews(newsData);
        };

        fetchNews();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentNewsIndex((prevIndex) => (prevIndex + 1) % news.length);
        }, 100000);

        return () => clearInterval(interval);
    }, [news]);

    const currentNews = news[currentNewsIndex];
    const truncatedTitle =
        currentNews &&
        currentNews.title.split(' ').slice(0, 10).join(' ').concat('...');

    const truncatedDescription =
        currentNews &&
        currentNews.description.split('\n').slice(0, 10).join('\n').concat('...');

    return (
        <div>
            <div className="right-profile-up" style={{
                backgroundImage: `url(${currentNews?.urlToImage})`,
                width: '100%',
                height: '50vh',
                borderRadius: '20px ',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                margin: '0',
                padding: '0',
                position: 'relative',
            }}>
                <div style={{
                    backgroundColor: '#000000BD',
                    width: '100%',
                    height: '20%',
                    position: 'absolute',
                    top: '89.8%',
                    textAlign: 'center',
                    left: '50%',
                    color: '#fff',
                    transform: 'translate(-50%, -50%)', // Center the h2
                    margin: '0', // Remove any default margin
                    zIndex: '1',

                }}>
                    <h3 style={{
                        marginBottom: '-15px'

                    }}>{truncatedTitle} <br />

                    </h3>

                    <p>2-20-2023 | 07:35 PM</p>

                </div>
            </div>

            <div className="right-profile-down" style={{ padding: '0px 15px 15px 15px', fontSize: '14px', textAlign: 'left' }}>
                <p>{truncatedDescription}</p>

            </div>
        </div>
    )
}

export default ProfileExplain