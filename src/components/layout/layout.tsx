import Nav from '../../components/nav/nav'

export default function layout(props) {
    return (
        <>
            <Nav></Nav>
            <div className="flex-1">
                {props.children}
            </div>
        </>
    )
}
