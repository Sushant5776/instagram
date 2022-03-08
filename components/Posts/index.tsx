import Post from '@/components/Post'
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import { db } from 'firebaseApp'
import { useEffect, useState } from 'react'
import type { QueryDocumentSnapshot } from 'firebase/firestore'

const Posts = () => {
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData>[] | []
  >([])

  useEffect(
    () =>
      onSnapshot(
        query(collection(db, 'posts'), orderBy('timestamp', 'desc')),
        (snapshot) => {
          setPosts(snapshot.docs)
        }
      ),
    []
  )

  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImage={post.data().profileImage}
          caption={post.data().caption}
          image={post.data().image}
        />
      ))}
    </div>
  )
}

export default Posts
