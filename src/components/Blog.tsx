import { useState } from "react";
import BlogCard from "../components/BlogCard";
import { posts } from "../data/post";
import { Search } from "lucide-react";

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState("");
  const categories = Array.from(new Set(posts.map((post) => post.category)));

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {/* Meta Information */}
      <head >
        <title>Mohsin's Blog - Explore Articles</title>
        <meta name="description" content="Discover insightful articles on technology, programming, and more. Visit my blog at blog.mohsinabbas.site." />
        <meta property="og:url" content="https://blog.mohsinabbas.site" />
      </head>

      <main className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Explore Articles</h1>
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <button key={category} onClick={() => setSearchTerm(category)} className="px-4 py-2 rounded-lg bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white ">
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>

          {filteredPosts.length === 0 && <p className="text-center py-12 text-gray-600 dark:text-gray-400">No articles found.</p>}
        </div>
      </main>
    </>
  );
}
