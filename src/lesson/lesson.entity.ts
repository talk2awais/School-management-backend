import {
  Column,
  Entity,
  ObjectID,
  ObjectIdColumn,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class LessonEntity {
  @ObjectIdColumn()
  id: ObjectID;
  @Column()
  name: string;
  @Column()
  startDate: string;
  @Column()
  endDate: string;
}
