
import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import Notice from '../notice/notice.entity';

@Entity()
class Institute {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public name: string;

  @Column({ unique: true })
  public unique_id: string;

  @Column({ unique: true })
  public email: string;

  @Column()
  public password: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @CreateDateColumn({ type: 'timestamp' })
  updatedAt: Date;

  @OneToMany(()=>Notice,(notice:Notice)=>notice.institute)
  public notices: Notice[];
}
export default Institute;
