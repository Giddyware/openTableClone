// // import { Prisma, PrismaClient } from "@prisma/client";

// // declare global {
// //   //   var prisma: PrismaClient | undefined;
// //   var prisma:
// //     | PrismaClient<
// //         Prisma.PrismaClientOptions,
// //         never,
// //         Prisma.RejectOnNotFound | Prisma.RejectPerOperation | undefined
// //       >
// //     | undefined;
// // }
// // const client = globalThis || new PrismaClient();
// // if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
// // export default client;

// import { PrismaClient } from "@prisma/client";

// const globalForPrisma = globalThis as unknown as {
//   prisma: PrismaClient | undefined;
// };

// export default const prisma = globalForPrisma.prisma || new PrismaClient();

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

const db = globalThis.prisma || new PrismaClient();
if (process.env.NODE_ENV !== "production") globalThis.prisma = db;

export default db;
