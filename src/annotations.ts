/**
* component is an Annotation which try to minimise the code around inject, and group meta and inject outside of the class.
*/
export function Component(arg: Contract = null, @paramtypes parameters?: any[]) {
    return (c) => {
        if (arg == null) { c.inject = parameters; return c; }

        c.inject = arg.inject == null ? parameters : arg.inject;
        if (arg.metadata != null) { c.metadata = arg.metadata; }
        
        return c;
    }
}

/**
* meta information about the control to be used with the IoC container.
*/
export interface Contract {
    
    /**
    * information about how the framework should treat this component
    */
    metadata?: any;
    
    /**
    * list of dependencies which this component relies upon
    */
    inject?: any[];
}