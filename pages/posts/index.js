import AllPosts from '../../components/posts/all-posts';

const DUMMY_POSTS = [
  // create dummy posts here
  {
    slug: 'first-post',
    title: 'First Post',
    image: 'first-post.jpg',
    excerpt: 'This is the first post',
    date: '2021-01-01',
  },
  {
    slug: 'second-post',
    title: 'Second Post',
    image: 'second-post.jpg',
    excerpt: 'This is the second post',
    date: '2021-01-02',
  },
  {
    slug: 'third-post',
    title: 'Third Post',
    image: 'third-post.jpg',
    excerpt: 'This is the third post',
    date: '2021-01-03',
  },
  {
    slug: 'fourth-post',
    title: 'Fourth Post',
    image: 'fourth-post.jpg',
    excerpt: 'This is the fourth post',
    date: '2021-01-04',
  },
];
function AllPostsPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostsPage;
