import type {MDXComponents} from 'mdx/types'
import Note from '@/components/pages/Note'
import Image from '@/components/pages/Image'

export function useMDXComponents(components: MDXComponents): MDXComponents {
    return {
        // h1: ({children}) => (
        //     <Typography variant="h1" sx={{textAlign: 'center', my: 4}}>
        //         {children}
        //     </Typography>
        // ),
        // h2: ({children}) => (
        //     <Typography variant="h2" sx={{textAlign: 'center', my: 3}}>
        //         {children}
        //     </Typography>
        // ),
        // h3: ({children}) => (
        //     <Typography variant="h3" sx={{textAlign: 'left', my: 2}}>
        //         {children}
        //     </Typography>
        // ),

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
        // p: ({children}) => (
        //     <p
        //         style={{
        //             marginBottom: '1.5em',
        //             marginTop: '1.5em',
        //         }}
        //     >
        //         {children}
        //     </p>
        // ),
        // blockquote: ({children}) => (
        //     <Note>
        //         {children}
        //     </Note>
        // ),

        ...components,
    }
}