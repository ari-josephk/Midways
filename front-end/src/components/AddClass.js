import React from "react"
import {Button, ButtonGroup, ButtonToolbar, Modal} from "react-bootstrap";
import Recitation from "./Recitation";
import ScheduleCalendar from './ScheduleCalendar'

const desc = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam est augue, facilisis eu mauris nec, faucibus facilisis eros. Etiam id mi sed justo elementum consequat sit amet vel turpis. Nullam et ornare tortor. Proin consequat quis nibh eget facilisis. Etiam erat velit, cursus in urna ut, tristique tincidunt augue. Nulla sapien quam, suscipit id metus vel, vestibulum tincidunt sem. Nam.";
const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function getTimeFormat(meetings){
  let meetingList = []
  meetings.forEach(meeting => {
    const meetingDate = new Date(meeting.beginDate)
    meetingList.push(
      `${weekday[meetingDate.getDay()]} ${meetingDate.toLocaleTimeString('en-US', {timeStyle: 'short'})}`
    )

  })
  return meetingList.join(', ');
}

export default function AddClass(props) {
    const classObject = props.classObject;
	return (
    <>
      <Modal show={true}>
        <Modal.Header>
          <Modal.Title>
            <b>{classObject.name}</b> ({classObject.registrationNumber})
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <b>Department: </b>Computer Science [Placeholder]
          </p>
          <p>
            <b>Instructor: </b>
            {classObject.instructors}
          </p>
          <p>
            <b>Location: </b>
            {classObject.location}
          </p>
          <p>
            <b>Time: </b>
            {classObject.meetings ? getTimeFormat(classObject.meetings) : "No Time"}
          </p>
          <p>
            <b>Status: </b>
            {classObject.status}
          </p>
          <b>Description:</b>
          <p>{desc}</p>
          <b>Recitations:</b>
          {classObject.recitations ? (
            classObject.recitations.map((rec) => {
              return <Recitation {...rec}></Recitation>;
            })
          ) : (
            <Modal.Body>No Recitations</Modal.Body>
          )}
        </Modal.Body>
        <ButtonToolbar className="justify-content-between" block>
            <ButtonGroup><Button variant="danger" onClick={()=>props.hide(classObject)}>Cancel</Button>
          <Button variant="secondary">Add to Cart</Button>
          <Button>ENROLL</Button></ButtonGroup>
          <ButtonGroup><ScheduleCalendar
                classIDs={[classObject.registrationNumber]}
                /></ButtonGroup>
          
        </ButtonToolbar>
      </Modal>
    </>
  );
}
