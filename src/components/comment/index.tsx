'use client';
import { useComments } from '@/Hooks';
import CommentForm from './form';
import CommentList from './list';

const Comment = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className='mt-20'>
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
};

export default Comment;
