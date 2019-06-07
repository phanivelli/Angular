export class Student {
    id:number;
    name:string;
    pocketMoney:number;
    jeeScore:number;
    attemptDate:Date;

    static students: Student[]=[
        {
            id:1, 
            name:'student1',
            pocketMoney:1000,
            jeeScore:2201,
            attemptDate:new Date("9/27/2017 11:45")
        },{
            id:2, 
            name:'student2',
            pocketMoney:2000,
            jeeScore:2204,
            attemptDate:new Date("9/27/2016 11:45")
        },

    ];
}