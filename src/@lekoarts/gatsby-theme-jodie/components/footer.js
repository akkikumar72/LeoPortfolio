/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import { readableColor } from "polished"
import useSiteMetadata from "@lekoarts/gatsby-theme-jodie/src/hooks/use-site-metadata"

const Footer = ({ bg:bg }) => {
    const { siteTitleAlt } = useSiteMetadata()
    const { theme } = useThemeUI()

    const text = readableColor(
        bg,
        theme?.colors?.textMuted ,
        theme?.colors?.textMutedLight
)
    console.log(theme.colors);
    return (
        <footer
            sx={{
                position: [`relative`, `relative`, `relative`, `fixed`],
                width: (t) => [`100%`, `100%`, `100%`, t.sidebar.normal, t.sidebar.wide],
                bottom: 0,
                color: text,
                fontSize: 0,
                p: [3, 3, 4],
                background: bg,
                a: {
                    color: readableColor(bg),
                    "&:hover,&:focus": {
                        color: readableColor(bg, `primary`, `primaryLight`, false),
                    },
                },
                variant: `footer`,
            }}
        >
            <div>
                &copy; {new Date().getFullYear()} by {siteTitleAlt}.
            </div>
        </footer>
    )
}

export default Footer
