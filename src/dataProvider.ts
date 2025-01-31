// src/dataProvider.ts

import { CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, email, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult } from 'react-admin';
import { apiClient } from './APIClient';
import { User } from './interfaces'; // Import your types

const dataProvider: DataProvider = {
  getList: async (resource: string, params) => {
    const response = await apiClient.getUsers(); // Adjust based on resource
    const formatted = response.data.map((data:any, index: number)=>({
      id:data._id,
      ...data
    }))
    return {
      data: formatted,
      total:formatted.length
    };
  },
  getOne: async (resource: string, params: any) => {
    console.log("GET ONE", params)
    const response = await apiClient.getUser(params.id)
    // throw new Error('Function not implemented.');
    console.log(response)
    const formatted = {
      id:response.data._id,
      ...response.data
    }
    return { data: formatted}
  },
  getMany: function <RecordType extends RaRecord = any>(resource: string, params: GetManyParams<RecordType> & QueryFunctionContext): Promise<GetManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  getManyReference: function <RecordType extends RaRecord = any>(resource: string, params: GetManyReferenceParams & QueryFunctionContext): Promise<GetManyReferenceResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  update: async (resource: string, params: UpdateParams) =>{
    console.log(params)
    const response = await apiClient.update(params.id, params.data.username, params.data.password,params.data.role)
    // throw new Error('Function not implemented.');
    console.log(response)
    const formatted = {
      id:response.data._id,
      ...response.data
    }
    return { data: formatted}
  },
  updateMany: function <RecordType extends RaRecord = any>(resource: string, params: UpdateManyParams): Promise<UpdateManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  },
  create: async (resource: string, params: CreateParams) => {
   
    const response = await apiClient.register(params.data.username, params.data.password,params.data.role)
    // throw new Error('Function not implemented.');
    console.log(response)
    const formatted = {
      id:response.data._id,
      ...response.data
    }
    return { data: formatted}
  },
  delete: async (resource: string, params: DeleteParams) => {
    const response = await apiClient.delete(params.previousData.id)
    return {data: response}
  },
  deleteMany: function <RecordType extends RaRecord = any>(resource: string, params: DeleteManyParams<RecordType>): Promise<DeleteManyResult<RecordType>> {
    throw new Error('Function not implemented.');
  }
};

export default dataProvider;
