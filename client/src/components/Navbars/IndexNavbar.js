
import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
    Button,
    Collapse,
    NavbarBrand,
    Navbar,
    NavItem,
    Nav,
    Container,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownToggle,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import GlobalContext from '../../Context/GlobalContext'
import Loader from 'react-loader-spinner'
function IndexNavbar() {
    const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);
    const context = React.useContext(GlobalContext)


    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle("nav-open");
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299 ||
                document.body.scrollTop > 119
            ) {
                setNavbarColor("");
            } else if (
                document.documentElement.scrollTop < 300 ||
                document.body.scrollTop < 120
            ) {
                setNavbarColor("navbar-transparent");
            }
        };

        window.addEventListener("scroll", updateNavbarColor);

        return function cleanup() {
            window.removeEventListener("scroll", updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        title="Coded by Creative Tim"
                        to="/home"
                        tag={Link}
                    >
                        E-Commerce
                     </NavbarBrand>

                    <button
                        aria-expanded={navbarCollapse}
                        className={classnames("navbar-toggler navbar-toggler", {
                            toggled: navbarCollapse,
                        })}
                        onClick={toggleNavbarCollapse}
                    >
                        <span className="navbar-toggler-bar bar1" />
                        <span className="navbar-toggler-bar bar2" />
                        <span className="navbar-toggler-bar bar3" />
                    </button>
                </div>
                <Collapse
                    className="justify-content-end"
                    navbar
                    isOpen={navbarCollapse}
                >
                    {context.token ?
                        <Nav navbar>
                            {

                                context.user ?
                                    <UncontrolledDropdown nav inNavbar>
                                        <DropdownToggle nav caret>
                                            {context.user.username}
                                        </DropdownToggle>
                                        <DropdownMenu right>
                                            <DropdownItem tag={Link} to="/orders">
                                                Orders
                                            </DropdownItem>
                                            <DropdownItem tag={Link} to={`/profile`}>
                                                Settings
                                    </DropdownItem>
                                            <DropdownItem divider />
                                            <DropdownItem onClick={context.disconnectUser}>
                                                <strong>Disconnect</strong>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </UncontrolledDropdown>
                                    :
                                    <Loader
                                        style={{ margin: 'auto' }}
                                        type="Rings"
                                        color="#00BFFF"
                                        height={50}
                                        width={50}

                                    />
                            }
                        </Nav>

                        :
                        <Nav navbar>
                            <NavItem>
                                <Link to="/login">
                                    <Button
                                        className="btn-round"
                                        color="warning"
                                    >
                                        Login
                             </Button>

                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/signup">
                                    <Button
                                        className="btn-round"
                                        color="danger"
                                    >
                                        Sign Up
                             </Button>

                                </Link>
                            </NavItem>
                        </Nav>}
                </Collapse>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;
