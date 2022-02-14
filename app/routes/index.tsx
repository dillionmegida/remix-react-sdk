import { useEffect, useState } from 'react'
import { StreamChat } from 'stream-chat'
import {
  Chat,
  Channel,
  ChannelHeader,
  MessageInput,
  MessageList,
  Thread,
  Window,
  LoadingIndicator,
  ChannelList,
} from 'stream-chat-react'

import 'stream-chat-react/dist/css/index.css'

// const userToken =
//   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiYml0dGVyLXVuaXQtNyJ9.2pANboR4FgwzEQG-48V4xUX8VPYIQ7IV3QwPg7f7cZc'

export default function Index() {
  const [client, setClient] = useState<any>(null)
  const [channel, setChannel] = useState<any>(null)

  useEffect(() => {
    if (typeof document === 'undefined') return

    async function init() {
      const chatClient = StreamChat.getInstance('k8vurjvytc79')

      await chatClient.connectUser(
        {
          id: 'dillion1',
          name: 'dillion',
          image: 'https://dillionmegida.com/img/deee.jpg',
        },
        chatClient.devToken('dillion1')
      )

      const channel = chatClient.channel('messaging', 'custom_channel_id', {
        // add as many custom fields as you'd like
        image: 'https://www.drupal.org/files/project-images/react.png',
        name: 'Talk about React',
        members: ['dillion1'],
      })

      setChannel(channel)
      setClient(chatClient)
    }

    init()
  }, [])

  console.log(typeof document)

  if (typeof document === 'undefined' || !channel) return <></>

  return (
    <div>
      <Chat client={client} theme="messaging light">
        <Channel channel={channel}></Channel>
        {/* <Window>
						<ChannelHeader />
						<MessageList />
						<MessageInput />
					</Window>
					<Thread /> */}
        {/* </Channel> */}
        {/* <ChannelList /> */}
        {/* <Window> */}
        {/* <ChannelHeader /> */}
        {/* <MessageList /> */}
        {/* <MessageInput /> */}
        {/* </Window> */}
      </Chat>
    </div>
  )
}
