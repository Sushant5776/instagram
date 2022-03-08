import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'
import {
  addDoc,
  collection,
  QueryDocumentSnapshot,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  DocumentData,
  setDoc,
  doc,
  deleteDoc,
} from 'firebase/firestore'
import { db } from '../../firebaseApp'
import { useSession } from 'next-auth/react'
import { MouseEvent, useEffect, useState } from 'react'
import Moment from 'react-moment'

const Post = ({
  id,
  username,
  userImage,
  image,
  caption,
}: {
  id: string
  username: string
  userImage: string
  image: string
  caption: string
}) => {
  const { data: session } = useSession()
  const [comment, setComment] = useState('')
  const [comments, setComments] = useState<
    QueryDocumentSnapshot<DocumentData>[] | []
  >([])
  const [likes, setLikes] = useState<
    QueryDocumentSnapshot<DocumentData>[] | []
  >([])
  const [hasLiked, setHasLiked] = useState(false)

  const sendComment = async (event: MouseEvent) => {
    event.preventDefault()
    const commentToSend = comment
    setComment('')
    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session?.user?.username,
      userImage: session?.user?.image,
      timestamp: serverTimestamp(),
    })
  }

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(
        doc(db, 'posts', id, 'likes', session?.user?.uid as string)
      )
    } else {
      await setDoc(
        doc(db, 'posts', id, 'likes', session?.user?.uid as string),
        {
          username: session?.user?.username,
        }
      )
    }
  }

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => setComments(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [db, id]
  )

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session?.user?.uid) !== -1
      ),
    [likes]
  )

  return (
    <div className="my-7 rounded-sm border bg-white">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImage}
          className="mr-3 h-12 rounded-full border p-1"
          alt=""
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* Image */}
      <img src={image} className="w-full object-cover" alt="" />

      {session && (
        <div className="flex justify-between px-4 pt-4">
          <div className="flex space-x-4">
            {hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className="btn text-red-500"
              />
            ) : (
              <HeartIcon onClick={likePost} className="btn" />
            )}
            <ChatIcon className="btn" />
            <PaperAirplaneIcon className="btn" />
          </div>

          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* Caption */}
      <p className="truncate p-5">
        {likes.length > 0 && (
          <p className="mb-1 font-bold">{likes.length} likes</p>
        )}
        <span className="mr-1 font-bold">{username}</span> {caption}
      </p>

      {/* Comments */}
      {comments.length > 0 && (
        <div className="ml-10 h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-black">
          {comments.map((comment) => (
            <div key={comment.id} className="mb-3 flex items-center space-x-2">
              <img
                className="h-7 rounded-full"
                src={comment.data().userImage}
                alt=""
              />
              <p className="flex-1 text-sm">
                <span className="font-bold">{comment.data().username}</span>{' '}
                {comment.data().comment}
              </p>
              <Moment fromNow className="pr-5 text-xs text-gray-500">
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* InputBox */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            type="text"
            placeholder="Add a Comment..."
            className="flex-1 border-none outline-none focus:ring-0"
          />
          <button
            disabled={!comment.trim()}
            className="font-semibold text-blue-400 disabled:text-gray-400"
            type="submit"
            onClick={(event) => sendComment(event)}
          >
            Post
          </button>
        </form>
      )}
    </div>
  )
}

export default Post
