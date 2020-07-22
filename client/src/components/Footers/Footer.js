
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Row, Container } from "reactstrap";

function Footer() {
    return (
        <footer className="footer footer-black footer-white">
            <Container>
                <Row>
                    <div className="credits ml-auto">
                        <span className="copyright">
                            © {new Date().getFullYear()}, made with{" "}
                            <i className="fa fa-heart heart" /> by Amir GHEDIRA
                        </span>
                    </div>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
