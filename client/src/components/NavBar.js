import {Nav, Navbar, Button, Container} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {Context} from "../index";
import {useContext} from "react";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>Online Store</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"}>Admin panel</Button>
                        <Button variant={"outline-light"} className={'ml-2'} onClick={() => user.setAuth(false)}>Logout</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{color: 'white'}}>
                        <Button variant={"outline-light"} onClick={() => user.setAuth(true)}>Login</Button>
                    </Nav>
                }
            </Container>
        </Navbar>
    );
});

export default NavBar;