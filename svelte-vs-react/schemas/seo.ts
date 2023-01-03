import { AdjustmentsVerticalIcon } from "@heroicons/react/24/outline";
import { defineType } from "sanity";


export const seo = defineType({
    name: "seo",
    title: "SEO",
    type: "document",
    icon: AdjustmentsVerticalIcon,
    fields: [
        {
            name: "title",
            title: "Title",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
            validation: (Rule) => Rule.min(50).max(160).warning("Recommended length is 50-160 characters"),
        }
    ]
})