import React from 'react';
import { Modal, Row, Col } from 'react-bootstrap';

const NoticeModal = (props) => {
  return (
    <Modal {...props} size="md" aria-labelledby="contained-modal-title-vcenter" centered >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          <Row>
            <Col lg={1} md={1} sm={1} xs={1}>
              <img alt="calendar icon" src='/img/calendar.svg'/>
            </Col>
            <Col lg="auto" md="auto" sm="auto" xs="auto">
              Just a little info first.
            </Col>
          </Row>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          In order to assure that the bounce house you want is
          available when you need it, we will need to know the <strong>date of your event</strong>.
        </p>
      </Modal.Body>
    </Modal>
  )
}

export default NoticeModal;
