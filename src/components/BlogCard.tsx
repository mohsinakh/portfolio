import { Clock, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types/blog';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      <div className="relative overflow-hidden">
        <img 
          src={post.imageUrl} 
          alt={post.title}
          className="w-full h-56 object-cover transform transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="px-3 py-1 text-sm font-medium text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full">
            {post.category}
          </span>
          <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
            <Clock className="h-4 w-4 mr-1" />
            <span>{post.readTime} min read</span>
          </div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {post.title}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center space-x-3">
            <img 
              src={post.authorAvatar} 
              alt={post.author}
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <span className="block text-sm font-medium text-gray-900 dark:text-white">{post.author}</span>
              <span className="block text-sm text-gray-500 dark:text-gray-400">{post.date}</span>
            </div>
          </div>
          <a 
            href={`https://blog.mohsinabbas.site/article/${post.id}`} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group inline-flex items-center text-indigo-600 dark:text-indigo-400 font-medium hover:text-indigo-800 dark:hover:text-indigo-300 transition-colors"
          >
            Read More
            <ArrowRight className="ml-1 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </article>
  );
}