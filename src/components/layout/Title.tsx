type props = {
  text: string;
};

const Title = ({ text }: props) => {
  return (
    <h1 className="mt-2 text-center text-3xl font-extrabold leading-8 tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
      {text}
    </h1>
  );
};

export default Title;
