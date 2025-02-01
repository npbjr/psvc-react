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

export const PagesList = () => (
    <List>
        <Datagrid>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="endpoint" />
            <TextField source="pageTemplate" />
            <GeneratePageButton />
            <EditButton />
        </Datagrid>
        
    </List>
);

export const PagesCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="endpoint" />
            <TextInput source="pageTemplate" />
        </SimpleForm>
    </Create>
);

export const PagesEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="endpoint" />
            <TextInput source="pageTemplate" />
        </SimpleForm>
    </Edit>
);

export const PagesShow = () => (
    <Show>
        <SimpleShowLayout>
            <TextField source="id" />
            <TextField source="title" />
            <TextField source="endpoint" />
            <TextField source="pageTemplate" />
        </SimpleShowLayout>
    </Show>
);

import { useState } from 'react';
import { Button, Loading } from 'react-admin'; // Import necessary components
import axios from 'axios';
import { pageClient } from '../rest/pagesAPIClient';

const GeneratePageButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false); // Explicitly define the state type

    const handleGeneratePage = async () => {
        setLoading(true); // Set loading to true
        
        try {
            const response = await pageClient.generatePage("1") // Call your NestJS API
            console.log(response.data); // Handle the response as needed
        } catch (error) {
            console.error('Error generating page:', error);
        } finally {
            setLoading(false); // Reset loading state
        }
    };

    return (
        <div>
            <Button onClick={handleGeneratePage} disabled={loading}>
                {loading ? <Loading /> : 'Generate Page'}
            </Button>
        </div>
    );
};

export default GeneratePageButton;

