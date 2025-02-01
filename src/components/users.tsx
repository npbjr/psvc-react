import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EmailField,
    EditButton,
    DeleteButton,
    Create,
    SimpleForm,
    TextInput,
    SelectInput,
    Toolbar,
    SaveButton,
    Edit
} from 'react-admin';
const roles = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' },
];

export const AccountsList: React.FC = (props:any) => (
    <List {...props}>
         <Datagrid>
             <TextField source="id" />
             <TextField source="username" />
             <EmailField source="email" />
             <TextField source="role" />
             <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const AccountsCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="username" defaultValue=" " />
            <EmailField source="email" defaultValue=" " />
            <TextInput source="password" type="password" defaultValue="" />
            <SelectInput source="role" choices={roles} />
        </SimpleForm>
    </Create>
);

export const AccountsEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="username" defaultValue=" " />
            <EmailField source="email" defaultValue=" " />
            <TextInput source="password" type="password" defaultValue="" />
            <SelectInput source="role" choices={roles} />
        </SimpleForm>
    </Edit>
);