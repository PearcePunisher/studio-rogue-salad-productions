import {defineField, defineType} from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 3,
      validation: (r) => r.max(160),
    }),
    defineField({
      name: 'body',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'sponsorLinks',
      title: 'Sponsor Links',
      type: 'array',
      of: [
        defineField({
          name: 'sponsor',
          title: 'Sponsor',
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string', validation: (r) => r.required()},
            {name: 'url', title: 'URL', type: 'url', validation: (r) => r.required()},
            {name: 'logo', title: 'Logo', type: 'image'},
          ],
        }),
      ],
    }),
    defineField({
      name: 'URL',
      type: 'url',
    }),
  ],
})
