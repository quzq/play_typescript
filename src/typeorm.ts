import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { createQueryBuilder, JoinColumn, JoinTable, OneToOne, OneToMany, PrimaryColumn } from "typeorm";
/*
IDコード	IdCode	char	10
パスワード	IdPW	char	255
ID名称	IdName	char	20
ユーザー区分	IdUser	char	1
更新日付	IdUpdDate	char	8
*/
@Entity({ name: "m_users" })
export class MUsers {
  @Column({
    primary: true,
    unique: true,
    name: "userid",
    type: "varchar",
    length: 10,
  })
  userId: string = "";

  @Column({ name: "password", type: "varchar", length: 255 })
  password = "";

  @Column({ name: "name", type: "varchar", length: 20 })
  name: string = "";

  @Column({ name: "is_deleted", type: 'boolean' })
  isDeleted: boolean = false

  @Column({ name: "company_id", type: "integer" })
  company_id: number = 0;

  @Column({ name: "company_id", type: "integer" })
  department_id: number = 0;

  @OneToOne((type) => MCompanies)
  @JoinColumn([
    // {name: {ローカル物理カラム名}, referencedColumnName: {クラスメンバー名}}
    { name: 'company_id', referencedColumnName: 'id' },
  ])
  @JoinTable()
  company: MCompanies | null = null;

  @OneToOne((type) => MDepartments)
  @JoinColumn([
    { name: 'company_id', referencedColumnName: 'companyId' },
    { name: 'department_id', referencedColumnName: 'departmentId' },
  ])
  @JoinTable()
  department: MDepartments | null = null;

}
@Entity({ name: "m_companies" })
export class MCompanies {
  @PrimaryGeneratedColumn()
  readonly id: number = 0;

  @Column({ name: "name", type: "varchar", length: 20 })
  name = "";

  @Column({ name: "is_deleted", type: 'boolean' })
  isDeleted: boolean = false
}
@Entity({ name: "m_departments" })
export class MDepartments {
  @PrimaryColumn({ name: "company_id", type: "integer" })
  companyId: string = "";

  @PrimaryColumn({ name: "department_id", type: "integer" })
  departmentId: string = "";

  @Column({ name: "name", type: "varchar", length: 20 })
  name = "";

  @Column({ name: "is_deleted", type: 'boolean' })
  isDeleted: boolean = false
}


export default async () => {
  const options: ConnectionOptions = {
    type: "postgres",
    host: "localhost",
    port: 25432,
    username: "postgres",
    password: "postgres",
    database: "sample2",
    entities: [MUsers, MCompanies, MDepartments],
  };
  //   driver: {
  //     type: "sqlite",
  //     storage: "tasks.db",
  //     database: "Tasks",
  //   },
  //   entities: [
  //     // テーブルクラス
  //     MUser,
  //   ],
  //   synchronize: true,
  // };
  const cn = await createConnection(options);
  console.log("====== typeorm ===========================");

  console.log("====== 基本 ===========================");
  {
    const qb = createQueryBuilder().from(MUsers, "users");    //エイリアス名は必須
    console.log(qb.getSql());
  }
  console.log("====== 選択 ===========================");
  {
    const qb = createQueryBuilder().from(MUsers, "users").where('users.is_deleted = :is_deleted', { is_deleted: false })
    console.log(qb.getSql());
  }
  console.log("====== 射影 ===========================");
  {
    const qb = createQueryBuilder().select('id,name').from(MUsers, "users");
    console.log(qb.getSql());
  }
  console.log("====== 結合 ===========================");
  console.log("  ==== シンプル ===========================");
  {
    const qb = createQueryBuilder().select('id,name').from(MUsers, "users")
      .leftJoinAndSelect('users.company', 'companies') // joinするテーブル（usersから相対表記）、そのテーブルのエイリアス名
    console.log(qb.getSql());
    // const qb2 = createQueryBuilder().select('id,name').from(MUsers, "users")
    //   .leftJoinAndMapOne('users.company', qb => {
    //     qb.select().from(MCompanies, 'companies')
    //   }, 'companies', 'companies.id = users.company_id') // joinするテーブル（usersから相対表記）、そのテーブルのエイリアス名
    // console.log(qb2.getSql());
  }
  console.log("  ==== 複合主キーのテーブルへの結合 ===========================");
  {
    const qb = createQueryBuilder().select('id,name').from(MUsers, "users")
      .leftJoinAndSelect('users.department', 'departments') // joinするテーブル（usersから相対表記）、そのテーブルのエイリアス名
    console.log(qb.getSql());
  }
  console.log("====== サブクエリー ===========================");
  {
    const qb = createQueryBuilder().select('id,name').from(MUsers, "users")
      .where(qb => {
        const subQuery = qb.subQuery().select("companies.id").from(MCompanies, 'companies').where('companies.is_deleted = :is_deleted', { is_deleted: true }).getQuery()
        return "users.company_id in " + subQuery
      })
    console.log(qb.getSql());
  }
};
