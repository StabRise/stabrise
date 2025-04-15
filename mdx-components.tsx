import type { MDXComponents } from 'mdx/types'
import { componentsPages as definedComponents } from "@/components/MDXComponents";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    ...definedComponents,
  }
}
