import { BlogHeader as NoteHeader } from '@/components/UI/molecules';
import { SEO } from '@/lib';

const description = 'Edict your personal notes';
//SEO

//dynamy
export const { metadata } = new SEO({
  title: 'Estarlincito | Edict Note',
  description,
  openGraph: { type: 'website', url: 'https://estarlincito.com/note/edict' },
  imagesUrl: 'https://estarlincito.com/images/avatar.jpeg',
  imagesAlt: 'Avathar',
});

const EdictPage = () => {
  return (
    <>
      <NoteHeader title='Edict Note' sumary={description} />

      <div></div>
    </>
  );
};

export default EdictPage;
