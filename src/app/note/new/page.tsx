import { BlogHeader as NoteHeader } from '@/components/UI/molecules';
import NoteForm from '@/components/note/noteform';
import { SEO } from '@/lib';

const description = 'Add new personal notes';
//SEO
export const { metadata } = new SEO({
  title: 'Estarlincito | New Note',
  description,
  openGraph: { type: 'website', url: 'https://estarlincito.com/note/new' },
  imagesUrl: 'https://estarlincito.com/images/avatar.jpeg',
  imagesAlt: 'Avathar',
});

const NewPage = () => {
  return (
    <>
      <NoteHeader unmargin title='New Note' sumary={description} />
      <NoteForm />
    </>
  );
};

export default NewPage;
