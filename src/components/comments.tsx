// Pages.js
import React from 'react';
import {
    List,
    Datagrid,
    TextField,
    EditButton,
    Create,
    SimpleForm,
    TextInput,
    Edit,
    Show,
    SimpleShowLayout,
    useNotify,
    useRefresh,
    useRedirect
} from 'react-admin';

export const CommentsList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="comment" />
            <TextField source="pageId" />
            <EditButton />
        </Datagrid>
    </List>
);

export const CommentsCreate = (props:any) => (
   <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="comment" />
            <TextInput source="pageId" />
        </SimpleForm>
    </Create>
);

export const CommentsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="comment" />
            <TextInput source="pageId" />
        </SimpleForm>
    </Edit>
);

export const PagesShow = () => (
    <Show>
        <SimpleShowLayout>
        <TextField source="name" />
            <TextField source="comment" />
            <TextField source="pageId" />
        </SimpleShowLayout>
    </Show>
);