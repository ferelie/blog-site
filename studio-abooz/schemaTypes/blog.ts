export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of Blog Article',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'titleImage',
      type: 'image',
      title: 'Title Image',
      
    },
    {
        name: 'description',
        type: 'string',
        title: 'Description',
    },
    {
        name: 'content',
        type: 'array',
        title: 'Content',
        of: [{ type: 'block' }],
    }
  ],
}
