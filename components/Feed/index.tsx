import Stories from '@/components/Stories'
import Posts from '@/components/Posts'

const Feed = () => {
  return (
    <main className="mx-auto grid grid-cols-1 md:max-w-3xl md:grid-cols-2 xl:max-w-6xl xl:grid-cols-3">
      {/* Section */}
      <section className="col-span-2">
        {/* Stories */}
        <Stories />
        {/* Posts */}
        <Posts />
      </section>

      {/* Section */}
      <section>
        {/* Mini Profile */}
        {/* Suggestions */}
      </section>
    </main>
  )
}

export default Feed
