import { BlogPost } from '../types/blog';
import mohsinImg from "../img/mohsin.png";



export const posts: BlogPost[] = [
  {
    id: '1',
    title: 'Advanced Sentiment Analysis with Transformer Models',
    excerpt: 'Explore how transformer models are revolutionizing sentiment analysis with unprecedented accuracy and nuance.',
    author: 'Mohsin Abbas Khan',
    authorAvatar: mohsinImg,
    date: 'Jan 18, 2024',
    imageUrl: 'https://images.prismic.io/turing/652ec01bfbd9a45bcec818d6_Cover_image_9c33c4cf88.webp?auto=format%2Ccompress&fit=max&w=3840',
    readTime: 12,
    category: 'Machine Learning'
  },  
  {
    id: '2',
    title: 'Real-time Sentiment Analysis in Social Media Monitoring',
    excerpt: 'Learn how to build scalable systems for real-time sentiment analysis of social media streams.',
    author: 'Mohsin Abbas Khan',
    authorAvatar: mohsinImg,
    date: 'Dec 27, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
    readTime: 12,
    category: 'Data Engineering'
  },  
  {
    id: '3',
    title: 'Multilingual Sentiment Analysis Techniques',
    excerpt: 'Discover effective approaches for sentiment analysis across multiple languages and cultural contexts.',  
    author: 'Mohsin Abbas Khan',
    authorAvatar: mohsinImg,
    date: 'Jun 07, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    readTime: 15,
    category: 'NLP'
  },  
  {
    id: '4',
    title: 'Fine-tuning BERT for Sentiment Analysis',
    excerpt: 'A comprehensive guide to fine-tuning BERT models for improved sentiment analysis performance.',
    author: 'Mohsin Abbas Khan',
    authorAvatar: mohsinImg,
    date: 'May 24, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80',
    readTime: 15,
    category: 'Deep Learning'
  },  
  {
    id: '5',
    title: 'Sentiment Analysis for Customer Experience',
    excerpt: 'How to leverage sentiment analysis to transform customer feedback into actionable insights.',
    author: 'Mohsin Abbas Khan',
    authorAvatar: mohsinImg,
    date: 'Mar 11, 2024',
    imageUrl: 'https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80',
    readTime: 10,
    category: 'Business'
  }
  
];