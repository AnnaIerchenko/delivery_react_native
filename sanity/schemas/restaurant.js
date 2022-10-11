export default {
  name: 'restaurant',
  title: 'Restaurant',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Restaurant name',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'short_description',
      title: 'Short description',
      type: 'string',
      validation: (Rule) => Rule.max(200)
    },
    {
      name: 'image',
      title: 'Image of the restaurant',
      type: 'image',
    },
    {
      name: 'lat',
      title: 'Latitude of the restaurant',
      type: 'number',
    },
    {
      name: 'long',
      title: 'Latitude of the Restaurant',
      type: 'number',
    },
    {
      name: 'address',
      title: 'Restaurant address',
      type: 'string',
      validation: (Rule) => Rule.required()
    },
    {
    name: "rating",
    type: "number",
    title: "Enter a Rating from (1-5 stars)",
    validation: (Rule) => 
      Rule.required()
        .min(1)
        .max(5)
        .error("Please enter a Value between 1 and 5"),
    }, 
    {
      name: 'type',
      title: "Category",
      validation: (Rule) => Rule.required(),
      type: 'reference',
      to: [{type: "category"}],
    },
    {
      name: "dishes",
      type: "array",
      title: "Dishes",
      of: [{ type: "reference" , to: [{ type: "dish"}]}]
    }
  ],

}
