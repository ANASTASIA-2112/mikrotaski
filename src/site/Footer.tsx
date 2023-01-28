
type ForFooterType = {
    titleForFooter: string

}

export const Footer = (props:ForFooterType) => {
    return (
        <>
            {props.titleForFooter}
        </>

    )
}

export default Footer;