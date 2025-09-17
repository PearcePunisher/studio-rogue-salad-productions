import {defineField, defineType} from 'sanity'

// Reusable portable text definition (basic)
const blockContent = defineType({
  name: 'blockContent',
  title: 'Block Content',
  type: 'array',
  of: [
    {type: 'block'},
    // Additional custom blocks can be added here later
  ],
})

// Section: Rich text / blocks
const blockSection = defineType({
  name: 'blockSection',
  title: 'Block Section',
  type: 'object',
  fields: [
    defineField({name: 'internalTitle', title: 'Internal Title', type: 'string', description: 'Editor-only label for this section'}),
    defineField({name: 'heading', title: 'Heading', type: 'string'}),
    defineField({name: 'content', title: 'Content', type: 'blockContent'}),
  ],
  preview: {
    select: {title: 'internalTitle', heading: 'heading'},
    prepare({title, heading}) {
      return {
        title: title || heading || 'Block Section',
        subtitle: 'Block Section',
      }
    },
  },
})

// Section: Quote
const quoteSection = defineType({
  name: 'quoteSection',
  title: 'Quote Section',
  type: 'object',
  fields: [
    defineField({name: 'quote', title: 'Quote', type: 'text', validation: (r) => r.required()}),
    defineField({name: 'author', title: 'Author', type: 'string'}),
    defineField({name: 'role', title: 'Role/Company', type: 'string'}),
  ],
  preview: {
    select: {quote: 'quote', author: 'author'},
    prepare({quote, author}) {
      return {
        title: author ? `${author}` : 'Quote',
        subtitle: (quote || '').slice(0, 60) + (quote && quote.length > 60 ? '…' : ''),
      }
    },
  },
})

// CTA variants enum
const ctaVariantOptions = [
  {title: 'Primary (Work With Me)', value: 'primary'},
  {title: 'Secondary (Purchase)', value: 'secondary'},
  {title: 'Outline', value: 'outline'},
]

// Section: Call To Action
const ctaSection = defineType({
  name: 'ctaSection',
  title: 'CTA Section',
  type: 'object',
  fields: [
    defineField({name: 'variant', title: 'Variant', type: 'string', options: {list: ctaVariantOptions}, validation: (r) => r.required()}),
    defineField({name: 'heading', title: 'Heading', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'body', title: 'Body', type: 'text'}),
    defineField({name: 'buttonLabel', title: 'Button Label', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'buttonUrl', title: 'Button URL', type: 'url', validation: (r) => r.required()}),
  ],
  preview: {
    select: {heading: 'heading', variant: 'variant'},
    prepare({heading, variant}) {
      return {
        title: heading || 'CTA',
        subtitle: `CTA (${variant || 'variant'})`,
      }
    },
  },
})

// Section: Image
const imageSection = defineType({
  name: 'imageSection',
  title: 'Image Section',
  type: 'object',
  fields: [
    defineField({name: 'image', title: 'Image', type: 'image', options: {hotspot: true}, validation: (r) => r.required()}),
    defineField({name: 'alt', title: 'Alt Text', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'caption', title: 'Caption', type: 'string'}),
    defineField({name: 'fullWidth', title: 'Full Width', type: 'boolean'}),
    defineField({name: 'credit', title: 'Credit', type: 'string'}),
  ],
  preview: {
    select: {alt: 'alt'},
    prepare({alt}) {
      return {
        title: alt || 'Image Section',
        subtitle: 'Image',
      }
    },
  },
})

export const pageType = defineType({
  name: 'page',
  title: 'Page',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Title', type: 'string', validation: (r) => r.required()}),
    defineField({name: 'slug', title: 'Slug', type: 'slug', options: {source: 'title'}, validation: (r) => r.required()}),
    defineField({name: 'seoDescription', title: 'SEO Description', type: 'text', rows: 3, validation: (r) => r.max(160)}),
    defineField({name: 'heroImage', title: 'Hero Image', type: 'image', options: {hotspot: true}}),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      validation: (r) => r.min(1),
      of: [
        {type: 'blockSection'},
        {type: 'quoteSection'},
        {type: 'ctaSection'},
        {type: 'imageSection'},
      ],
    }),
  ],
  preview: {
    select: {title: 'title', slug: 'slug.current', media: 'heroImage'},
    prepare({title, slug, media}) {
      return {
        title: title || 'Untitled Page',
        subtitle: slug ? `/${slug}` : 'No slug',
        media,
      }
    },
  },
})

// Export all related types for registration
export const pageRelatedTypes = [blockContent, blockSection, quoteSection, ctaSection, imageSection, pageType]
