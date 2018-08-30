import React from 'react';
import { EditButton,TextInput,Edit,Create,List, TextField,DisabledInput } from 'react-admin';
import DynamicForm from './DynamicForm';
import DynamicDatagrid from './DynamicDatagrid';
import Rest from './Rest';
import Hidden from './Hidden';


export const DynamicList = (props) => (
    <List {...props}>
        <DynamicDatagrid>
            <Hidden source="id" />
            <TextField source="name" />
            <Rest/>
            <EditButton />
        </DynamicDatagrid>
    </List>
);

const DynamicTitle = ({ record }) => {
    return <span>Pet {record ? `"${record.name}"` : ''}</span>;
};


export const DynEdit = (props) => (
    <div>  {console.log(props)}</div>
);

export const DynamicEdit = (props) => (
    <div><Edit title={<DynamicTitle />} {...props}>
        <DynamicForm>
            <Hidden source="id" />
            <Rest/>
        </DynamicForm>
    </Edit></div>
);

export const DynamicCreate = (props) => (
    <Create {...props}>
        <DynamicForm mode='create'>
            <TextInput source="name" />
            <Rest/>
        </DynamicForm>
    </Create>
);