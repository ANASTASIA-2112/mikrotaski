
type ForBodyType = {
    titleForBody: string

}

export const Body = (props:ForBodyType) => {
    return (
        <div>
            {props.titleForBody}
        </div>
    )
}

export default Body;