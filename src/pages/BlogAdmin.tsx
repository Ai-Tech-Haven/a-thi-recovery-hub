import { useState } from "react";
import { blogPosts as defaultPosts, BlogPost } from "@/data/blogPosts";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Plus, Edit2, Trash2, Save, X, FileText } from "lucide-react";

const BlogAdmin = () => {
  const [posts, setPosts] = useState<BlogPost[]>(() => {
    const saved = localStorage.getItem("athi-blog-posts");
    return saved ? JSON.parse(saved) : defaultPosts;
  });

  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [isNew, setIsNew] = useState(false);

  const savePosts = (updated: BlogPost[]) => {
    setPosts(updated);
    localStorage.setItem("athi-blog-posts", JSON.stringify(updated));
  };

  const handleNew = () => {
    const newPost: BlogPost = {
      id: Date.now().toString(),
      slug: "",
      title: "",
      excerpt: "",
      content: "",
      image: "",
      date: new Date().toISOString().split("T")[0],
      author: "A-THI Team",
      category: "Account Recovery",
    };
    setEditing(newPost);
    setIsNew(true);
  };

  const handleSave = () => {
    if (!editing) return;
    const slug = editing.slug || editing.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
    const post = { ...editing, slug };

    if (isNew) {
      savePosts([post, ...posts]);
    } else {
      savePosts(posts.map((p) => (p.id === post.id ? post : p)));
    }
    setEditing(null);
    setIsNew(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Delete this post?")) {
      savePosts(posts.filter((p) => p.id !== id));
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-heading text-2xl font-bold text-foreground md:text-3xl">
                <FileText className="mr-2 inline h-7 w-7 text-primary" />
                Blog Admin
              </h1>
              <p className="mt-1 text-sm text-muted-foreground">Create, edit, and manage your blog posts</p>
            </div>
            <button
              onClick={handleNew}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              <Plus className="h-4 w-4" /> New Post
            </button>
          </div>

          {/* Editor modal */}
          {editing && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
              <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading text-lg font-bold text-foreground">{isNew ? "New Post" : "Edit Post"}</h2>
                  <button onClick={() => { setEditing(null); setIsNew(false); }} className="text-muted-foreground hover:text-foreground">
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Title</label>
                    <input
                      value={editing.title}
                      onChange={(e) => setEditing({ ...editing, title: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Post title..."
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Category</label>
                      <input
                        value={editing.category || ""}
                        onChange={(e) => setEditing({ ...editing, category: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="e.g. Account Recovery"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-foreground">Date</label>
                      <input
                        type="date"
                        value={editing.date}
                        onChange={(e) => setEditing({ ...editing, date: e.target.value })}
                        className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Slug (auto-generated if empty)</label>
                    <input
                      value={editing.slug}
                      onChange={(e) => setEditing({ ...editing, slug: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="auto-generated-from-title"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Image</label>
                    <input
                      value={editing.image.startsWith("data:") ? "" : editing.image}
                      onChange={(e) => setEditing({ ...editing, image: e.target.value })}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="https://example.com/image.jpg or upload below"
                    />
                    <div className="mt-2 flex items-center gap-3">
                      <label className="cursor-pointer rounded-lg border border-dashed border-border px-4 py-2 text-xs text-muted-foreground hover:border-primary hover:text-primary transition-colors">
                        Upload Image File
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (!file) return;
                            const reader = new FileReader();
                            reader.onload = () => setEditing({ ...editing, image: reader.result as string });
                            reader.readAsDataURL(file);
                          }}
                        />
                      </label>
                      {editing.image && (
                        <img src={editing.image} alt="preview" className="h-10 w-16 rounded object-cover border border-border" />
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Excerpt</label>
                    <textarea
                      value={editing.excerpt}
                      onChange={(e) => setEditing({ ...editing, excerpt: e.target.value })}
                      rows={2}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Short description..."
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-foreground">Content (Markdown)</label>
                    <textarea
                      value={editing.content}
                      onChange={(e) => setEditing({ ...editing, content: e.target.value })}
                      rows={12}
                      className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm font-mono text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="## Heading&#10;&#10;Your content here..."
                    />
                  </div>
                </div>

                <div className="mt-6 flex justify-end gap-3">
                  <button
                    onClick={() => { setEditing(null); setIsNew(false); }}
                    className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground hover:bg-muted"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSave}
                    className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:brightness-110"
                  >
                    <Save className="h-4 w-4" /> Save Post
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Posts list */}
          <div className="mt-8 space-y-3">
            {posts.map((post) => (
              <div key={post.id} className="flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition hover:border-primary/30">
                {post.image && (
                  <img src={post.image} alt="" className="h-16 w-24 shrink-0 rounded-lg object-cover" />
                )}
                <div className="min-w-0 flex-1">
                  <h3 className="truncate font-heading text-sm font-semibold text-foreground">{post.title}</h3>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    {post.category && <span className="mr-2 rounded bg-primary/10 px-1.5 py-0.5 text-primary">{post.category}</span>}
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}
                  </p>
                </div>
                <div className="flex shrink-0 gap-2">
                  <button
                    onClick={() => { setEditing(post); setIsNew(false); }}
                    className="rounded-lg border border-border p-2 text-muted-foreground transition hover:border-primary hover:text-primary"
                  >
                    <Edit2 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(post.id)}
                    className="rounded-lg border border-border p-2 text-muted-foreground transition hover:border-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {posts.length === 0 && (
            <div className="mt-16 text-center">
              <FileText className="mx-auto h-12 w-12 text-muted-foreground/40" />
              <p className="mt-3 text-muted-foreground">No posts yet. Create your first blog post!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default BlogAdmin;
