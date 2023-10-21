import '../styles/articles.css';
import Nav from '../components/nav';

function Articles() {


    return (
        <>
            <Nav />

            <main>
                <h1 className='title'>Articles</h1>


                <div className='articles'>
                    <a href='/articles/chat-application-using-websockets'>
                        <span>Creating a chat application using WebSockets</span>
                        <span>October 18, 2023</span>
                        <span>Create a chat application using ExpressJS and WebSockets. Discover how to harness the dynamic capabilities of real-time communication and build a chat platform.</span>
                    </a>
                </div>
            </main>
        </>
    )
}

export default Articles
