export class postData{
   
    task_id!:number;
    
    owner_id!:number;
    creator_id!:number;
    name!:string;
    description!:string;
    status!:string;
    priority!:string;
    notes!:string;
    isBookmarked!:boolean;
    created_on!:Date;
    status_changed_on!:Date;

}

export interface respData{
   // title:string;
    //body:string;
    //userId:number;
    //id:number;
    
    task_id:number;
    //'task_id':number;
    owner_id:number;
    creator_id:number;
    name:string;
    description:string;
    status:string;
    priority:string;
    notes:string;
    isBookmarked:boolean;
    created_on:Date;
    status_changed_on:Date;

}