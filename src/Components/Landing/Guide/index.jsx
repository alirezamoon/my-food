import Card from '../../utils/UI/card';

const Guide = () => {
  return (
    <div className='flex bg-green-60 p-14'>
      <Card
        type={1}
        title='Gift guide for foodies'
        author='Peter Pan'
        authorImg='pizza.jpg'
        date='March 20,2024'
        category='Products'
        duration={5}
        foodImg='pizza.jpg'
      />
    </div>
  );
};

export default Guide;
