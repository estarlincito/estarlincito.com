'use client';
import { useComments } from '@/Hooks';
import { Hr } from '@/components/HOC';
import CommentForm from './form';
import CommentList from './list';

const Comment = () => {
  const { text, setText, comments, onSubmit, onDelete } = useComments();

  return (
    <div className='mt-20'>
      <h2 className='text-xl font-bold my-4'>Comentarios</h2>
      <Hr className='mb-11' />
      <CommentForm onSubmit={onSubmit} text={text} setText={setText} />
      <CommentList comments={comments} onDelete={onDelete} />
    </div>
  );
};

export default Comment;
