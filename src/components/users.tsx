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
    Edit,
    DateField,
    DateTimeInput,
    ImageInput
} from 'react-admin';
const roles = [
    { id: 'admin', name: 'Admin' },
    { id: 'user', name: 'User' },
];

const accountStatus = [
    {id: 'active', name: 'Active'},
    {id: 'suspended', name:'Suspended'}
]

export const AccountsList: React.FC = (props:any) => (
    <List {...props}>
         <Datagrid>
             <TextField source="id" />
             <EmailField source="email" />
             <TextField source="role" />
             <TextField source="accountStatus" />
             <TextField source="dateCreated" />
             <TextField source="dateModified" />
             <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

export const AccountsCreate = (props:any) => (
    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="username" type="username" defaultValue="" /> */}
            <TextInput source="email" defaultValue=" " />
            <TextInput source="password" type="password" defaultValue="" />
            <SelectInput source="role" choices={roles} />
            <SelectInput source="accountStatus" choices={accountStatus} />
            
        </SimpleForm>
    </Create>
);

export const AccountsEdit = (props:any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="email" defaultValue=" " />
            <TextInput source="password" type="password" defaultValue="" />
            <SelectInput source="role" choices={roles} />
            <SelectInput source="accountStatus" choices={accountStatus} />
            <DateTimeInput source="dateCreated" />
            <DateTimeInput source="dateModified" />
        </SimpleForm>
    </Edit>
);