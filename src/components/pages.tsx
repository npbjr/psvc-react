
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
import { Button, Loading } from 'react-admin'; 
import { pageClient } from '../rest/pagesAPIClient';

const GeneratePageButton: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false); 

    const handleGeneratePage = async () => {
        setLoading(true); 
        
        try {
            const response = await pageClient.generatePage("1") 
            console.log(response.data); 
        } catch (error) {
            console.error('Error generating page:', error);
        } finally {
            setLoading(false);
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

