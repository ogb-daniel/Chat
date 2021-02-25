import { ChatEngine } from 'react-chat-engine';
import './App.css'
import ChatFeed from './components/ChatFeed.js'
import LoginForm from './components/LoginForm';

const App = () => {
    if (!localStorage.getItem('username')) {
        return <LoginForm />
    }

    return ( 
        <ChatEngine 
            height="100vh"
            projectID="345fdfed-4a8f-46ad-add2-776add0f159f"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
     );
}
 
export default App;