import Blogc from '@/constants/blogc';
import { Slug } from '@/types/params';
import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';
import SEO from '../seo';

const get_posts = (slug: Slug) => {
  const url_ = `/blog/${slug[0]}`;
  let metadata_: Metadata = {};

  const data = allBlogs.filter(
    (item) => item.urls.post === url_ || item.urls.cat === url_
  );

  if (data.length === 0) {
    return;
  }

  if (data[0].urls.post === url_) {
    const { metadata } = new SEO({
      title: data[0].title,
      description: data[0].summary,
      openGraph: {
        type: 'article',
        publishedTime: data[0].publishedAt,
        authors: data[0].author,
        url: `https://estarlincito.com${data[0].urls.post}`,
      },
      image_url: data[0].cover,
      image_alt: data[0].coverAlt,
    });
    metadata_ = metadata;
  } else if (data[0].urls.cat === url_) {
    const { description, image_url, image_alt } = data[0].blogseo.cat;
    const { metadata } = new SEO({
      title: Blogc.seo.title(data[0].category),
      description,
      openGraph: Blogc.seo.openGraph(slug[0]),
      image_url,
      image_alt,
    });

    metadata_ = metadata;
  }

  return { data, metadata: metadata_ };
};

export default get_posts;
