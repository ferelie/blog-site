export interface simpleBlogCard {
    title: string;
    description: string;
    slug: string;
    titleImage: string;
    currentSlug: string
}

export interface fullBlog {
    currentSlug: string,
    title: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    titleImage: any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    content: any
}