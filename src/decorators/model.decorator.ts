import {HTTPBuilder} from '../helpers/';

export interface IHTTPModelParameters {
    url?: string;
}

export function Model (params: IHTTPModelParameters = {}) {
    return function (target: any) {
        HTTPBuilder.addModel(target.name, params);
    };
}
