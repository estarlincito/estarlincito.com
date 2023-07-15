import allPosts from '@/lib/allPosts';
import Links from '@/types/links';

const allCat = Object.entries(
  allPosts.reduce((cat: { [key: string]: string }, item) => {
    cat[item.urls.cat] = item.category;
    return cat;
  }, {})
);

const catsLinks: Links[] = allCat.map(([route, label]) => ({
  route,
  label,
}));

export default catsLinks;
