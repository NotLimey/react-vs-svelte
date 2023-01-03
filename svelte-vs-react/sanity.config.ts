import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { structure } from "./deskStructure"

export default defineConfig({
  name: 'default',
  title: 'Svelte vs React',

  projectId: '5ggn0o0l',
  dataset: 'production',

  plugins: [deskTool({
    structure
  }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
