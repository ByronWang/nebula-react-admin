import React from 'react';
import { SimpleForm,FormInput, EditButton,TextInput,Edit,Create,DisabledInput,List, Datagrid, TextField } from 'react-admin';
import DynamicForm, { Rest } from './dynamic/DynamicForm';
import DynamicDatagrid from './dynamic/DynamicDatagrid';
import Rest from './dynamic/Rest';


export const UserList = (props) => (
    <List {...props}>
        <DynamicDatagrid>
            <TextField source="id" />
            <Rest />
            <EditButton />
        </DynamicDatagrid>
    </List>
);

const UserTitle = ({ record }) => {
    return <span>User {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = (props) => (
    <div><Edit title={<UserTitle />} {...props}>
        <DynamicForm>
            <Rest/>
        </DynamicForm>
    </Edit></div>
);

export const UserCreate = (props) => (
    <Create {...props}>
        <DynamicForm mode='create'>
            <TextInput source="name" />
        </DynamicForm>
    </Create>
);