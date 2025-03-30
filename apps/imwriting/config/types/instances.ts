export interface Image {
  url: string;
  alt: string;
  width?: number | 800;
  height?: number | 600;
}

interface Instances {
  title: string;
  description: string;
  images: [Image, ...Image[]];
}

export default Instances;
