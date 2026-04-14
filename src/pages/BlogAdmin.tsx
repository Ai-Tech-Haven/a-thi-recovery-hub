import { useEffect } from "react";

/**
 * Blog admin is now powered by Decap CMS at /admin
 * This component just redirects there.
 */
const BlogAdmin = () => {
  useEffect(() => {
    window.location.replace("/admin/");
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <p className="text-muted-foreground">Redirecting to Blog Admin...</p>
    </div>
  );
};

export default BlogAdmin;
