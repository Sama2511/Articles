import { UserIcon } from "lucide-react";
import { defineField, defineType } from "sanity";

export const author = defineType(schemaDefinition: {
    name: "author",
    title: "Author",
    type: "document",
    icon: UserIcon
    fields: [
        defineField(schemaField{
            name: "name",
            title: "Name",
        })]



})