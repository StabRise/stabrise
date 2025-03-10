import type {MDXComponents} from 'mdx/types'
import Note from '@/components/pages/Note'
import Image from '@/components/pages/Image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        h1: ({children}) => (
            <h1 className="text-center my-6">
              {children}
            </h1>
        ),
        h2: ({children}) => (
          <h2 className="text-center my-6">
              {children}
          </h2>
        ),
        h3: ({ children }) => (
          <h3 className="text-center my-6">
              {children}
          </h3>
        ),

        // img: ({src, alt, ...props}) => (
        //     <Image
        //         src={src}
        //         alt={alt}
        //         {...props}
        //         sx={{mb: 3, mt: 2}}
        //     />
        // ),
        // a: ({href, children, ...props}) => (
        //     <Link
        //         href={href}
        //         sx={{
        //             color: 'primary.main', // Using primary color from theme
        //             textDecoration: 'none', // Remove underline from the link
        //             '&:hover': {
        //                 color: 'secondary.main', // Change color on hover
        //                 textDecoration: 'underline', // Underline on hover
        //             },
        //         }}
        //         {...props}
        //     >
        //         {children}
        //     </Link>
        // ),
        p: ({children}) => (
            <p className="my-6">
                {children}
            </p>
        ),
        // blockquote: ({children}) => (
        //     <Note>
        //         {children}
        //     </Note>
        // ),

        ...components,
    }
}