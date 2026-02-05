import { Layout } from "@/components/layout/Layout";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const posts = [
  {
    id: 1,
    title: "The Future of Design Systems in 2024",
    excerpt: "Exploring how design systems are evolving to meet the demands of modern product development.",
    category: "Design",
    date: "Jan 15, 2024",
    image: blog1,
    featured: true,
  },
  {
    id: 2,
    title: "Building a Creative Workspace",
    excerpt: "Tips for creating an environment that fosters creativity and collaboration.",
    category: "Culture",
    date: "Jan 10, 2024",
    image: blog2,
  },
  {
    id: 3,
    title: "Digital Marketing Trends to Watch",
    excerpt: "Key trends shaping the digital marketing landscape this year.",
    category: "Marketing",
    date: "Jan 5, 2024",
    image: blog3,
  },
  {
    id: 4,
    title: "Case Study: Reimagining E-commerce",
    excerpt: "How we helped a leading retailer transform their online shopping experience.",
    category: "Case Study",
    date: "Dec 28, 2023",
    image: project1,
  },
  {
    id: 5,
    title: "The Art of Mobile Design",
    excerpt: "Best practices for creating engaging mobile experiences.",
    category: "Design",
    date: "Dec 20, 2023",
    image: project2,
  },
  {
    id: 6,
    title: "Brand Building in the Digital Age",
    excerpt: "Strategies for creating lasting brand impressions online.",
    category: "Branding",
    date: "Dec 15, 2023",
    image: project3,
  },
];

const Blog = () => {
  const featuredPost = posts.find((p) => p.featured);
  const regularPosts = posts.filter((p) => !p.featured);

  return (
    <Layout>
      {/* Hero */}
      <section className="container-custom py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="heading-editorial text-5xl md:text-7xl lg:text-8xl mb-6">
            BLOG
          </h1>
          <p className="text-muted-foreground max-w-lg text-lg">
            Insights, ideas, and stories from our team.
          </p>
        </motion.div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <AnimatedSection className="container-custom pb-16">
          <Link to={`/blog/${featuredPost.id}`} className="group block">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="image-zoom rounded-2xl overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
              <div>
                <span className="text-sm text-accent font-medium">
                  {featuredPost.category}
                </span>
                <h2 className="heading-editorial text-3xl md:text-4xl mt-2 mb-4 group-hover:text-accent transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {featuredPost.excerpt}
                </p>
                <span className="text-sm text-muted-foreground">
                  {featuredPost.date}
                </span>
              </div>
            </div>
          </Link>
        </AnimatedSection>
      )}

      {/* Posts Grid */}
      <AnimatedSection className="container-custom pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/blog/${post.id}`} className="group block">
                <div className="image-zoom rounded-xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[3/2] object-cover"
                  />
                </div>
                <span className="text-xs text-accent font-medium">
                  {post.category}
                </span>
                <h3 className="font-display text-lg font-bold mt-1 mb-2 group-hover:text-accent transition-colors">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2 line-clamp-2">
                  {post.excerpt}
                </p>
                <span className="text-xs text-muted-foreground">
                  {post.date}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </Layout>
  );
};

export default Blog;