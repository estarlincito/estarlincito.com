'use client';
import { Note } from '@/types/note';
import { ChangeEventHandler, FormEventHandler, useState } from 'react';
import { useLocalStorage } from './useLocalstorage';

const useNote = () => {
  const [notes, setNotes] = useLocalStorage('notes', [] as Note[]);
  const [values, setValues] = useState({ title: '', content: '' } as {
    [x: string]: string;
  });

  //handleChange
  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  //handleSubmit
  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    //add new note to ls
    const { title, content } = values;
    const date = new Date().getDate();
    const id = notes.length;
    setNotes([...notes, { title, content, date, id }]);

    // redirect('/note');
  };

  //Copy note to clipboard
  const copyNote = (note: string) => {
    navigator.clipboard.writeText(note);
  };

  return { notes, handleChange, handleSubmit, copyNote } as const;
};

export default useNote;
