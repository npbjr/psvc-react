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
    ImageInput,
    SearchInput
} from 'react-admin';
const postFilters = [
    <SearchInput source="q" alwaysOn />,
    <TextInput label="Title" source="title" defaultValue="Hello, World!" />,
];
export const LottoResultList: React.FC = (props:any) => (
    <List {...props} filters={postFilters}>
         <Datagrid>
             <TextField source="id" />
             <TextField source="combinations" />
             <TextField source="drawdate" />
             <TextField source="gameType" />
             <EditButton />
            <DeleteButton />
        </Datagrid>
    </List>
);

import { useState } from 'react';
import axios from 'axios';
import { Form, Button, useNotify } from 'react-admin';

export const LottoAISearch: React.FC = (props: any) => {
    const [searchResult, setSearchResult] = useState<string | null>(null);
    const notify = useNotify();

    const handleSearch = async (data: any) => {
        try {
            const response = await axios.get(`http://127.0.0.1:3000/lotto/searchAI`, {
                params: { searchText: data.search }
            });
            setSearchResult(response.data); // Assuming response.data contains the result
            notify(`Search completed successfully!`);
        } catch (error:any) {
            console.error('Error fetching data:', error);
            notify(`Error fetching data: ${error.message}`);
        }
    };
    const clearResults = () => {
        setSearchResult(null); // Clear the search results
    };

    return (
        <div>
            <Form onSubmit={handleSearch} className="search-form">
                <TextInput 
                    source="search" 
                    className="search-input" 
                    placeholder="Search..." 
                />
                <Button type="submit" label="Search" />
            </Form>
            {searchResult && (
                <div className="search-results">
                    <h3>Search Results:</h3>
                    <p>{searchResult}</p> {/* Display the result here */}
                    <Button onClick={clearResults} label="Clear Results" />
                </div>
            )}
        </div>
    );
};
