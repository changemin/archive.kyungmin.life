import styled from "styled-components"

export default function NavBar() {
    return (
        <NavBarWrapper>
            <p>nav bar</p>
            <a href={`/info`}>info</a>
            <a href={`/works`}>works</a>
        </NavBarWrapper>
    )
}

const NavBarWrapper = styled.div`
    padding: 10px;
`