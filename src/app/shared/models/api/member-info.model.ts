export class MemberInfo {
    public id: number;
    public name: string;
    public email: string;
    public balance: number;

    constructor(data: Partial<MemberInfo>) {
        Object.assign(this, data);
    }
}

export interface CreateMemberPayload {
    name: string;
    email: string;
    password: string;
}

export interface UpdateMemberPayload {
    name?: string;
    password?: string;
}