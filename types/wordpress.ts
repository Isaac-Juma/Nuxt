/**
 * WordPress API Type Definitions
 */

// Single post response from WordPress
export interface WordPressPost {
  id: number
  title: {
    rendered: string
  }
  excerpt: {
    rendered: string
  }
  content: {
    rendered: string
  }
  featured_image_url?: string | null
  date?: string
  author?: number
  link?: string
}

// Cleaned/transformed post data (what your API returns)
export interface TransformedPost {
  id: number
  title: string | { rendered: string }
  excerpt?: string | { rendered: string }
  content?: string | { rendered: string }
  image: string | null
  date?: string
}

// Posts list response
export interface PostsListResponse {
  posts: TransformedPost[]
  total?: number
  page?: number
}

// Single post detail response
export interface PostDetailResponse extends TransformedPost {}
