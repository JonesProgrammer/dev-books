import { defineCollection, z } from "astro:content";
// z -> zad schema

const books = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        readtime: z.number(),
        description: z.string(),
        buy: z.object({
            Colombia: z.string().url(),
            USA: z.string().url(),
        })
    })
})

export const collections = { books }