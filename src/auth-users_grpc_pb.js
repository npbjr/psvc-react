// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var src_auth$users_pb = require('../src/auth-users_pb.js');

function serialize_users_LoginRequest(arg) {
  if (!(arg instanceof src_auth$users_pb.LoginRequest)) {
    throw new Error('Expected argument of type users.LoginRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_LoginRequest(buffer_arg) {
  return src_auth$users_pb.LoginRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_LoginResponse(arg) {
  if (!(arg instanceof src_auth$users_pb.LoginResponse)) {
    throw new Error('Expected argument of type users.LoginResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_LoginResponse(buffer_arg) {
  return src_auth$users_pb.LoginResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_RegisterRequest(arg) {
  if (!(arg instanceof src_auth$users_pb.RegisterRequest)) {
    throw new Error('Expected argument of type users.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_RegisterRequest(buffer_arg) {
  return src_auth$users_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_users_RegisterResponse(arg) {
  if (!(arg instanceof src_auth$users_pb.RegisterResponse)) {
    throw new Error('Expected argument of type users.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_users_RegisterResponse(buffer_arg) {
  return src_auth$users_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var AuthUsersServiceService = exports.AuthUsersServiceService = {
  login: {
    path: '/users.AuthUsersService/Login',
    requestStream: false,
    responseStream: false,
    requestType: src_auth$users_pb.LoginRequest,
    responseType: src_auth$users_pb.LoginResponse,
    requestSerialize: serialize_users_LoginRequest,
    requestDeserialize: deserialize_users_LoginRequest,
    responseSerialize: serialize_users_LoginResponse,
    responseDeserialize: deserialize_users_LoginResponse,
  },
  register: {
    path: '/users.AuthUsersService/Register',
    requestStream: false,
    responseStream: false,
    requestType: src_auth$users_pb.RegisterRequest,
    responseType: src_auth$users_pb.RegisterResponse,
    requestSerialize: serialize_users_RegisterRequest,
    requestDeserialize: deserialize_users_RegisterRequest,
    responseSerialize: serialize_users_RegisterResponse,
    responseDeserialize: deserialize_users_RegisterResponse,
  },
};

exports.AuthUsersServiceClient = grpc.makeGenericClientConstructor(AuthUsersServiceService);
