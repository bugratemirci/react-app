import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Form, Button, FormGroup, Label, Input } from "reactstrap";


export default class FormDemo2 extends Component {
    state = {
        email: "",
        password: "",
        city: "",
        description: ""
    };
    onChangeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;

        this.setState({ [name]: value });
    };
    onSubmitHandler = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + " added to db!");
        alertify.success(this.state.password + " added to db!");
        alertify.success(this.state.city + " added to db!");
        alertify.success(this.state.description + " added to db!");
   
    }
    render() {
        return (
            <div>
                <Form onSubmit={this.onSubmitHandler}>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Enter email"
                            onChange={this.onChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Enter password"
                            onChange={this.onChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="description">Description</Label>
                        <Input
                            type="textarea"
                            name="description"
                            id="description"
                            placeholder="Enter description"
                            onChange={this.onChangeHandler}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input
                            type="select"
                            name="city"
                            id="city"
                            onChange={this.onChangeHandler}
                        >
                            <option>Ankara</option>
                            <option>İzmir</option>
                            <option>İstanbul</option>
                            <option>Kastamonu</option>
                        </Input>
                    </FormGroup>
                    <Button type="submit">Save</Button>
                </Form>
            </div>
        )
    }
}
