interface BoxChatProps {
  children: React.ReactNode;
}

const BoxChat = (props: BoxChatProps) => {
  return (
    <div className='flex flex-row gap-x-5 items-center'>{props.children}</div>
  );
};

export default BoxChat;
