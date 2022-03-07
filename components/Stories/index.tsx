import { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import { ContextualCard } from '@faker-js/faker/helpers'
import Story from '@/components/Story'
import { useSession } from 'next-auth/react'

// interface StoryType extends ContextualCard {
//   id: number
// }

const Stories = () => {
  const { data: session } = useSession()
  const [suggestions, setSuggestions] = useState<ContextualCard[] | []>([])
  useEffect(() => {
    const suggestions: ContextualCard[] = [...Array(20)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }))

    setSuggestions(suggestions)
  }, [])

  return (
    <div className="mt-8 flex space-x-2 overflow-x-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {session && (
        <Story
          image={session.user?.image as string}
          username={session.user?.username as string}
        />
      )}
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          image={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
