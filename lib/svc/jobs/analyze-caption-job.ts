import logger from "@/lib/logger";

async function analyzeCaptionJob(): Promise<void> {
  while (true) {
    logger.info("analyzing!!! ..");
    await new Promise(f => setTimeout(f, 1000));
  }

}

analyzeCaptionJob();


