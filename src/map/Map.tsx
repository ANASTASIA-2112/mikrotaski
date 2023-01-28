type NewComponentType = {
    students: any

}


export const  NewComponent  = (props: NewComponentType ) => {
    return (
            <div> {props.students} </div>
    )
}

export default  NewComponent ;