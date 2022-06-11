import "./App.css";
import {
  Card,
  Row,
  Col,
  Container,
  Navbar,
  Nav,
  Dropdown,
  Form,
} from "react-bootstrap";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import logoimg from "./img/logo512.png";
import homeicon from "./img/home.png";
import interneticon from "./img/internet.png";
import chart from "./img/bar-chart.png";
import likeicon from "./img/like.png";
import moneyicon from "./img/money.png";
import ipoicon from "./img/ipo.png";
import moreicon from "./img/more.png";
import usericon from "./img/user.png";

function App() {
  return (
    <div>
      <Navbar bg="light" variant="light" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={logoimg}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
          </Navbar.Brand>

          <Navbar.Collapse className="justify-content-center">
            <div className="me-auto"></div>
            <Nav>
              <Nav.Link href="#home">
                <img
                  src={interneticon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                เว็บไซต์หลัก
              </Nav.Link>
              <Nav.Link href="#home">
                <img
                  src={chart}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                มูลค่าหน่วยลงทุน
              </Nav.Link>
              <Nav.Link href="#home">
                <img
                  src={likeicon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                กองทุนแนะนำ
              </Nav.Link>
              <Nav.Link href="#home">
                <img
                  src={ipoicon}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                กองทุนใหม่
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container style={{ padding: 20, marginTop: 20 }}>
        <br />
        <Container>
          <Row>
            <Col>
              <Dropdown>
                <Dropdown.Toggle variant="light" id="dropdown-basic">
                  ประเภทกองทุนทั้งหมด
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    ประเภทกองทุนทั้งหมด
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    กองทุนตราสารหนี้
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    กองทุนรวมตราสารทุน
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    กองทุนรวมตลาดเงิน
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    กองทุนรวมที่ลงทุนในต่างประเทศ
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">กองทุนรวมผสม</Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    กองทุนรวมเพื่อการเลี้ยงชีพ
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    กองทุนรวมเพื่อการออม ชนิดเพื่อการออม (SSF)
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    กองทุนรวมเพื่อการออม ชนิดเพื่อการออมพิเศษ
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">
                    กองทุนรวมหุ้นระยะยาว
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    ตราสารหนี้ต่างประเทศ
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">IPO</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
            <Col>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="ค้นหากองทุน"
                  className="me-2"
                  aria-label="Search"
                />
              </Form>
            </Col>
          </Row>
        </Container>
        <Row md={2} lg={3}>
          <Col style={{ paddingTop: 20 }}>
            <Card>
              <Card.Body>
                <Row md={3}>
                  <Col xs={8} md={8} lg={8}>
                    <Card.Text
                      className="trackID"
                      style={{ paddingTop: 10 }}
                    >
                      KTFFE122
                    </Card.Text>
                  </Col>
                  <Col xs={3} md={3} lg={3} style={{width:70}}>
                    <Card.Text className="level">ระดับความเสี่ยง</Card.Text>
                  </Col>
                  <Col md={1} lg={1} xs={1}>
                    <Card.Text className="ranked">4</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Card.Text
                    className="detail"
                      style={{
                        paddingTop: 20,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      กองทุนเปิดกรุงไทยตราสารหนี้ เอฟไอเอฟ เอ็นแฮนซท์122
                      ห้ามขายผู้ลงทุนรายย่อย
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} style={{textAlign:"right"}}>
                    <Card.Text>7 มิ.ย. 2565</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontSize:16}}>
                    <Card.Text>NAV (บาท)</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold"}}>
                    <Card.Text style={{color:'green',fontSize:20}}><AiFillCaretUp/>0.0000</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontWeight:"bold",fontSize:32}}>
                    <Card.Text style={{color:'#00A4E4'}}>10.0000</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold",paddingTop:10}}>
                    <Card.Text style={{color:'green'}}>0.0000 %</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 20 }}>
            <Card>
              <Card.Body>
                <Row md={3}>
                  <Col xs={8} md={8} lg={8}>
                    <Card.Text
                      className="trackID"
                      style={{ paddingTop: 10 }}
                    >
                      KTFFEA6
                    </Card.Text>
                  </Col>
                  <Col xs={3} md={3} lg={3} style={{width:70}}>
                    <Card.Text className="level">ระดับความเสี่ยง</Card.Text>
                  </Col>
                  <Col md={1} lg={1} xs={1}>
                    <Card.Text className="ranked">4</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Card.Text
                    className="detail"
                      style={{
                        paddingTop: 20,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      กองทุนเปิดกรุงไทยตราสารหนี้ เอฟไอเอฟ เอ็นแฮนซท์A6 ห้ามขายผู้ลงทุนรายย่อยอย
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} style={{textAlign:"right"}}>
                    <Card.Text>6 มิ.ย. 2565</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontSize:16}}>
                    <Card.Text>NAV (บาท)</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold"}}>
                    <Card.Text style={{color:'green',fontSize:20}}><AiFillCaretUp/>0.0000</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontWeight:"bold",fontSize:32}}>
                    <Card.Text style={{color:'#00A4E4'}}>10.0000</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold",paddingTop:10}}>
                    <Card.Text style={{color:'green'}}>0.0000 %</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 20 }}>
            <Card>
              <Card.Body>
                <Row md={3}>
                  <Col xs={8} md={8} lg={8}>
                    <Card.Text
                      className="trackID"
                      style={{ paddingTop: 10 }}
                    >
                      KTSV
                    </Card.Text>
                  </Col>
                  <Col xs={3} md={3} lg={3} style={{width:70}}>
                    <Card.Text className="level">ระดับความเสี่ยง</Card.Text>
                  </Col>
                  <Col md={1} lg={1} xs={1}>
                    <Card.Text className="ranked">1</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Card.Text
                    className="detail"
                      style={{
                        paddingTop: 20,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      กองทุนเปิดกรุงไทยตราสารตลาดเงินภาครัฐ
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} style={{textAlign:"right"}}>
                    <Card.Text>9 มิ.ย. 2565</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontSize:16}}>
                    <Card.Text>NAV (บาท)</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold"}}>
                    <Card.Text style={{color:'green',fontSize:20}}><AiFillCaretUp/>0.0000</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontWeight:"bold",fontSize:32}}>
                    <Card.Text style={{color:'#00A4E4'}}>11.7250</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold",paddingTop:10}}>
                    <Card.Text style={{color:'green'}}>0.0000 %</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ paddingTop: 20 }}>
            <Card>
              <Card.Body>
                <Row md={3}>
                  <Col xs={8} md={8} lg={8}>
                    <Card.Text
                      className="trackID"
                      style={{ paddingTop: 10 }}
                    >
                      KTSS
                    </Card.Text>
                  </Col>
                  <Col xs={3} md={3} lg={3} style={{width:70}}>
                    <Card.Text className="level">ระดับความเสี่ยง</Card.Text>
                  </Col>
                  <Col md={1} lg={1} xs={1}>
                    <Card.Text className="ranked">1</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={8}>
                    <Card.Text
                    className="detail"
                      style={{
                        paddingTop: 20,
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      กองทุนเปิดกรุงไทยตราสารตลาดเงิน
                    </Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} style={{textAlign:"right"}}>
                    <Card.Text>9 มิ.ย. 2565</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontSize:16}}>
                    <Card.Text>NAV (บาท)</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold"}}>
                    <Card.Text style={{color:'red',fontSize:20}}><AiFillCaretDown/>-0.0002</Card.Text>
                  </Col>
                </Row>
                <Row>
                  <Col md={6} style={{textAlign:"left",fontWeight:"bold",fontSize:32}}>
                    <Card.Text style={{color:'#00A4E4'}}>13.1316</Card.Text>
                  </Col>
                  <Col md={6} style={{textAlign:"right",fontWeight:"bold",paddingTop:10}}>
                    <Card.Text style={{color:'red'}}>-0.0015 %</Card.Text>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <footer style={{textAlign:'center',backgroundColor:'#00A4E4',padding:20}}>
        Test Job
        <a href="" target="_blank" style={{marginLeft:4,color:'GrayText'}}>
          Rattapoom Ruengkla
        </a>
      </footer>
    </div>
  );
}

export default App;
