import Card from '@components/common/Card.component';
import { FcLike } from "react-icons/fc";
import { FcComments } from "react-icons/fc";

const HomePage = () => {
  return (
    <div>
      <Card
        centerAligned={false}
      >
        <header>
          <div className='flex gap-3 items-center'>
            <img className="inline-block h-12 w-12 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <div>
              <h3>Selena Goemz</h3>
              <p className='text-gray-400'>@selene</p>
            </div>
          </div>
        </header>

        <section className='my-6'>
          <p className='text-base'>Roses are red  violets are blue, when I feel so bored so I start to think about you 😂</p>
          <img
            className='w-full my-5 border rounded-sm'
            src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="image-desc" />
        </section>

        <footer>
          <div className='flex gap-5 items-center'>
            <div className='flex gap-2'>
              <FcLike className='text-xl cursor-pointer' title="Like" />
              <span>9,7K</span>
            </div>

            <div className='flex gap-2 cursor-pointer' title='View comments'>
              <FcComments className='text-xl' />
              <span>9,7K</span>
            </div>
          </div>

        </footer>

      </Card>
    </div>
  );
}

export default HomePage;