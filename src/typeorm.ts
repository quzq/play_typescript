import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { createConnection, ConnectionOptions, Connection } from "typeorm";
import { createQueryBuilder } from "typeorm";
/*
IDコード	IdCode	char	10
パスワード	IdPW	char	255
ID名称	IdName	char	20
ユーザー区分	IdUser	char	1
更新日付	IdUpdDate	char	8
*/
@Entity({ name: "m_user" })
export class MUser {
  @Column({
    primary: true,
    unique: true,
    name: "userid",
    type: "varchar",
    length: 10,
  })
  userId = "";

  @Column({ name: "password", type: "varchar", length: 255 })
  password = "";

  @Column({ name: "name", type: "varchar", length: 20 })
  name = "";
}

export default async () => {
  const options: ConnectionOptions = {
    type: "sqlite",
    database: `./data/line.sqlite`,
    entities: [MUser],
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
  {
    const qb = createQueryBuilder().from(MUser, "users");
    console.log(qb.getSql());
  }
};
