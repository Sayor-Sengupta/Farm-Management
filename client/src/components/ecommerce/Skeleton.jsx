const MessageSkeleton = () => {
  return (
    <>
      <div className="flex w-52 flex-col gap-4">
        <div className="skeleton bg-gray-200 h-32 w-full"></div>
        <div className="skeleton bg-gray-200 h-4 w-28"></div>
        <div className="skeleton bg-gray-200 h-4 w-28"></div>
        <div className="skeleton bg-gray-200 	h-4 w-28"></div>
       
      </div>
    </>
  );
};
export default MessageSkeleton;
