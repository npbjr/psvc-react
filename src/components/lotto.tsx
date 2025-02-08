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

export const LottoResultList: React.FC = (props:any) => (
    <List {...props}>
         <Datagrid>
             <TextField source="id" />
             <TextField source="numbers" />
             <TextField source="drawdate" />
             <TextField source="schedule" />
             <TextField source="lottoType" />
             <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);