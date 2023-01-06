import { defineType } from "sanity";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"

export const product = defineType({
    name: "product",
    title: "Product",
    type: "document",
    icon: ShoppingBagIcon,
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "description",
            title: "Description",
            type: "text",
        },
        {
            name: "price",
            title: "Price",
            type: "number",
            validation: (Rule) => Rule.min(0)
        },
        {
            name: "image",
            title: "Image",
            type: "image",
        }
    ]
})