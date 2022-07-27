import { DB } from "./DB";
import { Model } from "mongoose";

class BaseController<ControllerType> extends DB {

    protected model: Model<any>;

    constructor(model: Model<any>) {
        super();
        this.model = model;
        DB.connect();
    }

    public async all(): Promise<ControllerType[]> {
        let result = this.model.find({});
        return result;
    }

    public async find(params: any): Promise<ControllerType[]> {   
        let result = this.model.find(params)
        return result;
    }

    public async findById(id: String): Promise<ControllerType[]> {   
        let result = this.model.findById(id)
        return result;
    }

    public async findOne(params: any): Promise<ControllerType[]> {   
        let result = this.model.findOne(params)
        return result;
    }

    public async save(data: ControllerType): Promise<ControllerType> {
        let result = this.model.create(data)
        return result;
    }

    public async findByIdAndDelete(params: any): Promise<ControllerType[]> {   
        let result = this.model.findByIdAndDelete(params)
        return result;
    }
    
}

export { BaseController };