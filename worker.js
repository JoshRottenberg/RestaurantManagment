// creae a worker 
// export default class Worker {
//     constructor(name, workerType) {
//         this.name = name;
//         this.workerType = workerType; // make sure only cheff or waitor
//         this.isFree = true; 
//     }
// };

export default class Worker {
    constructor(name, workerType) {
      this.name = name;
      this.workerType = workerType;
      this.isFree = true;
    }
  
    setFreeStatus(status) {
      this.isFree = status;
    }
  };