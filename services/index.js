import { request, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql `
    query MyQuery {
      postsConnection {
        edges {
          cursor
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

    const result = await request(graphqlAPI, query);

    return result.postsConnection.edges;
}

export const getPostName = async (slug) => {
  const query = gql`
  query getPostName($slug: String!) {
    posts(where: {slug: $slug}) {
      title
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.posts[0].title;
};

export const getPodcasts = async () => {
  const query = gql`
  query MyPodQuery {
    podcastsConnection {
      edges {
        cursor
        node {
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    }
  }
  `;
  const result = await request(graphqlAPI, query);

  return result.podcastsConnection.edges;
}

export const getPodcastName = async (slug) => {
  const query = gql`
  query getCategoryName($slug: String!) {
    podcasts(where: {slug: $slug}) {
      title
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.podcasts[0].title;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails {
      posts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        createdAt
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.posts;
}

export const getRecentPodcasts = async () => {
  const query = gql`
    query GetPodcastDetails {
      podcasts(
        orderBy: createdAt_ASC
        last: 3
      ) {
        createdAt
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.podcasts;
}

export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
        last: 3
      ) {
        createdAt
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories, slug });

  return result.posts;
}

export const getSimilarPodcasts = async (categories, slug) => {
  const query = gql`
    query GetPodcastDetails($slug: String!, $categories: [String!]) {
      podcasts(
        where: { slug_not: $slug, AND: {categories_some: { slug_in: $categories}}}
        last: 3
      ) {
        createdAt
        slug
        title
        featuredImage {
          url
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query, { categories, slug });

  return result.podcasts;
}

export const getCategoryPost = async (slug) => {
  const query = gql`
    query GetCategoryPost($slug: String!) {
      postsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.postsConnection.edges;
};

export const getCategoryPodcast = async (slug) => {
  const query = gql`
    query GetCategoryPodcast($slug: String!) {
      podcastsConnection(where: {categories_some: {slug: $slug}}) {
        edges {
          cursor
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.podcastsConnection.edges;
};

export const getCategoryName = async (slug) => {
  const query = gql`
  query getCategoryName($slug: String!) {
    categories(where: {slug: $slug}) {
      name
    }
  }
  `;

  const result = await request(graphqlAPI, query, { slug });

  return result.categories[0].name;
};

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetFeaturedPost() {
      posts(where: {featuredPost: true}, last: 5) {
        featuredImage {
          url
        }
        title
        excerpt
        slug
        createdAt
        categories {
          name
          slug
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getFeaturedPodcasts = async () => {
  const query = gql`
    query GetFeaturedPodcast() {
      podcasts(where: {featuredPodcast: true}, last: 5) {
        featuredImage {
          url
        }
        title
        excerpt
        slug
        createdAt
        categories {
          name
          slug
        }
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.podcasts;
};

export const getBlogPost = async (slug) => {
  const query = gql `
  query getBlogPost($slug: String!) {
    post(where: {slug: $slug }) {
      createdAt
      slug
      title
      excerpt
      featuredImage {
        url
      }
      content {
        raw
        html
      }
      categories {
        name
        slug
      }
      cont
    }
  }
`;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
}

export const getAdjacentPosts = async (createdAt, slug) => {
  const query = gql`
    query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
      next:posts(
        first: 1
        orderBy: createdAt_ASC
        where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
      previous:posts(
        first: 1
        orderBy: createdAt_DESC
        where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query, { slug, createdAt });

  return { next: result.next[0], previous: result.previous[0] };
};

export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      categories   {
        name
        slug
      }
    }
  `;
  const result = await request(graphqlAPI, query);

  return result.categories;
}

export const submitComment = async (obj) => {
  const result = await fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

export const getComments = async (slug) => {
  const query = gql`
  query GetComments($slug:String!) {
    comments(where: {post: {slug:$slug}}){
      name
      createdAt
      comment
    }
  }
  `;
  const result = await request(graphqlAPI, query, { slug });

  return result.comments;
}