const BASE_URL = 'http://localhost:8080';

const GET_BLOG_POSTS = {
  url: `${BASE_URL}/blog-posts`,
  method: 'get',
};

const UPDATE_BLOG_POST = (blogId: number) => {
  return {
    url: `${BASE_URL}/blog-posts/${blogId}`,
    method: 'put',
  };
};

export { BASE_URL, GET_BLOG_POSTS, UPDATE_BLOG_POST };
