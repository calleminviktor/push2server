module.exports = ({ env }) => ({
  host: env('HOST', '185.115.216.59'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'd95eb161b7a0fb42a541c25591997605'),
    },
  },
});
