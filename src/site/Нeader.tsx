 type HeaderType = {
    title: string

 }


export const Header = (props:HeaderType ) => {
    return (
        <>
            {props.title}
        </>
    )
}

export default Header;