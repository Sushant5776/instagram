const Story = ({ image, username }: { image: string; username: string }) => {
  return (
    <div>
      <img
        className="h-14 w-14 transform cursor-pointer rounded-full border-2 border-red-500 object-contain p-[1.5px] transition duration-200 ease-out hover:scale-110"
        src={image}
        alt=""
      />
      <p className="w-14 truncate text-center text-xs">{username}</p>
    </div>
  )
}

export default Story
