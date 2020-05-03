import config from './config/config';
import app from './config/express';

if (!module.parent) {
  // listen on port config.port
  app.listen(config.port, () => {
    console.log(`server started on  port http:///192.192.155.114:${config.port} (${config.env})`);
  });
}

export default app;

