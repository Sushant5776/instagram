import Post from '@/components/Post'

const posts = [
  {
    id: '123',
    username: 'garudkar_sush',
    userImage:
      'https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large',
    image: 'https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large',
    caption: 'Hello how are you chotu!',
  },
  {
    id: '123',
    username: 'garudkar_sush',
    userImage:
      'https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large',
    image: 'https://pbs.twimg.com/media/FDBAdTvXsAA5BAy?format=jpg&name=large',
    caption: 'Hello how are you chotu!',
  },
]

const Posts = () => {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImage={post.userImage}
          caption={post.caption}
          image={post.image}
        />
      ))}
    </div>
  )
}

export default Posts
