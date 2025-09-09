"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Tag } from "lucide-react";

// Features:
// - Search by title/content
// - Category chips
// - Responsive grid of blog cards
// - Simple client-side pagination

const BLOGS = [
  {
    id: 1,
    title: "How to Get Started with React",
    excerpt:
      "Learn the basics of React, components, hooks, and building your first app.",
    category: "React",
    date: "2024-08-10",
    readTime: "4 min",
    image: "/assets/blog1.jpg",
    slug: "/blogs/react-getting-started",
  },
  {
    id: 2,
    title: "Tailwind Tips for Practical UI",
    excerpt: "Small Tailwind tricks that make your UI look polished quickly.",
    category: "CSS",
    date: "2024-07-15",
    readTime: "3 min",
    image: "/assets/blog2.jpg",
    slug: "/blogs/tailwind-tips",
  },
  {
    id: 3,
    title: "Deploying Next.js to Production",
    excerpt: "A short guide to deploying your Next.js app with confidence.",
    category: "Next.js",
    date: "2024-06-02",
    readTime: "5 min",
    image: "/assets/blog3.jpg",
    slug: "/blogs/nextjs-deploy",
  },
  {
    id: 4,
    title: "Writing Clean JavaScript",
    excerpt: "Practices and patterns that keep your JS code maintainable.",
    category: "JavaScript",
    date: "2024-05-21",
    readTime: "6 min",
    image: "/assets/blog4.jpg",
    slug: "/blogs/clean-js",
  },
  {
    id: 5,
    title: "Accessibility Basics",
    excerpt: "Make your web apps usable for everyone with these tips.",
    category: "UX",
    date: "2024-04-30",
    readTime: "4 min",
    image: "/assets/blog5.jpg",
    slug: "/blogs/accessibility-basics",
  },
];

export default function Blogs({ data = BLOGS }) {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("All");
  const [page, setPage] = useState(1);
  const perPage = 6;

  const categories = useMemo(() => {
    const cats = Array.from(new Set(data.map((b) => b.category)));
    return ["All", ...cats];
  }, [data]);

  const filtered = useMemo(() => {
    return data.filter((b) => {
      const matchesCategory = active === "All" ? true : b.category === active;
      const matchesQuery = `${b.title} ${b.excerpt}`
        .toLowerCase()
        .includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [data, query, active]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / perPage));
  const paginated = filtered.slice((page - 1) * perPage, page * perPage);

  const goto = (p) => setPage(Math.min(Math.max(1, p), totalPages));

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        <h2 className="text-3xl font-bold">Latest Blogs</h2>

        <div className="flex items-center gap-3 w-full md:w-auto">
          <Input
            placeholder="Search articles..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setPage(1);
            }}
            className="md:w-96"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => {
              setActive(c);
              setPage(1);
            }}
            className={`px-3 py-1 rounded-full text-sm flex items-center gap-2 border ${
              active === c
                ? "bg-blue-600 text-white border-blue-600"
                : "bg-transparent text-gray-700 border-gray-200"
            }`}
          >
            <Tag className="w-4 h-4" /> {c}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {paginated.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardContent className="p-0">
              <div className="relative w-full h-44">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-xs text-gray-500">{post.date}</span>
                  </div>
                  <span className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-4 h-4" /> {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{post.excerpt}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Badge>{post.category}</Badge>
                  </div>

                  <Link
                    href={post.slug}
                    className="text-blue-600 hover:underline text-sm font-medium"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-3 mt-8">
        <Button
          variant="outline"
          size="sm"
          onClick={() => goto(page - 1)}
          disabled={page === 1}
        >
          Prev
        </Button>
        <div className="text-sm text-gray-600">
          Page {page} of {totalPages}
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => goto(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </Button>
      </div>
    </section>
  );
}
