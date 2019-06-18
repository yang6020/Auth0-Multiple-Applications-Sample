// tslint:disable-next-line:interface-over-type-literal
export type Company = {
    id: number;
    name: string;
    description: string;
    jobs: [Job]
}
// tslint:disable-next-line:interface-over-type-literal
export type Job = {
    id: number;
    title: string;
    description: string;
}
// tslint:disable-next-line:interface-over-type-literal
export type Query = {
    companies: Company[];
    jobs: Job[];
}
