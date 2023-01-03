import { AdjustmentsVerticalIcon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { ConfigContext } from "sanity";
import { StructureBuilder } from "sanity/desk";

export const structure = (S: StructureBuilder, context: ConfigContext) => {
    return S.list()
        .title("Content")
        .items([
            S.listItem()
                .title('Products')
                .schemaType('product')
                .icon(ShoppingBagIcon)
                .child(S.documentTypeList('product').title('Products')),
            S.listItem()
                .title('Seo')
                .icon(AdjustmentsVerticalIcon)
                .child(
                    S.document()
                        .schemaType('seo')
                        .documentId('seo')
                        .title("SEO")
                ),
        ])
}