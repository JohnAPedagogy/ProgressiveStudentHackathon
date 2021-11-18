import * as faker from "faker";

const id = faker.datatype.number(99999);

export class TeachingClass {

  static metadata:any={
    'TutorPersonID':{
      "displayName" : "Tutor Person ID",
      "required":true,
      "type":"select",
      "selectmetadata":[
        {'text': 'Fran','value':1},
        {'text': 'John','value':2},
        {'text': 'Ale','value':3},
      ],
    },
    'PathwayModuleID':{
      "displayName" : "Pathway Module ID ",
      "required":true,
      "type":"select",
      "selectmetadata":[
        {'text': 'Fran','value':1},
        {'text': 'John','value':2},
        {'text': 'Ale','value':3},
      ],
    },
    'ID':{
      "disabled":"disabled",
      "type":"text",
      "required":true,
    }
  };  
  ID?: number =  id;
  PathwayModuleID?: string = 'pm1221';
  TutorPersonID?: string = 'u1221212';
}

