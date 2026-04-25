'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AnimateOnScroll from '@/components/AnimateOnScroll'

interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  tags?: string[]
}

interface InsightsCategoryFilterProps {
  articles: Article[]
  categories: string[]
}

export default function InsightsCategoryFilter({ articles, categories }: InsightsCategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? articles
    : articles.filter(
        (a) => a.category.toLowerCase() === activeCategory.toLowerCase()
      )

  return (
    <>
      {/* Category Filter */}
      <section className="bg-[#F7F4EE] pb-[40px] px-[80px] max-md:px-[20px]">
        <div className="max-w-container mx-auto flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-sans text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 ${
                cat === activeCategory
                  ? 'bg-[#333333] text-[#F7F4EE]'
                  : 'bg-[#FAFAF8] border border-[#E8E6E1] text-[#333333] hover:border-[#1d7682] hover:text-[#1d7682]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-[#F7F4EE] section-padding">
        <div className="max-w-container mx-auto">
          {filtered.length === 0 ? (
            <p className="font-sans text-base text-[#5b6a71] text-center py-12">
              No articles in this category yet. Check back soon.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((article, i) => (
                <AnimateOnScroll key={article.slug} delay={i * 100}>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group block bg-[#FAFAF8] border border-[#E8E6E1] rounded-[12px] overflow-hidden hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] transition-all duration-300"
                  >
                    <div className="h-[200px] max-md:h-[180px] relative overflow-hidden">
                      <Image
                        src={article.image}
                        alt={`${article.title} | wealth management insights for Arizona, California, and Nevada families`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <div className="p-7">
                      <span className="font-sans text-[11px] font-bold uppercase text-[#1d7682] tracking-[1.5px]">
                        {article.category}
                      </span>
                      {article.tags && article.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {article.tags.map((tag) => (
                            <span
                              key={tag}
                              className="font-sans text-[10px] font-medium text-[#5b6a71] bg-[#F7F4EE] px-2 py-0.5 rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <h3 className="font-serif text-[20px] font-semibold text-[#333333] mt-3 leading-snug group-hover:text-[#1d7682] transition-colors duration-200">
                        {article.title}
                      </h3>
                      <p className="font-sans text-sm text-[#5b6a71] mt-2 leading-relaxed">
                        {article.excerpt}
                      </p>
                      <p className="font-sans text-caption text-[#5b6a71] mt-4">
                        {article.date} · {article.readTime}
                      </p>
                    </div>
                  </Link>
                </AnimateOnScroll>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
