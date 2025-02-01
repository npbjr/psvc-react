// src/dataProvider.ts

import {
    CreateParams,
    CreateResult,
    DataProvider,
    DeleteManyParams,
    DeleteManyResult,
    DeleteParams,
    DeleteResult,
    GetManyParams,
    GetManyReferenceParams,
    GetManyReferenceResult,
    GetManyResult,
    GetOneParams,
    GetOneResult,
    RaRecord,
    UpdateManyParams,
    UpdateManyResult,
    UpdateParams,
    UpdateResult,
} from 'react-admin';
import { pageClient } from '../rest/pagesAPIClient';

const PagesProvider: DataProvider = {
    getList: async (resource: string, params) => {
        const response = await pageClient.getPages(); // Adjust based on resource
        const formatted = response.data.map((data: any) => ({
            id: data._id,
            ...data,
        }));
        return {
            data: formatted,
            total: formatted.length,
        };
    },

    getOne: async (resource: string, params: GetOneParams) => {
        const response = await pageClient.getPage(params.id);
        const formatted = {
            id: response.data._id,
            ...response.data,
        };
        return { data: formatted };
        // return {data:response}
    },

    getMany: async <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType>): Promise<GetManyResult<RecordType>> => {
        throw new Error('Function not implemented.');
    },

    getManyReference: async <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams): Promise<GetManyReferenceResult<RecordType>> => {
        throw new Error('Function not implemented.');
    },

    update: async (resource: string, params: UpdateParams) => {
        const response = await pageClient.update(params.id, params.data.username, params.data.password, params.data.role);
        const formatted = {
            id: response.data._id,
            ...response.data,
        };
        return { data: formatted };
    },

    updateMany: async <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> => {
        throw new Error('Function not implemented.');
    },

    create: async (resource: string, params: CreateParams) => {
        const response = await pageClient.create(params.data.title, params.data.endpoint, params.data.pageTemplate);
        const formatted = {
            id: response.data._id,
            ...response.data,
        };
        return { data: formatted };
    },

    delete: async (resource: string, params: DeleteParams) => {
        const response = await pageClient.delete(params.previousData.id);
        return { data: response };
    },

    deleteMany: async <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> => {
        throw new Error('Function not implemented.');
    },
};

export default PagesProvider;
