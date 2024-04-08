const Card = ({
  type,
  title,
  category,
  duration,
  author,
  date,
  foodImg,
  authorImg,
}) => {
  if (type === 1)
    return (
      <div className='max-w-[500px] w-full bg-green-10 rounded-3xl shadow-sm'>
        <p className='text-2xl p-6'>{title}</p>
        <img
          src={`assets/images/${foodImg}`}
          className='w-full h-64 object-cover'
        />
        <div className='flex justify-between items-center mx-6 py-4 border-b border-green-20'>
          <p className='text-green-40 rounded-full border border-green-40 px-2 py-1'>
            {category}
          </p>
          <p>{duration} min read</p>
        </div>
        <div className='flex gap-5 items-center m-6'>
          <img
            src={`assets/images/${authorImg}`}
            className='w-10 h-10 rounded-full object-cover'
          />
          <p className='leading-5'>
            {author}
            <br />
            {date}
          </p>
        </div>
      </div>
    );
};

export default Card;
