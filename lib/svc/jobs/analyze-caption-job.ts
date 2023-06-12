import logger from "@/lib/logger";
import { doSome } from "../helper";

async function analyzeCaptionJob(): Promise<void> {
  while (true) {
    logger.info("analyzing!!! ..");
    doSome();
    await new Promise(f => setTimeout(f, 1000));
  }

}

analyzeCaptionJob();


