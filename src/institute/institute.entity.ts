import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

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
}
export default Institute;
