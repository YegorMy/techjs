import {HTTPBuilder} from '../helpers/';

export type THTTPMethods = 'GET' | 'get' | 'POST' | 'post' | 'PUT' | 'put' | 'DELETE' | 'delete' | 'OPTIONS' | 'options';

export interface IHTTPArgument {
    name: string;
    type: string;
    required?: boolean;
    description?: string;
    source?: string;
}

export interface IHTTPMethodParameters {
    method: THTTPMethods;
    path: string;
    args?: IHTTPArgument[];
}

export function HttpMethod (params: IHTTPMethodParameters) {
    return function (target: object, propertyKey: string, descriptor: PropertyDescriptor) {
        HTTPBuilder.addMethod(`${target.constructor['name']}.${propertyKey}`, params);
    };
}
