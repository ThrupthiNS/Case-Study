export class postData{
    user_id!: number;
    username!: string;
    email!: string;
    first_name!: string;
    last_name!: string;
    contact_number!: bigint;
    role!: string;
    isactive!: boolean;
    dob!: Date;
    created_on!: Date;
    pwd!: string;
    }
    export interface respData{
        user_id: number;
        username: string;
        email: string;
        first_name: string;
        last_name: string;
        contact_number: bigint;
        role: string;
        isactive: boolean;
        dob: Date;
        created_on: Date;
        pwd: string;
    }