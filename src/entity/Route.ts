import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"


@Entity()
export class Route {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    routeNo: number

    @Column()
    from: string

    @Column()
    to: string

    @Column()
    No_Of_Stations: number

    @Column("text", { array: true })
    stations: string[];

    @Column()
    price: number

}
