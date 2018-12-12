import React from 'react';
import { Form, FormGroup, Input } from 'reactstrap';

const Mode = (props) => (
  <div>
    <Form>
      <FormGroup>
        <div>{props.users.username}</div>
        <Input className="btn" id='droptop' type="select" name="sender" onChange={props.formChange}>
          <option value='FROM'>FROM</option>
          {props.users.map((user) => 
          (<option value={user._id} key={user._id}>{user.username}</option>)
          )}
        </Input>
        <Input className="btn" id='droptop' type="select" name="receiver" onChange={props.formChange}>
          <option value='TO'>TO</option>
          {props.users.map((user) => <option value={user._id} key={user._id}>{user.username}</option>)}
        </Input>

        <Input type="text" name="title" placeholder="Enter a title.." onChange={props.formChange}/>


        <Input type="textarea" name="body" placeholder="Enter a message.." onChange={props.formChange}/>
      </FormGroup>
    </Form>
  </div>
);

export default Mode;