import { MemberInfo } from "./member-info.model";

export interface Group {
    id: number;
    name: string;
    description?: string;
    logo?: string;
    created_at: string;
    created_by: MemberInfo;
    members_count: number;
    joined: boolean;
    priority: number;
}

export interface QueryGroupParams {
    created_by?: number;
    name?: string;
    joined?: boolean;
}

export interface CreateGroupPayload {
    name: string;
    description?: string;
    logo?: string;
}