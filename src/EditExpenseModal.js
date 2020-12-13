import React from 'react';
import { Modal, Form, Button, Label, Header } from 'semantic-ui-react';

const EditExpenseModal = (props) => {
  console.log("in edit expense modal")  
  console.log(props);
  return (
    <Modal open={props.open}>
      <Header>Edit Expense</Header>
      <Modal.Content>
        <Form onSubmit={props.closeAndEdit}>
        <Label>Date:</Label>
          <Form.Input
            type="date"
            name="exp_date"
            value={props.expenseToEdit.exp_date}
            onChange={props.handleEditChange}
          />
          <Label>Description:</Label>
          <Form.Input
            type="text"
            name="exp_descr"
            value={props.expenseToEdit.exp_descr}
            onChange={props.handleEditChange}
          />
          <Label>Amount:</Label>
          <Form.Input
            type="number"
            name="exp_amt"
            value={props.expenseToEdit.exp_amt}
            onChange={props.handleEditChange}
          />
          <Label>Comment:</Label>
          <Form.Input
            type="text"
            name="comment"
            value={props.expenseToEdit.exp_comment}
            onChange={props.handleEditChange}
          />
          <Modal.Actions>
            <Button color="green" type="submit">
              Edit Song
            </Button>
          </Modal.Actions>
        </Form>
      </Modal.Content>
    </Modal>
  );
};

export default EditExpenseModal;