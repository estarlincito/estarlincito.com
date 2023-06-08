import { Linkdoc } from '@/components/HOC';
import { BlogHeader as NoteHeader } from '@/components/UI/molecules';
import NoteList from '@/components/note/notelist';
import { SEO } from '@/lib';

const description = 'Write your personal notes';
//SEO
export const { metadata } = new SEO({
  title: 'Estarlincito | Note',
  description,
  openGraph: { type: 'website', url: 'https://estarlincito.com/note/' },
  imagesUrl: 'https://estarlincito.com/images/avatar.jpeg',
  imagesAlt: 'Avathar',
});

const NotePage = () => {
  return (
    <>
      <NoteHeader unmargin title='Note' sumary={description} />

      <div className='mb-5'>
        <Linkdoc size='text-2xl' href='/note/new' target='_self'>
          Add New Note
        </Linkdoc>
      </div>
      <hr />

      <NoteList />
    </>
  );
};

export default NotePage;
