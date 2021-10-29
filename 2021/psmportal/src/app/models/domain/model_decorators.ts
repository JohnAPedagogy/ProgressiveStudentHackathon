import { Group } from "./Group";

export function Required(limit: number) {
    return function(target: Object, propertyKey: string) { 
      let value : string;
      // Group.missing.push(propertyKey);
      const getter = function() {
        console.log("getter called");
        return value;
      };
      const setter = function(newVal: string) {
        //  if(newVal.length < limit) {
          Object.defineProperty(target, 'errors', {
            value: `Your password should be bigger than ${limit}`
          });
            console.log("setter called");
        // }
        // else {
          value = newVal;
        // }      
      }; 
      Object.defineProperty(target, propertyKey, {
        enumerable:true,
        get: getter,
        set: setter
      }); 
    }
  }