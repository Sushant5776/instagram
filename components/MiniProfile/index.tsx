const MiniProfile = () => {
  return (
    <div className="mt-14 ml-10 flex items-center justify-between">
      <img
        className="h-16 w-16 rounded-full border p-[2px]"
        src="https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large"
        alt=""
      />

      <div className="mx-4 flex-1">
        <h2 className="font-bold">garudkar_sush</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>
      <button className="text-sm  font-semibold text-blue-400">Sign Out</button>
    </div>
  )
}

export default MiniProfile
