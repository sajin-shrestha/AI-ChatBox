import {
  ChatContainer,
  MainContainer,
  Message,
  MessageInput,
  MessageList,
  TypingIndicator,
} from '@chatscope/chat-ui-kit-react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css'
import { useState } from 'react'
import './App.css'

const API_KEY = 'sk-proj-6Mn8Hw5eH4FG30gUpIhUT3BlbkFJxcVJ4AYNRpvCRZS09785'

function App() {
  const [typing, setTyping] = useState(false)
  const [messages, setMessages] = useState([
    {
      message: 'Hello, I am AI model.',
      sender: 'Chatgpt',
      direction: 'incomming',
    },
  ])

  const handleSend = async (message) => {
    const newMessage = {
      message: message,
      sender: 'user',
      direction: 'outgoing',
    }

    const newMessages = [...messages, newMessage] // all old messages + new message

    // update message state
    setMessages(newMessages)

    // set typing indicator
    setTyping(true)

    // Simulate an AI response
    // setTimeout(() => {
    //   const aiResponse = {
    //     message: 'This is a response from AI.',
    //     sender: 'Chatgpt',
    //     direction: 'incoming', // AI response is incoming
    //   }
    //   setMessages((prevMessages) => [...prevMessages, aiResponse])
    //   setTyping(false)
    // }, 1000)

    //process message to chatgpt (send it over and see the response)
    await processMessageToChatGPT(newMessages)
  }

  async function processMessageToChatGPT(chatMessages) {}

  return (
    <>
      <div className="App">
        <div style={{ position: 'relative', height: '600px', width: '700px' }}>
          <MainContainer>
            <ChatContainer>
              <MessageList
                typingIndicator={
                  typing ? <TypingIndicator content="AI is typing..." /> : null
                }
              >
                {messages.map((message, i) => {
                  return (
                    <Message
                      key={i}
                      model={message}
                    />
                  )
                })}
              </MessageList>
              <MessageInput
                placeholder="Type message here"
                onSend={handleSend}
              />
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  )
}

export default App
