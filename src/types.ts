export interface Project {
  id: string;
  title: string;
  brand: string;
  description: string;
  image: string;
  category: string;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  span: string; // Tailwind grid span classes
}
