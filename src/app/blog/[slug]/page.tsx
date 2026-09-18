import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LayoutWrapper from "../../LayoutWrapper";
import PageTitle from "../../components/PageTitle";
import { blogPosts, getBlogPostBySlug, getRelatedBlogPosts } from "../../data/blog";
import BlogDetails from "../../section/blog/BlogDetails";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Infinity Software Labs",
      description: "The requested article could not be found.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    alternates: {
      canonical: post.canonicalUrl,
    },
    openGraph: {
      title: post.ogTitle,
      description: post.ogDescription,
      url: post.canonicalUrl,
      siteName: "Infinity Software Labs",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: post.twitterTitle,
      description: post.twitterDescription,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

const BlogDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogPosts(slug);

  return (
    <>
      <LayoutWrapper HeaderStyle="two" FooterStyle="two">
        <PageTitle
          pageName={post.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/page-blog" },
            { label: post.title },
          ]}
        />
        <BlogDetails post={post} relatedPosts={relatedPosts} />
      </LayoutWrapper>
    </>
  );
};

export default BlogDetailPage;
