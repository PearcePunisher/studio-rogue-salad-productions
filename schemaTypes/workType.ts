import {defineField, defineType} from 'sanity'

export const workType = defineType({
  name: 'work',
  title: 'Work',
  type: 'document',
  fields: [
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'Development', value: 'Development'},
          {title: 'Design', value: 'Design'},
          {title: 'Marketing', value: 'Marketing'},
          {title: 'SEO', value: 'SEO'},
          {title: 'Consulting', value: 'Consulting'},
          {title: 'Project Management', value: 'Project Management'},
          {title: 'eCommerce', value: 'eCommerce'},
          {title: 'UI/UX', value: 'UI/UX'},
        ],
      },
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'grid',
        list: [
          {title: 'WordPress', value: 'WordPress'},
          {title: 'Oxygen Builder', value: 'Oxygen Builder'},
          {title: 'NextJS', value: 'NextJS'},
          {title: 'Kinsta', value: 'Kinsta'},
          {title: 'Advanced Custom Fields', value: 'Advanced Custom Fields'},
        ],
      },
    }),
    defineField({
      name: 'summary',
      title: 'Summary',
      type: 'text',
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'caseStudy',
      title: 'Case Study',
      type: 'object',
      fields: [
        {name: 'problem', title: 'Problem', type: 'text'},
        {name: 'approach', title: 'Approach', type: 'text'},
        {name: 'outcome', title: 'Outcome', type: 'text'},
      ],
    }),
    defineField({
      name: 'plugins',
      title: 'Plugins',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'description', title: 'Description', type: 'text'},
          ],
        },
      ],
    }),
    defineField({
      name: 'credits',
      title: 'Credits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {name: 'name', title: 'Name', type: 'string'},
            {name: 'url', title: 'URL', type: 'url'},
            {name: 'role', title: 'Role', type: 'string'},
          ],
        },
      ],
    }),
  ],
})
