import Card from '@components/common/Card.component';

const PostSkeleton = () => {
  return (
    <Card
      centerAligned={false}
      className='my-5'
    >
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-slate-400 h-10 w-10"></div>
        <div className="flex-1 space-y-3 py-1">
          <div className="h-2 bg-slate-400 rounded w-32"></div>
          <div className="h-2 bg-slate-400 rounded w-20"></div>
          <div className="pt-6">
            <div className="h-2 bg-slate-400 rounded"></div>
          </div>
          <div className='pt-6 flex space-x-3'>
            <div className="h-2 bg-slate-400 rounded w-10"></div>
            <div className="h-2 bg-slate-400 rounded w-10"></div>
          </div>
        </div>
      </div>
    </Card >
  );
}

export default PostSkeleton;