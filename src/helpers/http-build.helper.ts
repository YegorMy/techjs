import {IHTTPMethodParameters, IHTTPModelParameters} from '../decorators/';

export class HTTPBuilder {
    public static HTTPMethods:Map<string, IHTTPMethodParameters> = new Map<string, IHTTPMethodParameters>();
    public static HTTPModels:Map<string, IHTTPModelParameters> = new Map<string, IHTTPModelParameters>();

    public static addMethod (methodName: string, methodArgs: IHTTPMethodParameters) {
        HTTPBuilder.HTTPMethods.set(methodName, methodArgs);
    }

    public static addModel (modelName: string, modelArgs: IHTTPModelParameters) {
        HTTPBuilder.HTTPModels.set(modelName, modelArgs);
    }
}
