import { ChildrenProps } from '@/types';

const Conclusion: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <>
      <h2 className='font-bold'>Conclusión</h2>
      {children}
    </>
  );
};

export default Conclusion;
