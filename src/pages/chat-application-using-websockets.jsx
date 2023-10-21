import '../styles/article.css';
import Nav from '../components/nav';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';
import bash from 'react-syntax-highlighter/dist/esm/languages/hljs/bash';
import vs2015 from 'react-syntax-highlighter/dist/esm/styles/hljs/vs2015';

function Article() {

    SyntaxHighlighter.registerLanguage('javascript', js);
    SyntaxHighlighter.registerLanguage('bash', bash);

    let codeStrings = [`npm init -y`, `"scripts": {
    ...
    "dev": "nodemon index.js"
}`, 'npm install -g nodemon', 'npm install express path']


    return (
        <>
            <Nav />

            <main>
                <h1 className='title'>Creating a chat application using WebSockets</h1>

                <iframe className='video-player' src="https://www.youtube.com/embed/jr0qiim29Xs" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                {/*<p className='text'>This article is a supplementary guide to my recent YouTube video on creating a chat application using WebSockets.</p>
                <p className='text'>After opening a new project in your code editor and creating a new instance of the terminal, we need to initialise our project.</p>

                <SyntaxHighlighter language='bash' style={vs2015}>
                    {codeStrings[0]}
                </SyntaxHighlighter>

                <p className='text'>Appending -y to the end of the command will set the default value for all fields.<br />
                    Once the command is executed, this will create a package.json file with basic information of our project.
                    <br />When you have opened the package.json file it is recommended to use a package called nodemon to auto-refresh the server when changes are saved.
                    <br />This can be done by adding the following script to your package.json file:</p>

                <SyntaxHighlighter language='javascript' style={vs2015}>
                    {codeStrings[1]}
                </SyntaxHighlighter>

                <p className='text'>If you haven&apos;t installed nodemon before globally, you need to do that by running the npm install command:</p>

                <SyntaxHighlighter language='bash' style={vs2015}>
                    {codeStrings[2]}
                </SyntaxHighlighter>

                <p className='text'>Now we can install our dependencies for our ExpressJS app.</p>
                <SyntaxHighlighter language='bash' style={vs2015}>
                    {codeStrings[3]}
    </SyntaxHighlighter>*/}

            </main>
        </>
    )
}

export default Article
