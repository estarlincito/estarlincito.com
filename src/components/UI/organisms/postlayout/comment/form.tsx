import { useAuth0 } from '@auth0/auth0-react';

//Types
interface Props {
  text: string;
  setText: (text: string) => void;
  onSubmit: (e: React.FormEvent) => Promise<void>;
}

const CommentForm: React.FC<Props> = ({ text, setText, onSubmit }) => {
  const { isAuthenticated, logout, loginWithPopup } = useAuth0();

  return (
    <form onSubmit={onSubmit}>
      <textarea
        className='flex w-full max-h-40 p-3 rounded resize-y bg-gray-200 text-gray-900 placeholder-gray-500'
        rows={2}
        placeholder={
          isAuthenticated
            ? `¿Qué piensas?`
            : 'Por favor, inicie sesión para comentar'
        }
        onChange={(e) => setText(e.target.value)}
        value={text}
        disabled={!isAuthenticated}
      />

      <div className='flex items-center mt-4'>
        {isAuthenticated ? (
          <div className='flex items-center space-x-6'>
            <button className='py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700'>
              Enviar
            </button>
            <button className='text-gray-500' onClick={() => logout()}>
              {/* onClick={() => logout({ returnTo: window.location.origin })} */}
              Cierra sesión
            </button>
          </div>
        ) : (
          <button
            type='button'
            className='py-2 px-4 rounded bg-blue-600 text-white disabled:opacity-40 hover:bg-blue-700'
            onClick={() => loginWithPopup()}
          >
            Iniciar sesión
          </button>
        )}
      </div>
    </form>
  );
};

export default CommentForm;
