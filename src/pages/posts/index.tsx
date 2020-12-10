import { GetStaticProps } from "next"
import Layout from "../../components/Layout"
import {Basic, Twitter, Open} from "../../components/meta"
import PostList from "../../components/Post/List"
import config from "../../lib/config"
import { countPosts, listPostContent, PostContent } from "../../lib/posts"
import { listTags, TagContent } from "../../lib/tags"

type Props = {
  posts: PostContent[]
  tags: TagContent[]
  pagination: {
    current: number
    pages: number
  };
};
export default function Index({ posts, tags, pagination }: Props) {
  const url = "/posts"
  const title = "All posts"
  return (
    <Layout>
      <Basic url={url} title={title} />
      <Open url={url} title={title} />
      <Twitter url={url} title={title} />
      <PostList list={posts} tags={tags} pagination={pagination} />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const posts = listPostContent(1, config.posts_per_page);
  const tags = listTags();
  const pagination = {
    current: 1,
    pages: Math.ceil(countPosts() / config.posts_per_page),
  };
  return {
    props: {
      posts,
      tags,
      pagination,
    },
  };
};
