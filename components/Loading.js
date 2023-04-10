function Loading() {
  return (
    <div className="grid content-center justify-center h-[80vh]">
      <div className="w-24 h-24  rounded-full border-b-[0.8rem] border-b-lime-500 border-t-[0.8rem] border-t-green-500 animate-spin"></div>
      <p className="capitalize font-bold text-green-700 text-2xl mt-6">
        loading...
      </p>
    </div>
  );
}

export default Loading;
