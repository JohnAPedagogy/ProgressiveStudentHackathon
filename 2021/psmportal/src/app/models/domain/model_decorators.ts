
export function Required(limit: number) {
    return function(target: Object, propertyKey: string) { 
      let value : string;
      const getter = function() {
        console.log("getter called");
        return value;
      };
      const setter = function(newVal: string) {
        //  if(newVal.length < limit) {
            console.log(Object.getOwnPropertyNames(target));
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
        get: getter,
        set: setter
      }); 
    }
  }