import Blogc from '@/constants/blogc';
import { Slug } from '@/types/params';
import { allBlogs } from 'contentlayer/generated';
import SEO from '../seo';

const get_sub = (slug: Slug) => {
  const data = allBlogs.filter(
    (item) => item.urls.sub === `/blog/${slug[0]}/${slug[1]}`
  );

  if (data.length === 0) {
    return;
  }

  const { description, image_url, image_alt } = data[0].blogseo.sub;

  const { metadata } = new SEO({
    title: Blogc.seo.title(data[0].subcategory),
    description,
    openGraph: Blogc.seo.openGraph(`${slug[0]}/${slug[1]}`),
    image_url,
    image_alt,
  });

  return { data, metadata };
};

export default get_sub;
