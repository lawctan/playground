
import { SHARE_ENV, Worker } from 'worker_threads';

import logger from '../logger';

const runWorker = async () => {
  const worker = new Worker('./dist/lib/svc/jobs/analyze-caption-job.js', { env: SHARE_ENV });
}

logger.info("starting worker");

runWorker();
