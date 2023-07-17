interface CardProps {
  meta: string;
  motivo: string;
}

const Card = ({ meta, motivo }: CardProps) => {
  return (
    <div>
      <h5>
        - <b>{meta}</b>
      </h5>
      <em className='pl-5 font-light text-neutral-600 dark:text-neutral-300'>
        {motivo}
      </em>
    </div>
  );
};

export default Card;
