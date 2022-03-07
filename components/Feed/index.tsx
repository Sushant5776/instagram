import Stories from '@/components/Stories'
import Posts from '@/components/Posts'
import MiniProfile from '@/components/MiniProfile'
import Suggestions from '@/components/Suggestions'

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
      <section className="hidden md:col-span-1 xl:inline-grid">
        <div className="fixed top-20">
          {/* Mini Profile */}
          <MiniProfile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  )
}

export default Feed
