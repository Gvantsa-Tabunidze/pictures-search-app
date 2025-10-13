Next.js Image Search App

A Next.js application for searching and browsing images using the Unsplash API. The app supports searching, filtering, caching with React Query, and prefetching data on the server.

//Features

Search Images: Users can search for images with a debounced search input.

Filtering: Filter images by categories, applied to query parameters in the URL.

Infinite Scrolling: Load more images as you scroll.

React Query Caching: Efficient data fetching and caching of images.

Prefetching: First page of results pre-fetched on the server for faster loading and SEO friendly.

Authorization: Supports Unsplash API access token for authenticated requests.

Responsive Layout: Images displayed in a masonry-style grid that adapts to screen size.


//Tech Stack

Next.js: React framework for server-side rendering and routing.

React Query: For fetching, caching data.

Zustand for authorization 

Unsplash API: Source of images.

TypeScript: Type safety and autocompletion.

Tailwind CSS: Utility-first styling for fast UI development.