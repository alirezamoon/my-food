import Button from '../../utils/UI/button';

const Home = () => {
  return (
    <div
      className='bg-green-30 h-screen pt-28 text-green-10 flex 
      justify-between items-center gap-16'
    >
      <div className='ml-6 grow'>
        <div className='border-b border-green-20 pb-8'>
          <p className='font-bold text-8xl'>
            BROWNIE
            <br />
            MAGIC
          </p>
          <p className='text-4xl'>
            5 tips how to make
            <br />
            the best brownies in the
            <br />
            game
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <div className='py-8 flex gap-2'>
            <Button>How to</Button>
            <Button>Baking</Button>
          </div>
          <p className='text-green-20'>12 min read</p>
        </div>
        <button className='bg-green-40 text-green-20 px-5 py-2 rounded-full'>
          READ NOW
        </button>
      </div>
      <img
        src='assets/images/pizza.jpg'
        className='rounded-l-full object-cover max-h-[80%] grow-[2]'
      />
    </div>
  );
};

export default Home;
