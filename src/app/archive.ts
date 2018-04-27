export class Archive {
    id: '';
    name = '';
    type = '';
  
    constructor(values: Object = {}) {
      Object.assign(this, values);
    }
  }