import { motion } from "framer-motion";
import { Calendar, User, Clock, ArrowRight, Tag, TrendingUp, BookOpen, Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the cutting-edge technologies and methodologies that are shaping the future of web development, from AI integration to advanced frameworks.",
    author: "Alex Rivera",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=400&fit=crop",
    tags: ["React", "AI", "Future Tech"],
    featured: true
  },
  {
    id: 2,
    title: "UI/UX Design Principles That Drive Conversion",
    excerpt: "Learn the essential design principles that not only create beautiful interfaces but also drive user engagement and business conversions.",
    author: "Sarah Chen",
    date: "2024-01-12",
    readTime: "6 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&h=400&fit=crop",
    tags: ["UI/UX", "Design", "Conversion"],
    featured: true
  },
  {
    id: 3,
    title: "Building Scalable Applications with Modern Architecture",
    excerpt: "Deep dive into architectural patterns and best practices for building applications that scale from startup to enterprise level.",
    author: "Marcus Johnson",
    date: "2024-01-10",
    readTime: "12 min read",
    category: "Architecture",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=800&h=400&fit=crop",
    tags: ["Architecture", "Scalability", "Backend"],
    featured: false
  },
  {
    id: 4,
    title: "Digital Marketing Strategies for Tech Startups",
    excerpt: "Proven marketing strategies and tactics that help tech startups gain traction and build a loyal customer base in competitive markets.",
    author: "Elena Volkov",
    date: "2024-01-08",
    readTime: "10 min read",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    tags: ["Marketing", "Startups", "Growth"],
    featured: false
  },
  {
    id: 5,
    title: "Performance Optimization: Making Your Website Lightning Fast",
    excerpt: "Comprehensive guide to web performance optimization, from image compression to code splitting and everything in between.",
    author: "Alex Rivera",
    date: "2024-01-05",
    readTime: "15 min read",
    category: "Performance",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    tags: ["Performance", "Optimization", "Speed"],
    featured: false
  },
  {
    id: 6,
    title: "Accessibility in Design: Creating Inclusive Digital Experiences",
    excerpt: "Essential guidelines and best practices for creating accessible websites and applications that work for everyone.",
    author: "Sarah Chen",
    date: "2024-01-03",
    readTime: "9 min read",
    category: "Accessibility",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=400&fit=crop",
    tags: ["Accessibility", "Inclusive Design", "WCAG"],
    featured: false
  }
];

const categories = [
  { name: "All", count: 6, color: "neon-blue" },
  { name: "Web Development", count: 2, color: "neon-green" },
  { name: "Design", count: 2, color: "neon-pink" },
  { name: "Marketing", count: 1, color: "neon-blue" },
  { name: "Performance", count: 1, color: "neon-green" }
];

export default function Blog() {
  return (
    <div className="pt-20">
      {/* Enhanced Hero Section */}
      <section className="py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-20 left-20 w-64 h-64 bg-neon-blue/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.4, 0.2],
              x: [0, 30, 0],
              y: [0, -20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-neon-green/15 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.15, 0.3, 0.15],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Floating blog icons */}
          {[BookOpen, TrendingUp, Search].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${25 + i * 25}%`,
                top: `${35 + (i % 2) * 30}%`
              }}
              animate={{
                y: [-20, -40, -20],
                rotate: [0, 10, 0],
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8,
                ease: "easeInOut"
              }}
            >
              <Icon size={24} className="text-neon-pink/40" />
            </motion.div>
          ))}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-neon-blue to-neon-pink rounded-2xl flex items-center justify-center shadow-2xl">
                <BookOpen size={40} className="text-white" />
              </div>
            </motion.div>
            
            <motion.h1 
              className="text-4xl lg:text-6xl font-black mb-6"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Our <span className="neon-blue">Blog</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              Insights, tutorials, and thought leadership on web development, design, and digital innovation. Stay ahead of the curve with our expert perspectives.
            </motion.p>
            
            <motion.div
              className="flex justify-center gap-4 mt-8"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30 px-4 py-2">
                📝 Weekly Updates
              </Badge>
              <Badge className="bg-neon-green/20 text-neon-green border-neon-green/30 px-4 py-2">
                💡 Expert Insights
              </Badge>
              <Badge className="bg-neon-pink/20 text-neon-pink border-neon-pink/30 px-4 py-2">
                🚀 Industry Trends
              </Badge>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Search and Categories */}
      <section className="py-12 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input 
                placeholder="Search articles..." 
                className="pl-12 py-4 text-lg bg-card/80 border-border/30"
              />
            </div>
            
            {/* Categories */}
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Button 
                    variant="outline" 
                    className={`${category.color} border-${category.color}/30 hover:bg-${category.color}/10`}
                  >
                    {category.name} ({category.count})
                  </Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Featured <span className="neon-green">Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our most popular and insightful content, hand-picked for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/95 via-card to-card/90 border border-border/30 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-neon-blue/20 text-neon-blue border-neon-blue/30">
                        Featured
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="outline" className="bg-card/80">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <span className="flex items-center gap-2">
                        <User size={16} />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-2">
                        <Calendar size={16} />
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock size={16} />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4 neon-blue group-hover:neon-green transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-2 neon-blue cursor-pointer"
                      >
                        Read More
                        <ArrowRight size={16} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Recent <span className="neon-pink">Posts</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Stay updated with our latest insights and discoveries
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-card/80 to-card/60 border border-border/30 hover:shadow-xl transition-all duration-500 h-full overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3">
                      <Badge variant="outline" className="bg-card/80 text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-lg font-bold mb-3 neon-blue group-hover:neon-pink transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        {post.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      
                      <motion.div
                        whileHover={{ x: 3 }}
                        className="flex items-center gap-1 neon-blue cursor-pointer text-sm"
                      >
                        Read
                        <ArrowRight size={14} />
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-neon-blue/10 via-neon-green/10 to-neon-pink/10 border border-neon-blue/30 max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h2 className="text-3xl font-bold mb-6 neon-blue">Stay in the Loop</h2>
                <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
                  Get the latest insights, tutorials, and industry trends delivered directly to your inbox. Join our community of forward-thinking developers and designers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                  <Input 
                    placeholder="Enter your email address" 
                    className="flex-1 py-3"
                  />
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button className="bg-neon-blue/20 text-neon-blue border border-neon-blue/30 hover:bg-neon-blue/30 px-8 py-3">
                      Subscribe
                    </Button>
                  </motion.div>
                </div>
                <p className="text-xs text-muted-foreground mt-4">
                  No spam, ever. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}