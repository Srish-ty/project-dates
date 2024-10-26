import { objectType } from 'nexus';

export const User = objectType({
  name: 'User',
  description: 'Registered user',
  definition(t) {
    t.nonNull.string('id');
    t.nonNull.string('email');
    t.nonNull.string('uid');
    t.string('name');
    t.string('photo');
    t.gender('gender');
    t.date('dob');
    t.string('state');
    t.string('city');
    t.string('college');
    t.string('idCard');
    t.string('stream');
    t.string('mobile');
    t.string('selfID');
    t.string('referredBy');
    t.boolean('hasPaid');
    t.string('receipt');
    t.string('rollNumber');
    t.date('createdAt');
    t.string('transactionID');
    t.nonNull.list.nonNull.id('ca');

    t.nonNull.list.nonNull.id('festID');
    /*
    t.nonNull.list.field('fests', {
      type: nonNull('Org'),
      resolve(parent, _args, { prisma }) {
        return prisma.org.findMany({
          where: {
            festID: {
              in: parent.festID,
            },
          },
        });
      },
    }); */
  },
});
